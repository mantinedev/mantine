import { getSize } from './get-size';

describe('@mantine/styles/getSize', () => {
  it('returns value from given sizes object if size is a key of sizes', () => {
    expect(getSize({ size: 'sm', sizes: { sm: 10, md: '5rem' } })).toBe(10);
    expect(getSize({ size: 'md', sizes: { sm: 10, md: '5rem' } })).toBe('5rem');
  });

  it('returns md sizes value if size is null or undefined', () => {
    expect(getSize({ size: null, sizes: { sm: 10, md: '5rem' } })).toBe('5rem');
    expect(getSize({ size: undefined, sizes: { sm: 10, md: '5rem' } })).toBe('5rem');
  });

  it('converts size to rem if size is a number', () => {
    expect(getSize({ size: 16, sizes: { sm: 10, md: '5rem' } })).toBe('1rem');
    expect(getSize({ size: 40, sizes: { sm: 10, md: '5rem' } })).toBe('2.5rem');
  });

  it('converts size to em if units are set', () => {
    expect(getSize({ size: 16, sizes: { sm: 10, md: '5rem' }, units: 'em' })).toBe('1em');
    expect(getSize({ size: 40, sizes: { sm: 10, md: '5rem' }, units: 'em' })).toBe('2.5em');
  });

  it('does nothing to size defined in other units', () => {
    expect(getSize({ size: '2rem', sizes: { sm: 10, md: '5rem' } })).toBe('2rem');
    expect(getSize({ size: '10%', sizes: { sm: 10, md: '5rem' } })).toBe('10%');
    expect(getSize({ size: '100vh', sizes: { sm: 10, md: '5rem' } })).toBe('100vh');
  });
});
