import { Fieldset, Select, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { COUNTRIES } from './constants';
import type { AddressFormType } from './types';

interface AddressFieldsProps {
  form: AddressFormType;
  legend: string;
  disabled?: boolean;
}

export function AddressFields({ form, legend, disabled = false }: AddressFieldsProps) {
  return (
    <Fieldset legend={legend} disabled={disabled}>
      <Stack>
        <TextInput
          label="Street"
          placeholder="Street"
          withAsterisk
          disabled={disabled}
          {...form.getInputProps('address.street')}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="City"
            placeholder="City"
            withAsterisk
            disabled={disabled}
            {...form.getInputProps('address.city')}
          />
          <TextInput
            label="Postal code"
            placeholder="Postal code"
            withAsterisk
            disabled={disabled}
            {...form.getInputProps('address.postalCode')}
          />
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Select
            label="Country"
            placeholder="Country"
            data={COUNTRIES}
            withAsterisk
            allowDeselect={false}
            disabled={disabled}
            {...form.getInputProps('address.country')}
          />
          <TextInput
            label="State or region"
            placeholder="State or region"
            disabled={disabled}
            {...form.getInputProps('address.region')}
          />
        </SimpleGrid>
      </Stack>
    </Fieldset>
  );
}
