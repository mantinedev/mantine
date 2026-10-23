import { Fieldset, Select, SimpleGrid, Stack, TextInput } from '@mantine/core';
import type { FormPath, UseFormReturnType } from '@mantine/form';
import { COUNTRIES } from '../data';
import type { Address } from '../types';

interface AddressFieldsProps<Values> {
  form: UseFormReturnType<Values>;
  path: FormPath<Values, Address>;
  legend: string;
  disabled?: boolean;
}

export function AddressFields<Values>({
  form,
  path,
  legend,
  disabled,
}: AddressFieldsProps<Values>) {
  return (
    <Fieldset legend={legend} disabled={disabled}>
      <Stack gap="md">
        <TextInput
          label="Street"
          placeholder="Street and number"
          withAsterisk
          autoComplete="street-address"
          {...form.getInputProps(`${path}.street`)}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="City"
            placeholder="City"
            withAsterisk
            autoComplete="address-level2"
            {...form.getInputProps(`${path}.city`)}
          />
          <TextInput
            label="Postal code"
            placeholder="Postal code"
            withAsterisk
            autoComplete="postal-code"
            {...form.getInputProps(`${path}.postalCode`)}
          />
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Select
            label="Country"
            placeholder="Pick a country"
            data={COUNTRIES}
            withAsterisk
            allowDeselect={false}
            {...form.getInputProps(`${path}.country`)}
          />
          <TextInput
            label="State or region"
            placeholder="State or region"
            autoComplete="address-level1"
            {...form.getInputProps(`${path}.region`)}
          />
        </SimpleGrid>
      </Stack>
    </Fieldset>
  );
}
