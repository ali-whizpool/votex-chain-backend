import { z } from 'zod';

export const ageVerificationSchema = z.object({
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  minimumAge: z.number().int().positive(),
  country: z.string(),
});

export const citizenshipVerificationSchema = z.object({
  nationality: z.string(),
  country: z.string(),
  documentType: z.enum(['NATIONAL_ID', 'PASSPORT', 'CITIZENSHIP_CERTIFICATE']),
  documentNumber: z.string(),
});

export const residencyVerificationSchema = z.object({
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postalCode: z.string(),
  }),
  proofType: z.enum(['UTILITY_BILL', 'RENTAL_AGREEMENT', 'TAX_DOCUMENT']),
  documentImage: z.string(), // Base64 encoded image
  issueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const duplicateCheckSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  governmentId: z.string(),
  biometricHash: z.string().optional(),
});

export type AgeVerificationDto = z.infer<typeof ageVerificationSchema>;
export type CitizenshipVerificationDto = z.infer<typeof citizenshipVerificationSchema>;
export type ResidencyVerificationDto = z.infer<typeof residencyVerificationSchema>;
export type DuplicateCheckDto = z.infer<typeof duplicateCheckSchema>;
