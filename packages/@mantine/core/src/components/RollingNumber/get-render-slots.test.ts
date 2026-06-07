import { getDigitParts } from './get-digit-parts';
import {
  getRenderSlots,
  getRenderSlotsFromValues,
  type CharSlot,
  type DigitSlot,
} from './get-render-slots';

function digitSlots(slots: ReturnType<typeof getRenderSlots>): DigitSlot[] {
  return slots.filter((s): s is DigitSlot => s.type === 'digit');
}

function charSlots(slots: ReturnType<typeof getRenderSlots>): CharSlot[] {
  return slots.filter((s): s is CharSlot => s.type === 'char');
}

describe('getRenderSlots', () => {
  it('renders digit slots for a simple integer', () => {
    const current = getDigitParts({ value: 42 });
    const slots = getRenderSlots({ current, previous: current });
    const digits = digitSlots(slots);
    expect(digits).toHaveLength(2);
    expect(digits[0].digit).toBe('4');
    expect(digits[1].digit).toBe('2');
    expect(digits.every((d) => !d.empty)).toBe(true);
  });

  it('adds prefix chars', () => {
    const current = getDigitParts({ value: 5 });
    const slots = getRenderSlots({ current, previous: current, prefix: '$ ' });
    const chars = charSlots(slots);
    expect(chars[0]).toEqual({ type: 'char', key: 'prefix-0', char: '$', empty: false });
    expect(chars[1]).toEqual({ type: 'char', key: 'prefix-1', char: ' ', empty: false });
  });

  it('adds suffix chars', () => {
    const current = getDigitParts({ value: 5 });
    const slots = getRenderSlots({ current, previous: current, suffix: '%' });
    const chars = charSlots(slots);
    expect(chars[chars.length - 1]).toEqual({
      type: 'char',
      key: 'suffix-0',
      char: '%',
      empty: false,
    });
  });

  it('right-aligns integer digits when digit count changes (99 → 100)', () => {
    const prev = getDigitParts({ value: 99 });
    const current = getDigitParts({ value: 100 });
    const slots = getRenderSlots({ current, previous: prev });
    const digits = digitSlots(slots);

    expect(digits).toHaveLength(3);
    expect(digits[0]).toMatchObject({ key: 'int-2', digit: '1', empty: false });
    expect(digits[1]).toMatchObject({ key: 'int-1', digit: '0', previousDigit: '9', empty: false });
    expect(digits[2]).toMatchObject({ key: 'int-0', digit: '0', previousDigit: '9', empty: false });
  });

  it('marks leading digits as empty when shrinking (100 → 99)', () => {
    const prev = getDigitParts({ value: 100 });
    const current = getDigitParts({ value: 99 });
    const slots = getRenderSlots({ current, previous: prev });
    const digits = digitSlots(slots);

    expect(digits).toHaveLength(3);
    expect(digits[0]).toMatchObject({ key: 'int-2', digit: '0', empty: true });
    expect(digits[1]).toMatchObject({ key: 'int-1', digit: '9', empty: false });
    expect(digits[2]).toMatchObject({ key: 'int-0', digit: '9', empty: false });
  });

  it('inserts thousand separators', () => {
    const current = getDigitParts({ value: 1234 });
    const slots = getRenderSlots({ current, previous: current, thousandSeparator: true });
    const chars = charSlots(slots);
    expect(chars).toHaveLength(1);
    expect(chars[0]).toMatchObject({ key: 'sep-3', char: ',', empty: false });
  });

  it('inserts custom thousand separator', () => {
    const current = getDigitParts({ value: 1234 });
    const slots = getRenderSlots({ current, previous: current, thousandSeparator: ' ' });
    const chars = charSlots(slots);
    expect(chars[0]).toMatchObject({ char: ' ' });
  });

  it('marks thousand separator as empty when leading digit is empty', () => {
    const prev = getDigitParts({ value: 1000 });
    const current = getDigitParts({ value: 999 });
    const slots = getRenderSlots({ current, previous: prev, thousandSeparator: true });
    const chars = charSlots(slots);
    const sepSlot = chars.find((c) => c.key === 'sep-3');
    expect(sepSlot).toMatchObject({ char: ',', empty: true });
  });

  it('shows thousand separator when digit count grows (999 → 1000)', () => {
    const prev = getDigitParts({ value: 999 });
    const current = getDigitParts({ value: 1000 });
    const slots = getRenderSlots({ current, previous: prev, thousandSeparator: true });
    const chars = charSlots(slots);
    const sepSlot = chars.find((c) => c.key === 'sep-3');
    expect(sepSlot).toMatchObject({ char: ',', empty: false });
  });

  it('adds negative sign', () => {
    const current = getDigitParts({ value: -42 });
    const slots = getRenderSlots({ current, previous: current });
    const chars = charSlots(slots);
    expect(chars[0]).toMatchObject({ key: 'sign', char: '-', empty: false });
  });

  it('marks sign as empty when value becomes positive', () => {
    const prev = getDigitParts({ value: -5 });
    const current = getDigitParts({ value: 5 });
    const slots = getRenderSlots({ current, previous: prev });
    const chars = charSlots(slots);
    const signSlot = chars.find((c) => c.key === 'sign');
    expect(signSlot).toMatchObject({ char: '-', empty: true });
  });

  it('adds decimal separator and fractional digits', () => {
    const current = getDigitParts({ value: 3.14, decimalScale: 2, fixedDecimalScale: true });
    const slots = getRenderSlots({ current, previous: current });
    const digits = digitSlots(slots);
    const chars = charSlots(slots);

    expect(digits).toHaveLength(3);
    expect(digits[0]).toMatchObject({ digit: '3' });
    expect(digits[1]).toMatchObject({ key: 'frac-0', digit: '1' });
    expect(digits[2]).toMatchObject({ key: 'frac-1', digit: '4' });
    expect(chars[0]).toMatchObject({ key: 'dec', char: '.', empty: false });
  });

  it('handles no previous value (same as current)', () => {
    const current = getDigitParts({ value: 42 });
    const slots = getRenderSlots({ current, previous: current });
    const digits = digitSlots(slots);
    expect(digits).toHaveLength(2);
    expect(digits[0].previousDigit).toBe('4');
    expect(digits[1].previousDigit).toBe('2');
  });

  it('uses stable keys based on positional significance', () => {
    const current = getDigitParts({ value: 123 });
    const slots = getRenderSlots({ current, previous: current });
    const digits = digitSlots(slots);
    expect(digits[0].key).toBe('int-2');
    expect(digits[1].key).toBe('int-1');
    expect(digits[2].key).toBe('int-0');
  });
});

describe('getRenderSlotsFromValues', () => {
  it('computes slots from raw values', () => {
    const slots = getRenderSlotsFromValues({ value: 42, previousValue: 42 });
    const digits = digitSlots(slots);
    expect(digits).toHaveLength(2);
    expect(digits[0].digit).toBe('4');
    expect(digits[1].digit).toBe('2');
  });

  it('passes formatting options through', () => {
    const slots = getRenderSlotsFromValues({
      value: 1234.5,
      previousValue: 1234.5,
      prefix: '$ ',
      suffix: ' USD',
      thousandSeparator: true,
      decimalScale: 2,
      fixedDecimalScale: true,
    });

    const chars = charSlots(slots);
    const charKeys = chars.map((c) => c.key);
    expect(charKeys).toContain('prefix-0');
    expect(charKeys).toContain('suffix-0');
    expect(charKeys).toContain('sep-3');
    expect(charKeys).toContain('dec');
  });
});
