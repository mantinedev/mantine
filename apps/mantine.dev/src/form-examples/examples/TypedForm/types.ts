import { UseFormReturnType } from '@mantine/form';

export interface ProfileValues {
  name: string;
  age: string;
  tags: string;
}

export interface ProfilePayload {
  name: string;
  age: number;
  tags: string[];
}

export type ProfileForm = UseFormReturnType<ProfileValues, ProfilePayload>;
