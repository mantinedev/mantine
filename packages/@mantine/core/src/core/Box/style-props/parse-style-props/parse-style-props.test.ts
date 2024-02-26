import { DEFAULT_THEME } from '../../../MantineProvider';
import { STYlE_PROPS_DATA } from '../style-props-data';
import { parseStyleProps } from './parse-style-props';

describe('@mantine/core/Box/parse-style-props', () => {
  it('parses non responsive style props correctly', () => {
    expect(
      parseStyleProps({
        data: STYlE_PROPS_DATA,
        styleProps: { p: '1.5rem', mx: 32, c: 'red.5', opacity: 0.65 },
        theme: DEFAULT_THEME,
      })
    ).toStrictEqual({
      hasResponsiveStyles: false,
      inlineStyles: {
        padding: 'calc(1.5rem * var(--mantine-scale))',
        marginInline: 'calc(2rem * var(--mantine-scale))',
        color: 'var(--mantine-color-red-5)',
        opacity: 0.65,
      },
      styles: {},
      media: [],
    });
  });

  it('parses responsive style props correctly', () => {
    expect(
      parseStyleProps({
        data: STYlE_PROPS_DATA,
        styleProps: {
          p: { base: '1.5rem', xs: '2rem' },
          mx: { base: 32, xs: 64 },
          c: { base: 'red.5', xs: 'red.6' },
          opacity: { base: 0.65, xs: 0.85 },
        },
        theme: DEFAULT_THEME,
      })
    ).toStrictEqual({
      hasResponsiveStyles: true,
      inlineStyles: {},
      styles: {
        padding: 'calc(1.5rem * var(--mantine-scale))',
        marginInline: 'calc(2rem * var(--mantine-scale))',
        color: 'var(--mantine-color-red-5)',
        opacity: 0.65,
      },
      media: [
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.xs})`,
          styles: {
            padding: 'calc(2rem * var(--mantine-scale))',
            marginInline: 'calc(4rem * var(--mantine-scale))',
            color: 'var(--mantine-color-red-6)',
            opacity: 0.85,
          },
        },
      ],
    });
  });

  it('parses combination of responsive and non responsive style props correctly', () => {
    expect(
      parseStyleProps({
        data: STYlE_PROPS_DATA,
        styleProps: {
          p: { base: '1.5rem', xs: '2rem' },
          mx: 64,
          c: 'red.6',
          opacity: { base: 0.65, xs: 0.85 },
        },
        theme: DEFAULT_THEME,
      })
    ).toStrictEqual({
      hasResponsiveStyles: true,
      inlineStyles: {
        marginInline: 'calc(4rem * var(--mantine-scale))',
        color: 'var(--mantine-color-red-6)',
      },
      styles: {
        padding: 'calc(1.5rem * var(--mantine-scale))',
        opacity: 0.65,
      },
      media: [
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.xs})`,
          styles: {
            padding: 'calc(2rem * var(--mantine-scale))',
            opacity: 0.85,
          },
        },
      ],
    });
  });

  it('correctly parses values with multiple breakpoints', () => {
    expect(
      parseStyleProps({
        data: STYlE_PROPS_DATA,
        styleProps: {
          p: { base: '1.5rem', xs: '2rem', md: '3rem' },
          mx: { base: 32, xs: 64, md: 128 },
          c: { base: 'red.5', xs: 'red.6', md: 'red.7' },
          opacity: { base: 0.65, xs: 0.85, md: 1 },
        },
        theme: DEFAULT_THEME,
      })
    ).toStrictEqual({
      hasResponsiveStyles: true,
      inlineStyles: {},
      styles: {
        padding: 'calc(1.5rem * var(--mantine-scale))',
        marginInline: 'calc(2rem * var(--mantine-scale))',
        color: 'var(--mantine-color-red-5)',
        opacity: 0.65,
      },
      media: [
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.xs})`,
          styles: {
            padding: 'calc(2rem * var(--mantine-scale))',
            marginInline: 'calc(4rem * var(--mantine-scale))',
            color: 'var(--mantine-color-red-6)',
            opacity: 0.85,
          },
        },
        {
          query: `(min-width: ${DEFAULT_THEME.breakpoints.md})`,
          styles: {
            padding: 'calc(3rem * var(--mantine-scale))',
            marginInline: 'calc(8rem * var(--mantine-scale))',
            color: 'var(--mantine-color-red-7)',
            opacity: 1,
          },
        },
      ],
    });
  });
});
