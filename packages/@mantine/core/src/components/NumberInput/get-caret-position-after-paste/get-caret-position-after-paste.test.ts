import { getCaretPositionAfterPaste } from './get-caret-position-after-paste';

describe('@mantine/core/NumberInput/get-caret-position-after-paste', () => {
  it('returns the raw caret when formatting did not change the value', () => {
    expect(getCaretPositionAfterPaste('1234.5', 6, '1234.5', '.')).toBe(6);
    expect(getCaretPositionAfterPaste('12.5', 2, '12.5', '.')).toBe(2);
  });

  it('accounts for inserted grouping characters', () => {
    expect(getCaretPositionAfterPaste('1234.5', 6, '1 234.5', '.')).toBe(7);
    expect(getCaretPositionAfterPaste('1234567', 7, '1,234,567', '.')).toBe(9);
    expect(getCaretPositionAfterPaste('1234567', 4, '1,234,567', '.')).toBe(5);
  });

  it('accounts for prefix and suffix', () => {
    expect(getCaretPositionAfterPaste('1234', 4, '$1,234 USD', '.')).toBe(6);
  });

  it('keeps the caret after a trailing decimal separator', () => {
    expect(getCaretPositionAfterPaste('12.', 3, '12.', '.')).toBe(3);
  });

  it('falls back to the raw caret when nothing significant precedes it', () => {
    expect(getCaretPositionAfterPaste('-', 1, '-', '.')).toBe(1);
    expect(getCaretPositionAfterPaste('', 5, '', '.')).toBe(0);
  });
});
