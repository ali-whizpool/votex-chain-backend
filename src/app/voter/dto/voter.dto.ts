import { createZodDto } from 'nestjs-zod';
import { CreateVoterSchema } from '../schema/voter.schema';

export class CreateVoterDto extends createZodDto(CreateVoterSchema) {}
export class UpdateVoterDto extends createZodDto(CreateVoterSchema.partial()) {}
