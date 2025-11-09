import { getFontSize, getLineHeight, getRadius, getShadow, getSize, getSpacing, isResponsiveSize } from './get-size';

describe('@mantine/core/get-size', () => {
  it('returns correct size for numbers and number like values', () => {
    expect(getSize(10)).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSize('10')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSize('10px')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSize('10rem')).toBe('10rem');
    expect(getSize('10%')).toBe('10%');
    expect(getSize('10vh')).toBe('10vh');
    expect(getSize('10cqw')).toBe('10cqw');
    expect(getSize('10cqmax')).toBe('10cqmax');
  });

  it('returns correct size with custom prefix', () => {
    expect(getSize('xs', 'test')).toBe('var(--test-xs)');
    expect(getSize('md', 'test')).toBe('var(--test-md)');
    expect(getSize(10, 'test')).toBe('calc(0.625rem * var(--mantine-scale))');
  });

  it('returns correct size for default prefix', () => {
    expect(getSize('xs')).toBe('var(--size-xs)');
    expect(getSize('md')).toBe('var(--size-md)');
  });

  it('handles responsive size objects by extracting base value', () => {
    expect(getSize({ base: 'sm', md: 'lg' })).toBe('var(--size-sm)');
    expect(getSize({ base: 10, md: 20 })).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSize({ sm: 'md', lg: 'xl' })).toBe('var(--size-undefined)');
  });
});
});

describe('@mantine/core/get-spacing', () => {
  it('returns correct values', () => {
    expect(getSpacing(10)).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSpacing(0)).toBe('0rem');
    expect(getSpacing('10')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSpacing('10px')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getSpacing('10rem')).toBe('10rem');
    expect(getSpacing('10%')).toBe('10%');
    expect(getSpacing('xs')).toBe('var(--mantine-spacing-xs)');
    expect(getSpacing('md')).toBe('var(--mantine-spacing-md)');
  });
});

describe('@mantine/core/get-radius', () => {
  it('returns correct values', () => {
    expect(getRadius(10)).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getRadius(0)).toBe('0rem');
    expect(getRadius('10')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getRadius('10px')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getRadius('10rem')).toBe('10rem');
    expect(getRadius('10%')).toBe('10%');
    expect(getRadius('xs')).toBe('var(--mantine-radius-xs)');
    expect(getRadius('md')).toBe('var(--mantine-radius-md)');
    expect(getRadius(undefined)).toBe('var(--mantine-radius-default)');
    expect(getRadius('16px 8px')).toBe(
      'calc(1rem * var(--mantine-scale)) calc(0.5rem * var(--mantine-scale))'
    );
  });
});

describe('@mantine/core/get-font-size', () => {
  it('returns correct values', () => {
    expect(getFontSize(10)).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getFontSize(0)).toBe('0rem');
    expect(getFontSize('10')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getFontSize('10px')).toBe('calc(0.625rem * var(--mantine-scale))');
    expect(getFontSize('10rem')).toBe('10rem');
    expect(getFontSize('10%')).toBe('10%');
    expect(getFontSize('xs')).toBe('var(--mantine-font-size-xs)');
    expect(getFontSize('md')).toBe('var(--mantine-font-size-md)');
  });
});

describe('@mantine/core/get-line-height', () => {
  it('returns correct values', () => {
    expect(getLineHeight(10)).toBe(10);
    expect(getLineHeight(1.55)).toBe(1.55);
    expect(getLineHeight('10rem')).toBe('10rem');
    expect(getLineHeight('10%')).toBe('10%');
    expect(getLineHeight('xs')).toBe('var(--mantine-line-height-xs)');
    expect(getLineHeight('md')).toBe('var(--mantine-line-height-md)');
  });
});

describe('@mantine/core/get-shadow', () => {
  it('returns correct values', () => {
    expect(getShadow(undefined)).toBe(undefined);
    expect(getShadow('5px 5px 10px red')).toBe('5px 5px 10px red');
    expect(getShadow('xs')).toBe('var(--mantine-shadow-xs)');
    expect(getShadow('md')).toBe('var(--mantine-shadow-md)');
  });
});

describe('@mantine/core/isResponsiveSize', () => {
  it('correctly identifies responsive size objects', () => {
    expect(isResponsiveSize({ base: 'sm', md: 'lg' })).toBe(true);
    expect(isResponsiveSize({ sm: 'md', lg: 'xl' })).toBe(true);
    expect(isResponsiveSize({ base: 'sm' })).toBe(false);
    expect(isResponsiveSize('sm')).toBe(false);
    expect(isResponsiveSize(null)).toBe(false);
    expect(isResponsiveSize(undefined)).toBe(false);
    expect(isResponsiveSize({})).toBe(false);
  });
});
