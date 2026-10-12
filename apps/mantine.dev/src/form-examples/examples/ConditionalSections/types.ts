import { UseFormReturnType } from '@mantine/form';

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

export interface AccountValues {
  accountType: AccountType;
  personal: PersonalValues;
  company: CompanyValues;
}

export type AccountForm = UseFormReturnType<AccountValues>;
