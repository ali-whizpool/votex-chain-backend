import { createZodDto } from 'nestjs-zod';
import { CreateEligibilitySchema } from '../schema/eligibility.schema';

export class CreateEligibilityDto extends createZodDto(CreateEligibilitySchema) {}
export class UpdateEligibilityDto extends createZodDto(CreateEligibilitySchema.partial()) {}
