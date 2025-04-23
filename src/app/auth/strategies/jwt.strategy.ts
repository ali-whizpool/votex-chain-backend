import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { VoterService } from '../../voter/voter.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private voterService: VoterService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const voter = await this.voterService.findById(payload.sub);
    if (!voter) {
      return null;
    }
    return voter;
  }
} 