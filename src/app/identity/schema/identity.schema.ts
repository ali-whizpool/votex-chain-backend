import { z } from 'zod';

export const identityVerificationSchema = z.object({
  documentType: z.enum(['NATIONAL_ID', 'PASSPORT', 'DRIVING_LICENSE']),
  documentNumber: z.string(),
  documentImage: z.string(), // Base64 encoded image
  selfieImage: z.string(), // Base64 encoded image for facial verification
  verificationMethod: z.enum(['AUTOMATIC', 'MANUAL']),
  verificationProvider: z.string().optional(), // For third-party verification services
});

export const biometricVerificationSchema = z.object({
  type: z.enum(['FINGERPRINT', 'FACIAL']),
  data: z.string(), // Base64 encoded biometric data
  deviceId: z.string().optional(),
  timestamp: z.string().datetime(),
});

export const governmentIdValidationSchema = z.object({
  idType: z.enum(['NATIONAL_ID', 'PASSPORT', 'DRIVING_LICENSE']),
  idNumber: z.string(),
  country: z.string(),
  validationService: z.string(), // Name of the government validation service
});

export type IdentityVerificationDto = z.infer<typeof identityVerificationSchema>;
export type BiometricVerificationDto = z.infer<typeof biometricVerificationSchema>;
export type GovernmentIdValidationDto = z.infer<typeof governmentIdValidationSchema>;
