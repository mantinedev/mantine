import { getInitialsColor } from './get-initials-color';

describe('@mantine/core/Avatar/get-initials-color', () => {
  it('should return color based on initials', () => {
    expect(getInitialsColor('John Mol')).toBe('orange');
    expect(getInitialsColor('John')).toBe('red');
    expect(getInitialsColor('John Doe')).toBe('red');
    expect(getInitialsColor('John Doe', ['red', 'blue'])).toBe('red');
  });
});
