import {
  Accordion,
  ActionIcon,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  defaultVariantColorsResolver,
  Menu,
  rem,
  SegmentedControl,
  Title,
  type VariantColorsResolver,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_HEIGHTS: Record<string, number> = { xs: 36, sm: 40, md: 46 };

const variantColorResolver: VariantColorsResolver = (input) => {
  if (input.variant === 'filled' && input.color === 'aqua') {
    return {
      background: 'var(--mantine-color-aqua-4)',
      hover: 'var(--mantine-color-aqua-3)',
      color: 'var(--mantine-color-aqua-9)',
      border: `${rem(1.5)} solid transparent`,
    };
  }

  return defaultVariantColorsResolver(input);
};

export const theme = createTheme({
  primaryColor: 'saltwater',
  primaryShade: { light: 7, dark: 4 },
  black: '#0b2730',
  variantColorResolver,
  colors: {
    saltwater: [
      '#e7f7f6',
      '#c7eeea',
      '#a3e9e1',
      '#7de8dc',
      '#5fe0d2',
      '#2bb8aa',
      '#167a86',
      '#0b4a5a',
      '#083c49',
      '#052a33',
    ],
    aqua: [
      '#e9fbf9',
      '#cdf5f0',
      '#a8efe7',
      '#7de8dc',
      '#5fe0d2',
      '#3fcfc0',
      '#2bb8aa',
      '#1e958a',
      '#12665f',
      '#04232a',
    ],
    postmark: [
      '#fdecea',
      '#f9d0cb',
      '#f4aaa2',
      '#f2877c',
      '#f0675a',
      '#e04d3e',
      '#cf3b2b',
      '#ad2f22',
      '#8a251b',
      '#661b14',
    ],
    gray: [
      '#eef4f5',
      '#e4edef',
      '#dce7e9',
      '#d5e1e3',
      '#b5c7ca',
      '#8fa6ab',
      '#66808a',
      '#44606a',
      '#2a434b',
      '#0b2730',
    ],
    dark: [
      '#c3d6da',
      '#9fb6bb',
      '#7d989e',
      '#4f7380',
      '#2c5260',
      '#1d3d47',
      '#153541',
      '#0f2a33',
      '#071a20',
      '#04161b',
    ],
  },

  fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "Unbounded, 'Arial Black', Arial, sans-serif",
    fontWeight: '700',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(82), lineHeight: '0.94', fontWeight: '800' },
      h2: { fontSize: rem(42), lineHeight: '1.04' },
      h3: { fontSize: rem(22), lineHeight: '1.55' },
      h4: { fontSize: rem(14), lineHeight: '1.55' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(19) },
  lineHeights: { xs: '1.4', sm: '1.5', md: '1.55', lg: '1.55', xl: '1.5' },
  fontWeights: { regular: '400', medium: '600', bold: '700' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(6), md: rem(10), lg: rem(16), xl: rem(22) },
  spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(24), xl: rem(32) },
  shadows: {
    xl: '0 22px 44px -22px rgba(6, 30, 38, 0.55), 0 4px 10px rgba(6, 30, 38, 0.1)',
  },

  components: {
    Button: Button.extend({
      defaultProps: { size: 'md', radius: 999 },
      classNames: { root: classes.button },
      vars: (_, props) => {
        const height = BUTTON_HEIGHTS[typeof props.size === 'string' ? props.size : 'md'];
        const primaryFilled = (props.variant ?? 'filled') === 'filled' && !props.color;
        return {
          root: {
            '--button-height': height ? rem(height) : undefined,
            '--button-fz': height ? rem(15) : undefined,
            '--button-padding-x': height ? rem(22) : undefined,
            '--button-color': primaryFilled ? 'var(--mantine-primary-color-contrast)' : undefined,
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', radius: 999 },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root: { '--ai-size': props.size === undefined ? rem(42) : undefined },
      }),
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 999, withItemsBorders: false },
      classNames: {
        root: classes.segmented,
        indicator: classes.segmentedIndicator,
        label: classes.segmentedLabel,
        innerLabel: classes.segmentedInnerLabel,
      },
    }),

    Accordion: Accordion.extend({
      defaultProps: { chevronSize: 32 },
      classNames: {
        item: classes.accordionItem,
        control: classes.accordionControl,
        label: classes.accordionLabel,
        chevron: classes.accordionChevron,
        content: classes.accordionContent,
      },
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'xl', radius: 'lg' },
      classNames: { dropdown: classes.menuDropdown, item: classes.menuItem },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--sw-font-hand': "Caveat, 'Bradley Hand', 'Comic Sans MS', cursive",
      '--sw-band-ink': '#d9eef0',
      '--sw-route-idle': 'rgba(140, 214, 220, 0.28)',
      '--sw-route-on': 'var(--mantine-color-aqua-4)',
      '--sw-paper-ink': '#0b2730',
      '--sw-paper-text': '#2a434b',
      '--sw-paper-line': '#b5c7ca',
      '--sw-paper-rule': '#d5e1e3',
      '--sw-paper-well': '#eef4f5',
      '--sw-paper-accent': '#0b4a5a',
      '--sw-paper-accent-hover': '#083c49',
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-surface-sunken': 'var(--mantine-color-gray-0)',
      '--mantine-primary-color-contrast': 'var(--mantine-color-white)',
      '--sw-band': '#0b3a46',
      '--sw-band-2': '#0f4655',
      '--sw-land': '#17566a',
      '--sw-land-edge': '#1f6a80',
      '--sw-paper': '#ffffff',
      '--sw-stamp-ground': 'var(--mantine-color-gray-0)',
      '--sw-postmark': 'var(--mantine-color-postmark-6)',
      '--sw-postmark-blend': 'multiply',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f1f8f9',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-surface-page': 'var(--mantine-color-dark-8)',
      '--mantine-color-surface-panel': 'var(--mantine-color-dark-7)',
      '--mantine-color-surface-sunken': '#0c242c',
      '--mantine-color-default-hover': '#0c242c',
      '--mantine-primary-color-contrast': 'var(--mantine-color-aqua-9)',
      '--mantine-color-saltwater-filled-hover': 'var(--mantine-color-saltwater-3)',
      '--mantine-shadow-xl': '0 22px 44px -22px rgba(0, 0, 0, 0.85), 0 4px 10px rgba(0, 0, 0, 0.4)',
      '--sw-band': '#04161b',
      '--sw-band-2': '#08222a',
      '--sw-land': '#0f3f4d',
      '--sw-land-edge': '#17566a',
      '--sw-paper': '#f4f1ea',
      '--sw-stamp-ground': '#0c242c',
      '--sw-postmark': 'var(--mantine-color-postmark-4)',
      '--sw-postmark-blend': 'normal',
    },
  };
};
