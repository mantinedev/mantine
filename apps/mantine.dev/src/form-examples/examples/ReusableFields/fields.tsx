import { Select, SelectProps, TextInput, TextInputProps } from '@mantine/core';
import type { LooseKeys } from '@mantine/form';
import { ProfileValues, useProfileFormContext } from './form-context';

interface FieldProps {
  name: LooseKeys<ProfileValues>;
}

export function TextField({ name, ...props }: FieldProps & Omit<TextInputProps, 'name'>) {
  const form = useProfileFormContext();
  return <TextInput name={name} {...props} {...form.getInputProps(name)} />;
}

export function SelectField({ name, ...props }: FieldProps & Omit<SelectProps, 'name'>) {
  const form = useProfileFormContext();
  return <Select name={name} {...props} {...form.getInputProps(name)} />;
}
