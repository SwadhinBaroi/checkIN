import { z } from 'zod';

export const formSchema = z.object({
  fullName: z.string().min(1, 'Full Name must be required'),
  gender: z.enum(['male', 'female', 'non_binary', 'other']),
  dateOfBirth: z.date(),
  pronouns: z.enum(['he_him', 'she_her', 'they_them', 'other']),
  medicaId: z.string().regex(/^\d{12}$/, 'MEDICAID must be exactly 12 digits'),
  idCard: z.enum(['yes', 'no', 'lost']),
  insurance: z.enum(['humana', 'aetna', 'magellan', 'anthem', 'sentara', 'united', 'dont_know']),
  race: z.enum([
    'black_african_american',
    'caucasian',
    'hispanic_latino',
    'american_indian_alaskan_native',
    'biracial',
    'asian',
    'middle_eastern',
    'hawaiian_pacific_islander',
    'other',
  ]),

  employed: z.enum(['yes', 'no', 'disabled', 'retired']),

  shower: z.enum(['yes', 'no']),
  hungry: z.enum(['yes', 'no']),
  homeless: z.enum(['yes', 'no']),
  emergencyContact: z.string().min(3, 'Emergency Contact must be required'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  ssn: z.string().regex(/^\d{10}$/, 'SSN must be 10 digits'),
  lastKnownStreet: z.string().min(3, 'Last Known Street must be required'),
  secondStreet: z.string(),
  // streetName: z.string(),
  state: z.enum(['VA', 'MD', 'NC', 'SC']),
  city: z.string().min(2, 'City name must be required'),
  zipCode: z.string().regex(/^\d{5}$/, 'Zip code must be 5 digits'),
  serviceArea: z.enum([
    'petersburg',
    'east_end',
    'west_end',
    'chesterfield',
    'chester',
    'colonial_heights',
    'north_side_richmond',
    'southside_richmond',
    'church_hill',
    'ashland',
    'hopewell',
  ]),
});

export type FormData = z.infer<typeof formSchema>;
