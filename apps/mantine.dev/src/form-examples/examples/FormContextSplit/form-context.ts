import { createFormContext } from '@mantine/form';

export interface AccountValues {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;
  country: string | null;
}

export const [FormProvider, useFormContext, useForm] = createFormContext<AccountValues>();
