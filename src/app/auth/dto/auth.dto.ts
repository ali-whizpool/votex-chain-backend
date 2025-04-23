import { createZodDto } from "nestjs-zod";
import { AuthSchema } from "../schema/auth.schema";

export class AuthDto extends createZodDto(AuthSchema) {}