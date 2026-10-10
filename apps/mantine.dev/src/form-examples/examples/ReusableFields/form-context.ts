import { createFormContext } from '@mantine/form';

export interface ProfileValues {
  fullName: string;
  username: string;
  email: string;
  role: string | null;
  timezone: string | null;
}

export const [ProfileFormProvider, useProfileFormContext, useProfileForm] =
  createFormContext<ProfileValues>();
