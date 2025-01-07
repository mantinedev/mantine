import { getInitialsColor } from './get-initials-color';

describe('@mantine/core/Avatar/get-initials-color', () => {
  it('should return color based on initials', () => {
    expect(getInitialsColor('John Mol')).toBe('orange');
    expect(getInitialsColor('John')).toBe('pink');
    expect(getInitialsColor('John Doe')).toBe('lime');
    expect(getInitialsColor('John Doe', ['red', 'blue'])).toBe('blue');
  });
});
