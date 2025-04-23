import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, MfaSetupDto, VerifyMfaDto } from './schema/auth.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('mfa/setup')
  async setupMfa(@Body() mfaSetupDto: MfaSetupDto) {
    // In a real application, you would get the voter ID from the authenticated user
    const voterId = 'temp-voter-id'; // This should come from the authenticated user
    return this.authService.setupMfa(voterId, mfaSetupDto);
  }

  @Post('mfa/verify')
  async verifyMfa(@Body() verifyMfaDto: VerifyMfaDto) {
    // In a real application, you would get the voter ID from the authenticated user
    const voterId = 'temp-voter-id'; // This should come from the authenticated user
    return this.authService.verifyMfa(voterId, verifyMfaDto);
  }
}
