import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { VoterService } from '../voter/voter.service';
import { LoginDto, RegisterDto, MfaSetupDto, VerifyMfaDto } from './schema/auth.schema';
import * as bcrypt from 'bcrypt';
import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';

@Injectable()
export class AuthService {
  constructor(
    private voterService: VoterService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Check if voter already exists
    const existingVoter = await this.voterService.findByEmail(registerDto.email);
    if (existingVoter) {
      throw new UnauthorizedException('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Create voter with all required fields
    const voter = await this.voterService.create({
      email: registerDto.email,
      password: hashedPassword,
      confirmPassword: hashedPassword, // Store hashed password as confirmPassword
      firstName: registerDto.firstName,
      lastName: registerDto.lastName,
      dateOfBirth: registerDto.dateOfBirth,
      nationality: registerDto.nationality,
      address: registerDto.address,
      governmentId: registerDto.governmentId,
      phoneNumber: registerDto.phoneNumber,
      isVerified: false,
      verificationStatus: 'PENDING',
    });

    // Generate JWT token
    const token = this.generateToken(voter.id, registerDto.email);

    return {
      token,
      voter: {
        id: voter.id,
        email: voter.email,
        firstName: voter.firstName,
        lastName: voter.lastName,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const { email, password, otp } = loginDto;

    // Find voter
    const voter = await this.voterService.findByEmail(email);
    if (!voter) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, voter.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // If MFA is enabled, verify OTP
    if (voter.mfaEnabled && !otp) {
      return { requiresMfa: true };
    }

    if (voter.mfaEnabled && otp) {
      const isValid = this.verifyMfaToken(voter.mfaSecret, otp);
      if (!isValid) {
        throw new UnauthorizedException('Invalid MFA code');
      }
    }

    // Generate JWT token
    const token = this.generateToken(voter.id, email);

    return {
      token,
      voter: {
        id: voter.id,
        email: voter.email,
        firstName: voter.firstName,
        lastName: voter.lastName,
      },
    };
  }

  async setupMfa(voterId: string, mfaSetupDto: MfaSetupDto) {
    const voter = await this.voterService.findById(voterId);
    if (!voter) {
      throw new UnauthorizedException('Voter not found');
    }

    const secret = speakeasy.generateSecret({
      name: `VotexChain:${voter.email}`,
    });

    // Generate QR code
    const qrCode = await qrcode.toDataURL(secret.otpauth_url || '');

    // Save MFA secret to voter
    await this.voterService.updateMfaSecret(voterId, secret.base32);

    return {
      secret: secret.base32,
      qrCode,
    };
  }

  async verifyMfa(voterId: string, verifyMfaDto: VerifyMfaDto) {
    const voter = await this.voterService.findById(voterId);
    if (!voter) {
      throw new UnauthorizedException('Voter not found');
    }

    if (!voter.mfaEnabled) {
      throw new UnauthorizedException('MFA is not enabled for this voter');
    }

    const isValid = this.verifyMfaToken(voter.mfaSecret, verifyMfaDto.code);
    if (!isValid) {
      throw new UnauthorizedException('Invalid MFA code');
    }

    return { success: true };
  }

  verifyMfaToken(secret: string, token: string): boolean {
    return speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
    });
  }

  private generateToken(voterId: string, email: string): string {
    return this.jwtService.sign({
      sub: voterId,
      email,
    });
  }
}
