import { useRef } from 'react';
import { Checkbox, Stack, Textarea, TextInput } from '@mantine/core';
import { AddressFields } from './AddressFields';
import type { Address, BillingFormType } from './types';

interface BillingSectionProps {
  form: BillingFormType;
  getOrganizationAddress: () => Address;
}

export function BillingSection({ form, getOrganizationAddress }: BillingSectionProps) {
  const sameAsOrganization = form.useWatchValue('sameAsOrganization');
  // Address the copy replaced, restored on uncheck so the toggle does not leave unsaved changes
  const replacedAddress = useRef<Address | null>(null);
  const sameAsProps = form.getInputProps('sameAsOrganization', { type: 'checkbox' });

  const handleSameAsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      replacedAddress.current = form.getValues().address;
      form.setFieldValue('address', { ...getOrganizationAddress() });
    } else if (replacedAddress.current) {
      form.setFieldValue('address', replacedAddress.current);
      replacedAddress.current = null;
    }
    sameAsProps.onChange(event);
  };

  return (
    <Stack>
      <TextInput
        label="Billing email"
        placeholder="billing@example.com"
        type="email"
        withAsterisk
        {...form.getInputProps('billingEmail')}
      />
      <Stack gap="xs">
        <Checkbox
          label="Same as organization address"
          {...sameAsProps}
          onChange={handleSameAsChange}
        />
        <AddressFields form={form} legend="Billing address" disabled={sameAsOrganization} />
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
