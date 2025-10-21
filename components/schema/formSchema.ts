import { z } from 'zod';

export const formSchema = z.object({
  fullName: z.string().min(1, 'Full Name must be required'),

  gender: z.enum(['male', 'female', 'non_binary', 'other']),
  dateOfBirth: z.date(),
  pronouns: z.enum(['he_him', 'she_her', 'they_them', 'other']),
  medicaId: z.string().length(9, 'MEDICAID must be 9 digits'),
  idCard: z.enum(['yes', 'no', 'lost']),
  insurance: z.enum(['humana', 'aetna', 'magellan', 'anthem', 'sentara', 'united']),
  race: z.enum([
    'black_african_american',
    'caucasian',
    'hispanic_latino',
    'american_indian_alaskan_native',
    'biracial',
    'asian',
    'middle_eastern',
    'hawaiian_pacific_islander',
  ]),

  employed: z.enum(['yes', 'no']),
  shower: z.enum(['yes', 'no']),
  hungry: z.enum(['yes', 'no']),
  homeless: z.enum(['yes', 'no']),
  emergencyContact: z.string(),
  phone: z.string().length(9, 'Phone must be 9 digits'),
  ssn: z.string().length(9, 'SSN must be 9 digits'),
  lastKnownStreet: z.string(),
  secondStreet: z.string(),
  streetName: z.string(),
  state: z.string(),
  city: z.string(),
  zipCode: z.string().length(5, 'Zip code must be 5 digits'),
  serviceArea: z.enum(['richmond', 'east_end', 'chesterfield', 'henrico']),
});

export type FormData = z.infer<typeof formSchema>;
