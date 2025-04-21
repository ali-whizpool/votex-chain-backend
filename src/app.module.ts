import { Module } from '@nestjs/common';
import { VoterModule } from './app/voter/voter.module';

@Module({
  imports: [VoterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
