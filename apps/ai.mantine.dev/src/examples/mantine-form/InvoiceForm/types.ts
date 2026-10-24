import type { UseFormReturnType } from '@mantine/form';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';
export type Unit = 'hours' | 'days' | 'pieces' | 'flat';
export type TaxRateOption = '0' | '7' | '19' | 'custom';
export type DiscountType = 'percentage' | 'fixed';
export type PaymentTerms = 'receipt' | 'net15' | 'net30' | 'net60' | 'custom';
export type PaymentMethod = 'bank_transfer' | 'card' | 'paypal';

export interface Client {
  id: string;
  name: string;
  address: string[];
}

export interface LineItemValues {
  id: string;
  description: string;
  quantity: number | string;
  unit: Unit;
  unitPrice: number | string;
  taxRate: TaxRateOption;
  customTaxRate: number | string;
}

export interface InvoiceValues {
  clientId: string | null;
  invoiceNumber: string;
  issueDate: string | null;
  dueDate: string | null;
  currency: Currency;
  purchaseOrderNumber: string;
  items: LineItemValues[];
  discountEnabled: boolean;
  discountType: DiscountType;
  discountValue: number | string;
  shipping: number | string;
  paymentTerms: PaymentTerms;
  customTermDays: number | string;
  paymentMethods: PaymentMethod[];
  notes: string;
  internalMemo: string;
}

export interface TaxLine {
  rate: number;
  amount: number;
}

/** All amounts in minor units (cents, or whole yen) */
export interface InvoiceTotals {
  lineAmounts: number[];
  subtotal: number;
  discount: number;
  taxes: TaxLine[];
  shipping: number;
  total: number;
}

export interface InvoicePayload {
  status: 'issued' | 'draft';
  invoiceNumber: string;
  client: Client | null;
  issueDate: string | null;
  dueDate: string | null;
  currency: Currency;
  purchaseOrderNumber: string | null;
  items: {
    description: string;
    quantity: number;
    unit: Unit;
    unitPrice: number;
    taxRate: number;
    amount: number;
  }[];
  discount:
    | { type: 'none'; amount: 0 }
    | { type: 'percentage'; percentage: number; amount: number }
    | { type: 'fixed'; amount: number };
  shipping: number;
  totals: {
    subtotal: number;
    discount: number;
    taxes: TaxLine[];
    shipping: number;
    total: number;
  };
  payment: {
    terms: PaymentTerms;
    termDays: number | null;
    methods: PaymentMethod[];
  };
  notes: string;
  internalMemo: string;
}

export type InvoiceFormType = UseFormReturnType<InvoiceValues, InvoicePayload>;
