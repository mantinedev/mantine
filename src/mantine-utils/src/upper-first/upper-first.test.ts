import { upperFirst } from './upper-first';

describe('@mantine/utils/upper-first', () => {
  it('capitalizes first letter', () => {
    expect(upperFirst('hello')).toBe('Hello');
    expect(upperFirst('hELLO')).toBe('HELLO');
    expect(upperFirst('Hello')).toBe('Hello');
  });

  it('returns empty string if value cannot be capitalized', () => {
    expect(upperFirst('')).toBe('');
    expect(upperFirst(null)).toBe('');
  });
});
