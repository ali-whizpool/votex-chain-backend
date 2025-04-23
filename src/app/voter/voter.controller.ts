import { Controller } from '@nestjs/common';
import { VoterService } from './voter.service';

@Controller('voter')
export class VoterController {
  constructor(private readonly voterService: VoterService) {}
}
