import {
  Accordion,
  ActionIcon,
  Avatar,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  InputWrapper,
  Paper,
  Popover,
  rem,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; padding: number; fz: number }> = {
  xs: { height: 32, padding: 12, fz: 13 },
  sm: { height: 40, padding: 16, fz: 14 },
};

const INPUT_HEIGHTS: Record<string, number> = { xs: 36, sm: 40 };

function sizeKey(size: unknown) {
  return typeof size === 'string' ? size : 'sm';
}

function primaryContrast(variant: unknown, color: unknown) {
  return (variant === undefined || variant === 'filled') && color === undefined
    ? 'var(--mantine-primary-color-contrast)'
    : undefined;
}

export const theme = createTheme({
  primaryColor: 'kestrel',
  primaryShade: { light: 7, dark: 5 },
  white: '#ffffff',
  black: '#121619',
  colors: {
    kestrel: [
      '#fff3eb',
      '#fde1cf',
      '#fac1a0',
      '#f6a06f',
      '#f58c47',
      '#f07a2e',
      '#e8620f',
      '#c2410c',
      '#a8380a',
      '#7f2b08',
    ],
    gray: [
      '#f3f5f6',
      '#eef1f3',
      '#e4e8eb',
      '#dde2e5',
      '#c2c9ce',
      '#959ea4',
      '#69737a',
      '#4a535a',
      '#2b3237',
      '#121619',
    ],
    dark: [
      '#cfd6da',
      '#aeb7bd',
      '#8e989f',
      '#6b757c',
      '#3a444a',
      '#283035',
      '#20262a',
      '#181c1f',
      '#111416',
      '#0a0c0d',
    ],
  },

  fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '800',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(56), lineHeight: '1' },
      h2: { fontSize: rem(34), lineHeight: '1.08' },
      h3: { fontSize: rem(21), lineHeight: '1.2', fontWeight: '700' },
      h4: { fontSize: rem(16), lineHeight: '1.3', fontWeight: '700' },
    },
  },
  fontSizes: {
    xs: rem(13),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(21),
  },
  lineHeights: { xs: '1.4', sm: '1.5', md: '1.5', lg: '1.5', xl: '1.4' },
  fontWeights: { regular: '400', medium: '500', bold: '700' },

  defaultRadius: 'sm',
  radius: { xs: rem(2), sm: rem(4), md: rem(6), lg: rem(8), xl: rem(12) },
  spacing: {
    '2xs': rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(40),
    '2xl': rem(48),
  },
  shadows: {
    md: '0 12px 30px -14px rgba(18, 22, 25, 0.28), 0 2px 6px rgba(18, 22, 25, 0.06)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = BUTTON_SIZES[sizeKey(props.size)];
        return {
          root: {
            '--button-color': primaryContrast(props.variant, props.color),
            ...(size && {
              '--button-height': rem(size.height),
              '--button-padding-x': rem(size.padding),
              '--button-fz': rem(size.fz),
            }),
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 38 },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: (_, props) => {
        const height = INPUT_HEIGHTS[sizeKey(props.size)];
        return {
          wrapper: {
            '--input-height': height ? rem(height) : undefined,
            '--input-fz': 'var(--mantine-font-size-md)',
          },
        };
      },
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { error: classes.inputError },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'sm' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      classNames: { placeholder: classes.avatarPlaceholder },
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'md' } }),

    ThemeIcon: ThemeIcon.extend({
      vars: (_, props) => ({
        root: {
          '--ti-color': primaryContrast(props.variant, props.color),
        },
      }),
    }),

    Popover: Popover.extend({ defaultProps: { shadow: 'md', radius: 'md' } }),

    Accordion: Accordion.extend({
      defaultProps: { chevronSize: 15 },
      classNames: {
        item: classes.accordionItem,
        control: classes.accordionControl,
        label: classes.accordionLabel,
        chevron: classes.accordionChevron,
        content: classes.accordionContent,
      },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (resolvedTheme) => {
  const defaults = defaultCssVariablesResolver(resolvedTheme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-error': 'var(--mantine-color-kestrel-7)',
      '--kestrel-route': 'var(--mantine-color-kestrel-6)',
      '--kestrel-contour': '#a37a58',
      '--kestrel-contour-index': '#7d5a3e',
      '--kestrel-relief': '#f1ece4',
      '--kestrel-water': '#d6e6ee',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f2f5f7',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-error': 'var(--mantine-color-kestrel-5)',
      '--mantine-color-kestrel-filled-hover': 'var(--mantine-color-kestrel-4)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-kestrel-4)',
      '--mantine-primary-color-contrast': '#140b05',
      '--kestrel-route': 'var(--mantine-color-kestrel-5)',
      '--kestrel-contour': '#8d6c52',
      '--kestrel-contour-index': '#b38b69',
      '--kestrel-relief': '#1f1d1a',
      '--kestrel-water': '#1b2a33',
      '--mantine-shadow-md': '0 12px 30px -14px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.35)',
    },
  };
};
