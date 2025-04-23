import { createZodDto } from 'nestjs-zod';
import { CreateIdentitySchema } from '../schema/identity.schema';

export class CreateIdentityDto extends createZodDto(CreateIdentitySchema) {}
export class UpdateIdentityDto extends createZodDto(CreateIdentitySchema.partial()) {}
