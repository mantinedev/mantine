import { useCallback, useRef } from 'react';
import { Checkbox, Stack, Textarea, TextInput } from '@mantine/core';
import { AddressFields } from '../AddressFields/AddressFields';
import type { Address, BillingFormType, OrganizationFormType } from '../types';

interface BillingSectionProps {
  form: BillingFormType;
  organizationForm: OrganizationFormType;
}

export function BillingSection({ form, organizationForm }: BillingSectionProps) {
  const sameAsOrganization = form.useWatchValue('sameAsOrganization');
  // Billing address the copy replaced, restored when the checkbox is turned off
  const replacedAddress = useRef<Address | null>(null);

  const handleSameAsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.currentTarget.checked;
    if (checked) {
      replacedAddress.current = form.getValues().address;
      form.setFieldValue('address', { ...organizationForm.getValues().address });
    } else if (replacedAddress.current) {
      form.setFieldValue('address', replacedAddress.current);
      replacedAddress.current = null;
    }
    form.setFieldValue('sameAsOrganization', checked);
  };

  const syncWithOrganization = useCallback(
    ({ value }: { value: Address }) => {
      if (form.getValues().sameAsOrganization) {
        form.setFieldValue('address', { ...value });
      }
    },
    [form]
  );
  organizationForm.watch('address', syncWithOrganization);

  return (
    <Stack gap="md">
      <TextInput
        label="Billing email"
        placeholder="billing@example.com"
        withAsterisk
        inputMode="email"
        autoComplete="email"
        {...form.getInputProps('email')}
      />

      <Stack gap="xs">
        <Checkbox
          label="Same as organization address"
          {...form.getInputProps('sameAsOrganization', { type: 'checkbox' })}
          onChange={handleSameAsChange}
        />
        <AddressFields
          form={form}
          path="address"
          legend="Billing address"
          disabled={sameAsOrganization}
        />
      </Stack>

      <Textarea
        label="Invoice notes"
        placeholder="Purchase order number or anything to print on invoices"
        autosize
        minRows={3}
        maxRows={6}
        {...form.getInputProps('invoiceNotes')}
      />
    </Stack>
  );
}
