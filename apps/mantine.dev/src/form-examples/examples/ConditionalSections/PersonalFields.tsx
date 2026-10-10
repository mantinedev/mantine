import { SimpleGrid, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
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
          label="First name"
          placeholder="Jane"
          withAsterisk
          {...form.getInputProps('personal.firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Doe"
          withAsterisk
          {...form.getInputProps('personal.lastName')}
        />
      </SimpleGrid>
      <DateInput
        label="Birth date"
        placeholder="Pick a date"
        withAsterisk
        maxDate={new Date()}
        {...form.getInputProps('personal.birthDate')}
      />
    </>
  );
}
