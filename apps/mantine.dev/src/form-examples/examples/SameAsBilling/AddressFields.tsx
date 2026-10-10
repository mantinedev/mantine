import { Fieldset, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { AddressValues } from './types';

interface AddressFieldsProps {
  form: UseFormReturnType<AddressValues>;
  prefix: 'billing' | 'shipping';
  legend: string;
  disabled?: boolean;
}

export function AddressFields({ form, prefix, legend, disabled = false }: AddressFieldsProps) {
  return (
    <Fieldset legend={legend}>
      <Stack gap="sm">
        <TextInput
          size="md"
          label="Street"
          placeholder="12 Main St"
          withAsterisk={!disabled}
          {...form.getInputProps(`${prefix}.street`)}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            size="md"
            label="City"
            placeholder="Springfield"
            withAsterisk={!disabled}
            {...form.getInputProps(`${prefix}.city`)}
          />

          <TextInput
            size="md"
            label="ZIP code"
            placeholder="12345"
            withAsterisk={!disabled}
            {...form.getInputProps(`${prefix}.zip`)}
          />
        </SimpleGrid>
      </Stack>
    </Fieldset>
  );
}
