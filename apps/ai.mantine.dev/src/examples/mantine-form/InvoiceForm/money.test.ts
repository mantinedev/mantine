import { computeTotals, formatMoney } from './money';
import type { LineItemValues } from './types';

const item = (overrides: Partial<LineItemValues>): LineItemValues => ({
  id: 'item',
  description: 'Work',
  quantity: 1,
  unit: 'hours',
  unitPrice: 0,
  taxRate: '19',
  customTaxRate: '',
  ...overrides,
});

const base = {
  currency: 'USD' as const,
  discountEnabled: false,
  discountType: 'percentage' as const,
  discountValue: '' as number | string,
  shipping: '' as number | string,
};

describe('computeTotals', () => {
  it('sums line amounts in minor units', () => {
    const totals = computeTotals({
      ...base,
      items: [item({ quantity: 1.5, unitPrice: 80 }), item({ quantity: 3, unitPrice: 0.1 })],
    });

    expect(totals.lineAmounts).toEqual([12000, 30]);
    expect(totals.subtotal).toBe(12030);
  });

  it('returns one tax line per distinct rate, highest rate first', () => {
    const totals = computeTotals({
      ...base,
      items: [
        item({ unitPrice: 100, taxRate: '7' }),
        item({ unitPrice: 200, taxRate: '19' }),
        item({ unitPrice: 50, taxRate: 'custom', customTaxRate: 19 }),
      ],
    });

    expect(totals.taxes).toEqual([
      { rate: 19, amount: 4750 },
      { rate: 7, amount: 700 },
    ]);
  });

  it('applies a percentage discount before tax', () => {
    const totals = computeTotals({
      ...base,
      discountEnabled: true,
      discountValue: 10,
      items: [item({ unitPrice: 1000 })],
    });

    expect(totals).toMatchObject({
      discount: 10000,
      taxes: [{ rate: 19, amount: 17100 }],
      total: 107100,
    });
  });

  it('taxes shipping at the first item rate', () => {
    const totals = computeTotals({
      ...base,
      shipping: 10,
      items: [item({ unitPrice: 100, taxRate: '7' }), item({ unitPrice: 100, taxRate: '19' })],
    });

    expect(totals.taxes).toEqual([
      { rate: 19, amount: 1900 },
      { rate: 7, amount: 770 },
    ]);
    expect(totals.total).toBe(20000 + 1000 + 1900 + 770);
  });

  it('does not tax a negative base when a fixed discount exceeds the subtotal', () => {
    const totals = computeTotals({
      ...base,
      discountEnabled: true,
      discountType: 'fixed',
      discountValue: 150,
      items: [item({ unitPrice: 100 })],
    });

    expect(totals).toMatchObject({ taxes: [{ rate: 19, amount: 0 }], total: -5000 });
  });

  it('uses whole yen for JPY', () => {
    const totals = computeTotals({
      ...base,
      currency: 'JPY',
      items: [item({ quantity: 3, unitPrice: 1500 })],
    });

    expect(totals.subtotal).toBe(4500);
    expect(formatMoney(totals.total, 'JPY')).toBe('¥5,355');
  });
});
