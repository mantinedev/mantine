import { UseFormReturnType } from '@mantine/form';

export interface WizardValues {
  username: string;
  password: string;
  name: string;
  email: string;
}

export type WizardForm = UseFormReturnType<WizardValues>;
