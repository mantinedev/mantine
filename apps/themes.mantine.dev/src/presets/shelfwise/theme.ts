import {
  Accordion,
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Button,
  Checkbox,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  InputWrapper,
  Paper,
  rem,
  SegmentedControl,
  Title,
  virtualColor,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; fz: number; px: number }> = {
  sm: { height: 38, fz: 14, px: 14 },
  md: { height: 44, fz: 15, px: 20 },
  lg: { height: 52, fz: 16, px: 26 },
};

function buttonSize(size: unknown) {
  return typeof size === 'string' ? BUTTON_SIZES[size] : undefined;
}

export const theme = createTheme({
  primaryColor: 'brand',
  primaryShade: { light: 7, dark: 5 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  white: '#ffffff',
  black: '#121a2e',
  colors: {
    brand: virtualColor({ name: 'brand', light: 'navy', dark: 'marigold' }),
    navy: [
      '#eef1f7',
      '#d9dfec',
      '#b3bfd8',
      '#8a9cc2',
      '#6479a8',
      '#3a4f7d',
      '#26385f',
      '#1b2a4a',
      '#141f38',
      '#0d1426',
    ],
    marigold: [
      '#fef8e8',
      '#fdf0cf',
      '#fae0a0',
      '#f7d071',
      '#f7c453',
      '#f4b52a',
      '#e0a21c',
      '#b98317',
      '#8a6211',
      '#5c410b',
    ],
    gray: [
      '#f5f6f9',
      '#eef0f4',
      '#e7e9ef',
      '#e1e4ec',
      '#c7ccd8',
      '#a3aabb',
      '#6b7387',
      '#4a5265',
      '#2a3142',
      '#121a2e',
    ],
    dark: [
      '#cfd5e3',
      '#a9b1c4',
      '#7f89a1',
      '#56607a',
      '#36415c',
      '#273047',
      '#1b2336',
      '#161d2e',
      '#0f1422',
      '#090c14',
    ],
  },

  fontFamily: "'Albert Sans', 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "'Young Serif', Georgia, 'Times New Roman', serif",
    fontWeight: '400',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(54), lineHeight: '1.04' },
      h2: { fontSize: rem(40), lineHeight: '1.1' },
      h3: { fontSize: rem(24), lineHeight: '1.2' },
      h4: { fontSize: rem(18), lineHeight: '1.2' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(14), md: rem(16), lg: rem(17), xl: rem(19) },
  lineHeights: { xs: '1.4', sm: '1.5', md: '1.55', lg: '1.55', xl: '1.55' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(4), sm: rem(8), md: rem(14), lg: rem(20), xl: rem(24) },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(20),
    lg: rem(28),
    xl: rem(40),
    '2xl': rem(48),
    '3xl': rem(64),
    '4xl': rem(88),
  },
  shadows: {
    md: '0 18px 40px -18px rgba(18, 26, 46, 0.45), 0 3px 8px rgba(18, 26, 46, 0.08)',
  },

  components: {
    Button: Button.extend({
      defaultProps: { size: 'md' },
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = buttonSize(props.size);
        return {
          root: size
            ? {
                '--button-height': rem(size.height),
                '--button-fz': rem(size.fz),
                '--button-padding-x': rem(size.px),
              }
            : {},
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 40 },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: () => ({
        wrapper: { '--input-height': rem(44), '--input-fz': 'var(--mantine-font-size-md)' },
      }),
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.label, error: classes.error },
    }),

    Checkbox: Checkbox.extend({
      classNames: { input: classes.checkboxInput, label: classes.checkboxLabel },
      vars: () => ({ root: { '--checkbox-size': rem(20), '--checkbox-radius': rem(5) } }),
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Anchor: Anchor.extend({ defaultProps: { underline: 'hover', c: 'inherit' } }),

    Paper: Paper.extend({ defaultProps: { radius: 'md' } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { radius: '50%' },
      classNames: { placeholder: classes.avatarPlaceholder },
    }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 'xl', withItemsBorders: false },
      classNames: { root: classes.segmented, label: classes.segmentedLabel },
      vars: () => ({
        root: { '--sc-color': 'var(--mantine-color-bright)', '--sc-shadow': 'none' },
      }),
    }),

    Accordion: Accordion.extend({
      defaultProps: { chevronSize: 32 },
      classNames: {
        root: classes.accordion,
        item: classes.accordionItem,
        control: classes.accordionControl,
        label: classes.accordionLabel,
        chevron: classes.accordionChevron,
        content: classes.accordionContent,
      },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-brand-filled-hover': 'var(--mantine-color-navy-6)',
      '--mantine-color-focus-ring': 'var(--sw-link)',
      '--mantine-color-error': 'var(--sw-critical)',
      '--sw-link': '#2a4a8a',
      '--sw-good': '#2e7d4f',
      '--sw-critical': '#b3392f',
      '--sw-marigold': 'var(--mantine-color-marigold-5)',
      '--sw-marigold-ink': '#2b1d00',
      '--sw-marigold-soft': 'var(--mantine-color-marigold-1)',
      '--sw-quote-bg': 'var(--mantine-primary-color-filled)',
      '--sw-quote-color': 'var(--mantine-primary-color-contrast)',
      '--sw-shelf': '#6b4a2b',
      '--sw-spine-1': '#1b2a4a',
      '--sw-spine-2': '#c44f36',
      '--sw-spine-3': '#e8dcc2',
      '--sw-spine-4': '#3d6f6a',
      '--sw-spine-5': '#8b5e9e',
      '--sw-spine-6': '#f7f2e7',
      '--sw-spine-7': '#d9862b',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f3f5fa',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-brand-filled-hover': 'var(--mantine-color-marigold-4)',
      '--mantine-color-focus-ring': 'var(--sw-link)',
      '--mantine-color-error': 'var(--sw-critical)',
      '--mantine-shadow-md': '0 18px 40px -18px rgba(0, 0, 0, 0.8), 0 3px 8px rgba(0, 0, 0, 0.4)',
      '--sw-link': '#9db8ee',
      '--sw-good': '#5cbb83',
      '--sw-critical': '#ec6b5f',
      '--sw-marigold': 'var(--mantine-color-marigold-6)',
      '--sw-marigold-ink': '#1a1200',
      '--sw-marigold-soft': '#2a2414',
      '--sw-quote-bg': 'var(--mantine-color-dark-6)',
      '--sw-quote-color': 'var(--mantine-color-bright)',
      '--sw-shelf': '#4e3520',
      '--sw-spine-1': '#3a4f7d',
      '--sw-spine-2': '#b34a33',
      '--sw-spine-3': '#cbbf9f',
      '--sw-spine-4': '#3d6f6a',
      '--sw-spine-5': '#7d5590',
      '--sw-spine-6': '#d9d2c0',
      '--sw-spine-7': '#c97a24',
    },
  };
};
