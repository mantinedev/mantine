import { Fieldset, Select, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { useFormContext } from './form-context';

const COUNTRIES = ['United Kingdom', 'United States', 'Germany', 'France', 'Japan'];

export function AddressFields() {
  const form = useFormContext();

  return (
    <Fieldset legend="Shipping address">
      <Stack gap="sm">
        <TextInput
          label="Street"
          placeholder="12 Baker St"
          withAsterisk
          {...form.getInputProps('street')}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="City"
            placeholder="London"
            withAsterisk
            {...form.getInputProps('city')}
          />
          <TextInput
            label="Postal code"
            placeholder="NW1 6XE"
            {...form.getInputProps('postalCode')}
          />
        </SimpleGrid>
        <Select
          label="Country"
          placeholder="Pick a country"
          data={COUNTRIES}
          withAsterisk
          {...form.getInputProps('country')}
        />
      </Stack>
    </Fieldset>
  );
}
