import { Injectable } from '@nestjs/common';
import { VoterRegistrationDto, VoterProfileDto } from './schema/voter.schema';

@Injectable()
export class VoterService {
  private voters: Map<string, any> = new Map();

  async create(voterData: VoterRegistrationDto) {
    const voter = {
      id: this.generateId(),
      ...voterData,
      createdAt: new Date(),
      updatedAt: new Date(),
      mfaEnabled: false,
      mfaSecret: null,
    };

    this.voters.set(voter.id, voter);
    return voter;
  }

  async findByEmail(email: string) {
    for (const voter of this.voters.values()) {
      if (voter.email === email) {
        return voter;
      }
    }
    return null;
  }

  async findById(id: string) {
    return this.voters.get(id) || null;
  }

  async updateMfaSecret(id: string, secret: string) {
    const voter = await this.findById(id);
    if (voter) {
      voter.mfaEnabled = true;
      voter.mfaSecret = secret;
      voter.updatedAt = new Date();
      this.voters.set(id, voter);
    }
    return voter;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
