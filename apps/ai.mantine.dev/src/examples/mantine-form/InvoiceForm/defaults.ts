import dayjs from 'dayjs';
import { randomId } from '@mantine/hooks';
import type { InvoiceValues, LineItemValues } from './types';

export const createLineItem = (): LineItemValues => ({
  id: randomId(),
  description: '',
  quantity: 1,
  unit: 'hours',
  unitPrice: '',
  taxRate: '19',
  customTaxRate: '',
});

export function getInitialValues(invoiceNumber: string): InvoiceValues {
  const today = dayjs();

  return {
    clientId: null,
    invoiceNumber,
    issueDate: today.format('YYYY-MM-DD'),
    dueDate: today.add(30, 'day').format('YYYY-MM-DD'),
    currency: 'USD',
    purchaseOrderNumber: '',
    items: [createLineItem()],
    discountEnabled: false,
    discountType: 'percentage',
    discountValue: '',
    shipping: '',
    paymentTerms: 'net30',
    customTermDays: '',
    paymentMethods: ['bank_transfer'],
    notes: '',
    internalMemo: '',
  };
}
