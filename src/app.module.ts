import { Module } from '@nestjs/common';
import { VoterModule } from './app/voter/voter.module';
import { AuthModule } from './app/auth/auth.module';
import { IdentityModule } from './app/identity/identity.module';
import { EligibilityModule } from './app/eligibility/eligibility.module';

@Module({
  imports: [VoterModule, AuthModule, IdentityModule, EligibilityModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
