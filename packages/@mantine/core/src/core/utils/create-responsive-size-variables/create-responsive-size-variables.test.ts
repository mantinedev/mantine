import { createResponsiveSizeVariables } from './create-responsive-size-variables';
import { getSize } from '../get-size/get-size';

const mockTheme = {
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
};

describe('@mantine/core/createResponsiveSizeVariables', () => {
  it('handles non-responsive values', () => {
    const result = createResponsiveSizeVariables({
      size: 'md',
      property: '--test-size',
      getter: getSize,
      theme: mockTheme,
    });

    expect(result.base).toEqual({ '--test-size': 'var(--size-md)' });
    expect(result.media).toEqual([]);
  });

  it('handles responsive objects with base value', () => {
    const result = createResponsiveSizeVariables({
      size: { base: 'sm', md: 'lg' },
      property: '--test-size',
      getter: getSize,
      theme: mockTheme,
    });

    expect(result.base).toEqual({ '--test-size': 'var(--size-sm)' });
    expect(result.media).toHaveLength(1);
    expect(result.media[0]).toEqual({
      query: '(min-width: 62em)',
      styles: { '--test-size': 'var(--size-lg)' },
    });
  });

  it('handles responsive objects without base value', () => {
    const result = createResponsiveSizeVariables({
      size: { sm: 'md', lg: 'xl' },
      property: '--test-size',
      getter: getSize,
      theme: mockTheme,
    });

    expect(result.base).toEqual({ '--test-size': 'var(--size-undefined)' });
    expect(result.media).toHaveLength(2);
    expect(result.media[0]).toEqual({
      query: '(min-width: 48em)',
      styles: { '--test-size': 'var(--size-md)' },
    });
    expect(result.media[1]).toEqual({
      query: '(min-width: 75em)',
      styles: { '--test-size': 'var(--size-xl)' },
    });
  });

  it('handles multiple breakpoints', () => {
    const result = createResponsiveSizeVariables({
      size: { base: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
      property: '--test-size',
      getter: getSize,
      theme: mockTheme,
    });

    expect(result.base).toEqual({ '--test-size': 'var(--size-xs)' });
    expect(result.media).toHaveLength(4);
    
    // Check that breakpoints are sorted correctly
    expect(result.media[0].query).toBe('(min-width: 48em)'); // sm
    expect(result.media[1].query).toBe('(min-width: 62em)'); // md
    expect(result.media[2].query).toBe('(min-width: 75em)'); // lg
    expect(result.media[3].query).toBe('(min-width: 88em)'); // xl
  });

  it('handles null and undefined values', () => {
    const nullResult = createResponsiveSizeVariables({
      size: null,
      property: '--test-size',
      getter: getSize,
      theme: mockTheme,
    });

    expect(nullResult.base).toEqual({ '--test-size': undefined });
    expect(nullResult.media).toEqual([]);

    const undefinedResult = createResponsiveSizeVariables({
      size: undefined,
      property: '--test-size',
      getter: getSize,
      theme: mockTheme,
    });

    expect(undefinedResult.base).toEqual({ '--test-size': undefined });
    expect(undefinedResult.media).toEqual([]);
  });

  it('uses custom getter function', () => {
    const customGetter = (size: unknown) => `custom-${size}`;
    
    const result = createResponsiveSizeVariables({
      size: { base: 'sm', md: 'lg' },
      property: '--custom-size',
      getter: customGetter,
      theme: mockTheme,
    });

    expect(result.base).toEqual({ '--custom-size': 'custom-sm' });
    expect(result.media[0].styles).toEqual({ '--custom-size': 'custom-lg' });
  });
});