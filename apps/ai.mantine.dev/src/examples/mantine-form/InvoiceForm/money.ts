import type { Currency, InvoiceTotals, InvoiceValues, LineItemValues, TaxLine } from './types';
import { getCurrency } from './validation';

type TotalsInput = Pick<
  InvoiceValues,
  'items' | 'currency' | 'discountEnabled' | 'discountType' | 'discountValue' | 'shipping'
>;

const toNumber = (value: number | string) => {
  const number = Number(value);
  return value === '' || Number.isNaN(number) ? 0 : number;
};

export const toMinor = (amount: number | string, currency: Currency) =>
  Math.round(toNumber(amount) * 10 ** getCurrency(currency).decimals);

export function formatMoney(minor: number, currency: Currency) {
  const { decimals } = getCurrency(currency);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(minor / 10 ** decimals);
}

export function getMoneyInputProps(currency: Currency) {
  const { symbol, decimals } = getCurrency(currency);
  return {
    prefix: symbol,
    decimalScale: decimals,
    allowDecimal: decimals > 0,
    thousandSeparator: ',',
    allowNegative: false,
    hideControls: true,
  };
}

export const getItemTaxRate = (item: LineItemValues) =>
  item.taxRate === 'custom' ? toNumber(item.customTaxRate) : Number(item.taxRate);

export const getLineAmount = (item: LineItemValues, currency: Currency) =>
  Math.round(
    toNumber(item.quantity) * toNumber(item.unitPrice) * 10 ** getCurrency(currency).decimals
  );

export function computeTotals(values: TotalsInput): InvoiceTotals {
  const { items, currency } = values;
  const lineAmounts = items.map((item) => getLineAmount(item, currency));
  const subtotal = lineAmounts.reduce((sum, amount) => sum + amount, 0);

  let discount = 0;
  if (values.discountEnabled) {
    discount =
      values.discountType === 'percentage'
        ? Math.round((subtotal * toNumber(values.discountValue)) / 100)
        : toMinor(values.discountValue, currency);
  }

  // The discount reduces every rate's base in proportion; a discount above the subtotal leaves nothing to tax
  const discountedShare = subtotal > 0 ? Math.max(0, subtotal - discount) / subtotal : 0;
  const shipping = toMinor(values.shipping, currency);

  const bases = new Map<number, number>();
  items.forEach((item, index) => {
    const rate = getItemTaxRate(item);
    bases.set(rate, (bases.get(rate) ?? 0) + lineAmounts[index] * discountedShare);
  });
  if (items.length > 0 && shipping > 0) {
    const shippingRate = getItemTaxRate(items[0]);
    bases.set(shippingRate, (bases.get(shippingRate) ?? 0) + shipping);
  }

  const taxes: TaxLine[] = [...bases.entries()]
    .sort(([a], [b]) => b - a)
    .map(([rate, base]) => ({ rate, amount: Math.round((base * rate) / 100) }));

  const taxTotal = taxes.reduce((sum, tax) => sum + tax.amount, 0);

  return {
    lineAmounts,
    subtotal,
    discount,
    taxes,
    shipping,
    total: subtotal - discount + taxTotal + shipping,
  };
}
