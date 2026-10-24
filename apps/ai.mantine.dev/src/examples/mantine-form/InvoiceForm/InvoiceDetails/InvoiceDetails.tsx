import { Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import type { Client, InvoiceFormType } from '../types';
import { CURRENCIES } from '../validation';
import classes from './InvoiceDetails.module.css';

interface InvoiceDetailsProps {
  form: InvoiceFormType;
  clients: Client[];
}

export function InvoiceDetails({ form, clients }: InvoiceDetailsProps) {
  const clientId = form.useWatchValue('clientId');
  const client = clients.find((item) => item.id === clientId);

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }}>
      <Stack gap="xs">
        <Select
          label="Client"
          placeholder="Pick a client"
          data={clients.map((item) => ({ value: item.id, label: item.name }))}
          searchable={clients.length > 15}
          allowDeselect={false}
          withAsterisk
          {...form.getInputProps('clientId')}
        />
        {client && (
          <div className={classes.address} aria-label="Billing address" role="group">
            {client.address.map((line) => (
              <Text key={line} size="sm">
                {line}
              </Text>
            ))}
          </div>
        )}
      </Stack>

      <TextInput
        label="Invoice number"
        placeholder="INV-0001"
        withAsterisk
        {...form.getInputProps('invoiceNumber')}
      />

      <MaskedDateInput
        label="Issue date"
        dayInputLabel="Issue date day"
        monthInputLabel="Issue date month"
        yearInputLabel="Issue date year"
        withAsterisk
        {...form.getInputProps('issueDate')}
      />

      <MaskedDateInput
        label="Due date"
        dayInputLabel="Due date day"
        monthInputLabel="Due date month"
        yearInputLabel="Due date year"
        withAsterisk
        {...form.getInputProps('dueDate')}
      />

      <Select
        label="Currency"
        placeholder="Currency"
        data={CURRENCIES.map(({ value, label }) => ({ value, label }))}
        allowDeselect={false}
        withAsterisk
        {...form.getInputProps('currency')}
      />

      <TextInput
        label="Purchase order number"
        placeholder="PO-12345"
        {...form.getInputProps('purchaseOrderNumber')}
      />
    </SimpleGrid>
  );
}
