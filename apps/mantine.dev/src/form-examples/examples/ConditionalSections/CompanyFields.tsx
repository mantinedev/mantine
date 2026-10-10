import { TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { CompanyValues } from './types';

interface CompanyFieldsProps {
  form: UseFormReturnType<{ company: CompanyValues }>;
}

export function CompanyFields({ form }: CompanyFieldsProps) {
  return (
    <>
      <TextInput
        size="md"
        label="Company name"
        placeholder="Mantine Inc."
        withAsterisk
        {...form.getInputProps('company.name')}
      />

      <TextInput
        size="md"
        label="VAT number"
        placeholder="DE123456789"
        description="Two uppercase letters followed by 8–12 digits"
        withAsterisk
        {...form.getInputProps('company.vatNumber')}
      />

      <TextInput
        size="md"
        label="Contact person"
        placeholder="Jane Doe"
        withAsterisk
        {...form.getInputProps('company.contactPerson')}
      />
    </>
  );
}
