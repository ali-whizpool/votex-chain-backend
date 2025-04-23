import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  otp: z.string().optional(), // For MFA
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const mfaSetupSchema = z.object({
  type: z.enum(['SMS', 'EMAIL', 'AUTHENTICATOR']),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional(),
});

export const verifyMfaSchema = z.object({
  token: z.string(),
  code: z.string().length(6),
});

export type LoginDto = z.infer<typeof loginSchema>;
export type RegisterDto = z.infer<typeof registerSchema>;
export type MfaSetupDto = z.infer<typeof mfaSetupSchema>;
export type VerifyMfaDto = z.infer<typeof verifyMfaSchema>;
