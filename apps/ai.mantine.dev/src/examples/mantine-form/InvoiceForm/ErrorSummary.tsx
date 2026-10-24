import { Alert, Anchor, List } from '@mantine/core';
import type { InvoiceFormType } from './types';

const FIELD_LABELS: Record<string, string> = {
  clientId: 'Client',
  invoiceNumber: 'Invoice number',
  issueDate: 'Issue date',
  dueDate: 'Due date',
  items: 'Line items',
  discountValue: 'Discount',
  shipping: 'Shipping',
  customTermDays: 'Days until due',
  paymentMethods: 'Accepted payment methods',
  notes: 'Notes to the client',
};

const ITEM_FIELD_LABELS: Record<string, string> = {
  description: 'description',
  quantity: 'quantity',
  unitPrice: 'unit price',
  customTaxRate: 'custom tax rate',
};

function getLabel(path: string) {
  const item = /^items\.(\d+)\.(\w+)$/.exec(path);
  if (item) {
    return `Item ${Number(item[1]) + 1} ${ITEM_FIELD_LABELS[item[2]] ?? item[2]}`;
  }
  return FIELD_LABELS[path] ?? path;
}

interface ErrorSummaryProps {
  form: InvoiceFormType;
  onSelect: (path: string) => void;
}

export function ErrorSummary({ form, onSelect }: ErrorSummaryProps) {
  const entries = Object.entries(form.errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert color="red" title="There is a problem">
      <List size="sm">
        {entries.map(([path, error]) => (
          <List.Item key={path}>
            <Anchor component="button" type="button" size="sm" onClick={() => onSelect(path)}>
              {getLabel(path)}
            </Anchor>
            : {error}
          </List.Item>
        ))}
      </List>
    </Alert>
  );
}
