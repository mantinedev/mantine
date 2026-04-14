import { computeCursorPosition } from './compute-cursor-position';

describe('computeCursorPosition', () => {
  it('places cursor at end when typing at the end', () => {
    const result = computeCursorPosition('+1 (202', 7, '+1202', '+1 (202');
    expect(result).toBe(7);
  });

  it('places cursor at end on full replacement (select-all + type)', () => {
    const result = computeCursorPosition('1', 1, '+3761', '+376 1');
    expect(result).toBe(6);
  });

  it('preserves cursor in the middle during mid-edit', () => {
    const result = computeCursorPosition(
      '+1 (202) 555-1234',
      10,
      '+12025551234',
      '+1 (202) 555-1234'
    );
    expect(result).toBe(10);
  });

  it('places cursor after inserted digit in the middle', () => {
    const result = computeCursorPosition(
      '+1 (2302) 555-1234',
      7,
      '+123025551234',
      '+1 (230) 255-1234'
    );
    expect(result).toBe(7);
  });

  it('handles cursor at the beginning', () => {
    const result = computeCursorPosition(
      '+1 (202) 555-1234',
      0,
      '+12025551234',
      '+1 (202) 555-1234'
    );
    expect(result).toBe(0);
  });

  it('places cursor at end when cursor position exceeds input length', () => {
    const result = computeCursorPosition('+1', 5, '+1', '+1 ');
    expect(result).toBe(3);
  });

  it('places cursor at end for empty formatted output', () => {
    const result = computeCursorPosition('', 0, '', '');
    expect(result).toBe(0);
  });

  it('handles backspace removing a formatting character', () => {
    const result = computeCursorPosition('+1 (20) 555-1234', 6, '+1205551234', '+1 (205) 551-234');
    expect(result).toBe(6);
  });

  it('places cursor at end when cursor is at end of input', () => {
    const result = computeCursorPosition(
      '+1 (202) 555-1234',
      17,
      '+12025551234',
      '+1 (202) 555-1234'
    );
    expect(result).toBe(17);
  });
});
