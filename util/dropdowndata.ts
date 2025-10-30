export type OptionType = {
  label: string;
  value: string;
};

export const pronounsData: OptionType[] = [
  { label: 'He/Him', value: 'he_him' },
  { label: 'She/Her', value: 'she_her' },
  { label: 'They/Them', value: 'they_them' },
  { label: 'Other', value: 'other' },
];

export const gernderData: OptionType[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non_binary' },
  { label: 'Other', value: 'other' },
];

export const idCardData: OptionType[] = [
  { label: 'YES', value: 'yes' },
  { label: 'NO', value: 'no' },
  { label: 'LOST/STOLEN', value: 'lost' },
];

export const raceData: OptionType[] = [
  { label: 'Black/African American', value: 'black_african_american' },
  { label: 'Caucasian', value: 'caucasian' },
  { label: 'Hispanic/Latino', value: 'hispanic_latino' },
  { label: 'American Indian or Alaskan Native', value: 'american_indian_alaskan_native' },
  { label: 'Biracial', value: 'biracial' },
  { label: 'Asian', value: 'asian' },
  { label: 'Middle Eastern', value: 'middle_eastern' },
  { label: 'Hawaiian/Pacific Islander', value: 'hawaiian_pacific_islander' },
  { label: 'Other', value: 'other' },
];

export const insuranceData: OptionType[] = [
  { label: 'Humana', value: 'humana' },
  { label: 'Aetna', value: 'aetna' },
  { label: 'Magellan', value: 'magellan' },
  { label: 'Anthem', value: 'anthem' },
  { label: 'Sentara', value: 'sentara' },
  { label: 'United', value: 'united' },
  { label: "I Don't Know", value: 'dont_know' },
];

export const serviceAreaData: OptionType[] = [
  { label: 'Petersburg', value: 'petersburg' },
  { label: 'East End', value: 'east_end' },
  { label: 'West End', value: 'west_end' },
  { label: 'Chesterfield', value: 'chesterfield' },
  { label: 'Chester', value: 'chester' },
  { label: 'Colonial Heights', value: 'colonial_heights' },
  { label: 'North side Richmond', value: 'north_side_richmond' },
  { label: 'Southside Richmond', value: 'southside_richmond' },
  { label: 'Church Hill', value: 'church_hill' },
  { label: 'Ashland', value: 'ashland' },
  { label: 'Hopewell', value: 'hopewell' },
];

export const employedData: OptionType[] = [
  { label: 'YES', value: 'yes' },
  { label: 'NO', value: 'no' },
  { label: 'DISABLED', value: 'disabled' },
  { label: 'RETIRED', value: 'retired' },
];

export const showerData: OptionType[] = [
  { label: 'YES', value: 'yes' },
  { label: 'NO', value: 'no' },
];

export const hungryData: OptionType[] = [
  { label: 'YES', value: 'yes' },
  { label: 'NO', value: 'no' },
];

export const homelessData: OptionType[] = [
  { label: 'YES', value: 'yes' },
  { label: 'NO', value: 'no' },
];

export const stateNamesData: OptionType[] = [
  { label: 'Virginia', value: 'VA' },
  { label: 'Maryland', value: 'MD' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'South Carolina', value: 'SC' },
];
