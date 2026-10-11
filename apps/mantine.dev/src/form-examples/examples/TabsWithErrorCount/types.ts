import { UseFormReturnType } from '@mantine/form';

export interface SettingsValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export type SettingsForm = UseFormReturnType<SettingsValues>;
