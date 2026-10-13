import { UseFormReturnType } from '@mantine/form';

export interface ProfileValues {
  name: string;
  email: string;
  website: string;
}

export type ProfileForm = UseFormReturnType<ProfileValues>;
