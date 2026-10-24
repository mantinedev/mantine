import { computeTotals, getItemTaxRate, toMinor } from './money';
import type { Client, InvoicePayload, InvoiceValues } from './types';
import { PAYMENT_TERMS } from './validation';

const toNumber = (value: number | string) => (value === '' ? 0 : Number(value));

export function getTermDays(values: Pick<InvoiceValues, 'paymentTerms' | 'customTermDays'>) {
  if (values.paymentTerms === 'custom') {
    return values.customTermDays === '' ? null : Number(values.customTermDays);
  }
  return PAYMENT_TERMS.find((term) => term.value === values.paymentTerms)?.days ?? null;
}

function buildDiscount(values: InvoiceValues, amount: number): InvoicePayload['discount'] {
  if (!values.discountEnabled) {
    return { type: 'none', amount: 0 };
  }
  return values.discountType === 'percentage'
    ? { type: 'percentage', percentage: toNumber(values.discountValue), amount }
    : { type: 'fixed', amount };
}

export function buildPayload(values: InvoiceValues, clients: Client[]): InvoicePayload {
  const totals = computeTotals(values);

  return {
    status: 'issued',
    invoiceNumber: values.invoiceNumber.trim(),
    client: clients.find((client) => client.id === values.clientId) ?? null,
    issueDate: values.issueDate,
    dueDate: values.dueDate,
    currency: values.currency,
    purchaseOrderNumber: values.purchaseOrderNumber.trim() || null,
    items: values.items.map((item, index) => ({
      description: item.description.trim(),
      quantity: toNumber(item.quantity),
      unit: item.unit,
      unitPrice: toMinor(item.unitPrice, values.currency),
      taxRate: getItemTaxRate(item),
      amount: totals.lineAmounts[index],
    })),
    discount: buildDiscount(values, totals.discount),
    shipping: totals.shipping,
    totals: {
      subtotal: totals.subtotal,
      discount: totals.discount,
      taxes: totals.taxes,
      shipping: totals.shipping,
      total: totals.total,
    },
    payment: {
      terms: values.paymentTerms,
      termDays: getTermDays(values),
      methods: values.paymentMethods,
    },
    notes: values.notes.trim(),
    internalMemo: values.internalMemo.trim(),
  };
}
