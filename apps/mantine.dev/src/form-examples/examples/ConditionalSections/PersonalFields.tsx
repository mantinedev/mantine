import { SimpleGrid, TextInput } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import { PersonalValues } from './types';

interface PersonalFieldsProps {
  form: UseFormReturnType<{ personal: PersonalValues }>;
}

export function PersonalFields({ form }: PersonalFieldsProps) {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          size="md"
          label="First name"
          placeholder="Jane"
          withAsterisk
          {...form.getInputProps('personal.firstName')}
        />

        <TextInput
          size="md"
          label="Last name"
          placeholder="Doe"
          withAsterisk
          {...form.getInputProps('personal.lastName')}
        />
      </SimpleGrid>

      <MaskedDateInput
        size="md"
        label="Birth date"
        withAsterisk
        maxDate={new Date()}
        {...form.getInputProps('personal.birthDate')}
      />
    </>
  );
}
