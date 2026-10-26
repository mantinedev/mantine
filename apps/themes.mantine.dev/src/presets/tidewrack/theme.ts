import {
  ActionIcon,
  Badge,
  Button,
  Chip,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Paper,
  Popover,
  rem,
  SegmentedControl,
  Switch,
  Table,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 32, sm: 40 };

function controlHeight(size: unknown) {
  const height = CONTROL_HEIGHTS[typeof size === 'string' ? size : 'sm'];
  return height ? rem(height) : undefined;
}

export const theme = createTheme({
  primaryColor: 'tide',
  primaryShade: { light: 7, dark: 6 },
  white: '#ffffff',
  black: '#17143a',
  colors: {
    tide: [
      '#eeecff',
      '#dcd8ff',
      '#b9b1ff',
      '#978aff',
      '#7a6bff',
      '#6e5fff',
      '#5b4bff',
      '#4a3aff',
      '#3a2ae8',
      '#2c1fc0',
    ],
    peach: [
      '#fff3eb',
      '#ffe6d6',
      '#ffd4ba',
      '#ffc4a1',
      '#ffb58a',
      '#ffb58a',
      '#f59a68',
      '#e0682c',
      '#b84e1c',
      '#8a3810',
    ],
    gray: [
      '#f5f4fc',
      '#eeecfb',
      '#e2dff8',
      '#dad6f2',
      '#b9b2e5',
      '#9a94d6',
      '#6a65a3',
      '#4a457f',
      '#2e2a5c',
      '#17143a',
    ],
    dark: [
      '#cfcbf2',
      '#b3aeea',
      '#9a94d6',
      '#6e67b8',
      '#4c449c',
      '#36307c',
      '#272260',
      '#1f1b4d',
      '#17143a',
      '#0c0a22',
    ],
  },
  surfaces: {
    light: {
      page: 'var(--mantine-color-gray-0)',
      panel: 'var(--mantine-color-white)',
      panel2: 'var(--mantine-color-gray-1)',
      sunken: 'var(--mantine-color-white)',
      input: 'var(--mantine-color-white)',
    },
    dark: {
      page: 'var(--mantine-color-dark-8)',
      panel: 'var(--mantine-color-dark-7)',
      panel2: 'var(--mantine-color-dark-6)',
      sunken: 'var(--mantine-color-dark-7)',
      input: 'var(--mantine-color-dark-7)',
    },
  },

  fontFamily: "Chivo, 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "'Big Shoulders Display', 'Arial Narrow', Impact, sans-serif",
    fontWeight: '900',
    sizes: {
      h1: { fontSize: rem(128), lineHeight: '0.8' },
      h2: { fontSize: rem(46), lineHeight: '0.9' },
      h3: { fontSize: rem(22), lineHeight: '1.1', fontWeight: '800' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(15), lg: rem(18), xl: rem(22) },
  lineHeights: { xs: '1.45', sm: '1.5', md: '1.5', lg: '1.4', xl: '1.3' },
  fontWeights: { regular: '400', medium: '500', bold: '700' },

  defaultRadius: 'md',
  radius: { xs: rem(3), sm: rem(4), md: rem(6), lg: rem(10), xl: rem(16) },
  spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(24), xl: rem(32) },
  shadows: {
    md: '0 24px 50px -20px rgba(23, 20, 58, 0.4), 0 4px 12px rgba(23, 20, 58, 0.1)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => ({
        root: {
          '--button-height': controlHeight(props.size),
          '--button-padding-x': props.size === 'xs' ? rem(12) : rem(18),
          '--button-fz': props.size === 'xs' ? 'var(--mantine-font-size-sm)' : rem(14),
          ...(props.color === 'peach'
            ? {
                '--button-bg': 'var(--tw-peach)',
                '--button-hover': 'var(--mantine-color-peach-3)',
                '--button-color': 'var(--tw-peach-ink)',
              }
            : {}),
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default' },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root: { '--ai-size': props.size === undefined ? rem(40) : undefined },
      }),
    }),

    Input: Input.extend({
      classNames: { input: classes.input, section: classes.inputSection },
      vars: (_, props) => ({
        wrapper: {
          '--input-height': controlHeight(props.size),
          '--input-fz':
            props.size === undefined || props.size === 'sm'
              ? 'var(--mantine-font-size-md)'
              : undefined,
        },
      }),
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
      vars: (_, props) =>
        props.color === 'peach'
          ? { root: { '--badge-bg': 'var(--tw-peach)', '--badge-color': 'var(--tw-peach-ink)' } }
          : { root: {} },
    }),

    Chip: Chip.extend({
      defaultProps: { variant: 'outline', size: 'md' },
      classNames: { label: classes.chipLabel, iconWrapper: classes.chipIcon },
      vars: () => ({
        root: {
          '--chip-size': rem(32),
          '--chip-padding': rem(12),
          '--chip-checked-padding': rem(12),
          '--chip-fz': 'var(--mantine-font-size-sm)',
          '--chip-bg': 'var(--mantine-color-bright)',
          '--chip-hover': 'var(--mantine-color-bright)',
          '--chip-color': 'var(--mantine-color-body)',
          '--chip-bd': '1.5px solid var(--mantine-color-bright)',
        },
      }),
    }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { withItemsBorders: false, radius: 'md' },
      vars: () => ({ root: { '--sc-color': 'var(--tw-surface-3)', '--sc-shadow': 'none' } }),
      classNames: {
        root: classes.segmented,
        control: classes.segmentedControl,
        label: classes.segmentedLabel,
        indicator: classes.segmentedIndicator,
      },
    }),

    Switch: Switch.extend({
      defaultProps: { withThumbIndicator: false },
      classNames: { label: classes.switchLabel },
      vars: () => ({
        root: {
          '--switch-height': rem(22),
          '--switch-width': rem(38),
          '--switch-thumb-size': rem(16),
          '--switch-track-label-padding': rem(3),
          '--switch-color': 'var(--tw-now)',
        },
      }),
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg', withBorder: true } }),

    Popover: Popover.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: { dropdown: classes.dropdown },
    }),

    Table: Table.extend({
      defaultProps: { verticalSpacing: rem(8), horizontalSpacing: 0, fz: 'sm' },
      classNames: { td: classes.td },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--tw-font-display': theme.headings.fontFamily,
      '--tw-peach': '#ffb58a',
      '--tw-peach-ink': '#2a1206',
      '--tw-shade': '#0e0b2a',
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-bright': 'var(--mantine-color-gray-9)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-border': 'var(--mantine-color-gray-3)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-focus-ring': 'var(--tw-peach)',
      '--mantine-color-track': 'var(--mantine-color-gray-4)',
      '--tw-surface-3': 'var(--mantine-color-gray-2)',
      '--tw-muted': 'var(--mantine-color-gray-6)',
      '--tw-now': '#e0682c',
      '--tw-clash': '#d92f3a',
      '--tw-halftone': 'rgba(23, 20, 58, 0.05)',
      '--tw-hour': 'rgba(23, 20, 58, 0.16)',
      '--tw-half': 'rgba(23, 20, 58, 0.06)',
      '--tw-sea': '#c9d6fb',
      '--tw-sea-line': 'rgba(40, 60, 160, 0.22)',
      '--tw-meadow': '#e9e7f8',
      '--tw-dune': '#d8d2f0',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-text': 'var(--mantine-color-dark-0)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-focus-ring': 'var(--tw-peach)',
      '--mantine-color-track': 'var(--mantine-color-dark-4)',
      '--mantine-color-tide-filled-hover': 'var(--mantine-color-tide-5)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-tide-5)',
      '--mantine-shadow-md': '0 24px 50px -20px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.4)',
      '--tw-surface-3': '#312b74',
      '--tw-muted': 'var(--mantine-color-dark-2)',
      '--tw-now': '#ffb58a',
      '--tw-clash': '#ff5a5f',
      '--tw-halftone': 'rgba(255, 255, 255, 0.045)',
      '--tw-hour': 'rgba(255, 255, 255, 0.14)',
      '--tw-half': 'rgba(255, 255, 255, 0.06)',
      '--tw-sea': '#233a8a',
      '--tw-sea-line': 'rgba(160, 190, 255, 0.25)',
      '--tw-meadow': '#221f58',
      '--tw-dune': '#3a336f',
    },
  };
};
