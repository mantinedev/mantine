import { lowerFirst } from './lower-first';

describe('@mantine/hooks/lower-first', () => {
  it('converts first letter to lower case', () => {
    expect(lowerFirst('Hello')).toBe('hello');
    expect(lowerFirst('HELLO')).toBe('hELLO');
    expect(lowerFirst('hELLO')).toBe('hELLO');
  });

  it('returns empty string if value cannot be capitalized', () => {
    expect(lowerFirst('')).toBe('');
    expect(lowerFirst(null as any)).toBe('');
  });
});
