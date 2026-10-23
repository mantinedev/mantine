import { SimpleGrid, Stack, TextInput } from '@mantine/core';
import { AddressFields } from '../AddressFields/AddressFields';
import type { OrganizationFormType } from '../types';

export function OrganizationSection({ form }: { form: OrganizationFormType }) {
  return (
    <Stack gap="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Organization name"
          placeholder="Organization name"
          withAsterisk
          autoComplete="organization"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Legal name"
          placeholder="Legal name"
          {...form.getInputProps('legalName')}
        />
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Website"
          placeholder="https://acme.com"
          inputMode="url"
          autoComplete="url"
          {...form.getInputProps('website')}
        />
        <TextInput label="Tax ID" placeholder="Tax ID" {...form.getInputProps('taxId')} />
      </SimpleGrid>

      <AddressFields form={form} path="address" legend="Address" />
    </Stack>
  );
}
