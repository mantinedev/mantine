export type AccountType = 'personal' | 'company';

export interface PersonalValues {
  firstName: string;
  lastName: string;
  birthDate: string | null;
}

export interface CompanyValues {
  name: string;
  vatNumber: string;
  contactPerson: string;
}

export interface Values {
  accountType: AccountType;
  personal: PersonalValues;
  company: CompanyValues;
}
