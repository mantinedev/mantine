import dayjs from 'dayjs';
import { formRootRule, isNotEmpty, when, type FormRulesRecord } from '@mantine/form';
import type {
  Currency,
  InvoiceValues,
  LineItemValues,
  PaymentMethod,
  PaymentTerms,
  TaxRateOption,
  Unit,
} from './types';

export const MIN_ITEMS = 1;
export const MAX_ITEMS = 50;
export const NOTES_MAX_LENGTH = 500;

export const CURRENCIES: { value: Currency; label: string; symbol: string; decimals: number }[] = [
  { value: 'USD', label: 'USD – US dollar', symbol: '$', decimals: 2 },
  { value: 'EUR', label: 'EUR – Euro', symbol: '€', decimals: 2 },
  { value: 'GBP', label: 'GBP – British pound', symbol: '£', decimals: 2 },
  { value: 'JPY', label: 'JPY – Japanese yen', symbol: '¥', decimals: 0 },
];

export const UNITS: { value: Unit; label: string }[] = [
  { value: 'hours', label: 'hours' },
  { value: 'days', label: 'days' },
  { value: 'pieces', label: 'pieces' },
  { value: 'flat', label: 'flat' },
];

export const TAX_RATES: { value: TaxRateOption; label: string }[] = [
  { value: '0', label: '0%' },
  { value: '7', label: '7%' },
  { value: '19', label: '19%' },
  { value: 'custom', label: 'Custom' },
];

export const PAYMENT_TERMS: { value: PaymentTerms; label: string; days: number | null }[] = [
  { value: 'receipt', label: 'Due on receipt', days: 0 },
  { value: 'net15', label: 'Net 15', days: 15 },
  { value: 'net30', label: 'Net 30', days: 30 },
  { value: 'net60', label: 'Net 60', days: 60 },
  { value: 'custom', label: 'Custom', days: null },
];

export const PAYMENT_METHODS: { value: PaymentMethod; label: string }[] = [
  { value: 'bank_transfer', label: 'Bank transfer' },
  { value: 'card', label: 'Card' },
  { value: 'paypal', label: 'PayPal' },
];

export const getCurrency = (currency: Currency) =>
  CURRENCIES.find((item) => item.value === currency) ?? CURRENCIES[0];

const isBlank = (value: number | string) => value === '' || value === null || value === undefined;

const decimalsOf = (value: number) => (String(value).split('.')[1] ?? '').length;

const quantityRule = (value: number | string) => {
  if (isBlank(value)) {
    return 'Enter a quantity';
  }
  if (Number(value) <= 0) {
    return 'Quantity must be greater than 0';
  }
  return decimalsOf(Number(value)) > 3 ? 'Use up to 3 decimals' : null;
};

const unitPriceRule = (value: number | string) => {
  if (isBlank(value)) {
    return 'Enter a unit price';
  }
  return Number(value) < 0 ? 'Unit price cannot be negative' : null;
};

const customTaxRateRule = (value: number | string) => {
  if (isBlank(value)) {
    return 'Enter a tax rate';
  }
  const rate = Number(value);
  if (rate < 0 || rate > 100) {
    return 'Tax rate must be between 0 and 100';
  }
  return decimalsOf(rate) > 1 ? 'Use one decimal at most' : null;
};

const discountRule = (value: number | string, values: InvoiceValues) => {
  if (isBlank(value)) {
    return 'Enter a discount';
  }
  const discount = Number(value);
  if (values.discountType === 'percentage' && (discount < 0 || discount > 100)) {
    return 'Percentage must be between 0 and 100';
  }
  return discount < 0 ? 'Discount cannot be negative' : null;
};

const customTermDaysRule = (value: number | string) => {
  const days = Number(value);
  return isBlank(value) || !Number.isInteger(days) || days < 1 || days > 180
    ? 'Enter between 1 and 180 days'
    : null;
};

const dueDateRule = (value: string | null, values: InvoiceValues) => {
  if (!value) {
    return 'Enter a due date';
  }
  return values.issueDate && dayjs(value).isBefore(values.issueDate, 'day')
    ? 'Due date cannot be before the issue date'
    : null;
};

const isCustomRate = (item: LineItemValues) => item.taxRate === 'custom';

const itemRule =
  (
    rule: (value: number | string) => string | null,
    condition?: (item: LineItemValues) => boolean
  ) =>
  (value: number | string, values: InvoiceValues, path: string) => {
    const item = values.items[Number(path.split('.')[1])];
    return !condition || (item && condition(item)) ? rule(value) : null;
  };

// Keys follow the order of the fields on the page: the first error is the first invalid field
export const invoiceRules: FormRulesRecord<InvoiceValues> = {
  clientId: isNotEmpty('Select a client'),
  invoiceNumber: (value) => (value.trim() ? null : 'Enter an invoice number'),
  issueDate: isNotEmpty('Enter an issue date'),
  dueDate: dueDateRule,
  items: {
    [formRootRule]: (items) =>
      items.length < MIN_ITEMS || items.length > MAX_ITEMS
        ? `Add between ${MIN_ITEMS} and ${MAX_ITEMS} items`
        : null,
    description: (value) => (value.trim() ? null : 'Enter a description'),
    quantity: itemRule(quantityRule),
    unitPrice: itemRule(unitPriceRule),
    customTaxRate: itemRule(customTaxRateRule, isCustomRate),
  },
  discountValue: when((values) => values.discountEnabled, discountRule),
  customTermDays: when((values) => values.paymentTerms === 'custom', customTermDaysRule),
  paymentMethods: (value) => (value.length > 0 ? null : 'Select at least one payment method'),
  notes: (value) =>
    value.length > NOTES_MAX_LENGTH ? `Notes must be ${NOTES_MAX_LENGTH} characters or less` : null,
};

export const DRAFT_FIELDS = ['clientId', 'invoiceNumber'] as const;
