import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  rem,
  SegmentedControl,
  Slider,
  Table,
  Textarea,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 32, sm: 38 };
const CONTROL_FONT_SIZES: Record<string, number> = { xs: 13, sm: 14 };

function controlSize(size: unknown) {
  return typeof size === 'string' ? size : 'sm';
}

export const theme = createTheme({
  primaryColor: 'moss',
  primaryShade: { light: 6, dark: 4 },
  autoContrast: true,
  white: '#ffffff',
  black: '#111a13',
  colors: {
    moss: [
      '#f2f7e3',
      '#e2edc0',
      '#cde093',
      '#b3d65c',
      '#a3c94a',
      '#86ad2a',
      '#6f8f12',
      '#5d780e',
      '#4c6309',
      '#394a06',
    ],
    gray: [
      '#f2f5f2',
      '#eaefeb',
      '#e2e8e3',
      '#d8e0da',
      '#bcc8bf',
      '#93a197',
      '#66746b',
      '#4a574e',
      '#2e3a33',
      '#1c261f',
    ],
    dark: [
      '#c8d2cb',
      '#a9b5ad',
      '#8e9b92',
      '#5f6e64',
      '#3b493f',
      '#2b372e',
      '#202a22',
      '#182019',
      '#111612',
      '#0a0d0b',
    ],
  },

  fontFamily: "Epilogue, 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace: "ui-monospace, 'SF Mono', Menlo, monospace",
  headings: {
    fontFamily: "Epilogue, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(20), lineHeight: '1.3' },
      h2: { fontSize: rem(17), lineHeight: '1.3' },
      h3: { fontSize: rem(15), lineHeight: '1.3' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(15), lg: rem(17), xl: rem(20) },
  lineHeights: { xs: '1.45', sm: '1.5', md: '1.5', lg: '1.5', xl: '1.4' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(5), sm: rem(8), md: rem(10), lg: rem(14), xl: rem(999) },
  spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(18), xl: rem(24) },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.12)',
    md: '0 16px 36px -18px rgba(17, 26, 19, 0.4), 0 2px 6px rgba(17, 26, 19, 0.06)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button, section: classes.buttonSection },
      vars: (_, props) => {
        const size = controlSize(props.size);
        const height = CONTROL_HEIGHTS[size];
        return {
          root: {
            '--button-height': height ? rem(height) : undefined,
            '--button-fz': height ? rem(CONTROL_FONT_SIZES[size]) : undefined,
            '--button-padding-x': height ? rem(size === 'xs' ? 12 : 16) : undefined,
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 36 },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
    }),

    Textarea: Textarea.extend({
      defaultProps: { radius: 'lg' },
    }),

    Card: Card.extend({ defaultProps: { radius: 'lg', withBorder: true, padding: 0 } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Avatar: Avatar.extend({
      defaultProps: { radius: 'xl', size: 34 },
      classNames: { root: classes.avatar },
      vars: () => ({
        root: {
          '--avatar-bg': 'var(--understory-ink)',
          '--avatar-color': 'var(--understory-ink-contrast)',
          '--avatar-bd': '0',
        },
      }),
    }),

    ThemeIcon: ThemeIcon.extend({ defaultProps: { radius: 'xl' } }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { withItemsBorders: false, radius: 'md' },
      classNames: {
        root: classes.segmented,
        indicator: classes.segmentedIndicator,
        label: classes.segmentedLabel,
        innerLabel: classes.segmentedInnerLabel,
      },
    }),

    Chip: Chip.extend({
      defaultProps: { variant: 'outline', icon: null },
      classNames: { label: classes.chipLabel },
    }),

    Checkbox: Checkbox.extend({
      defaultProps: { radius: 'xs', size: 'sm' },
      classNames: { input: classes.checkboxInput, label: classes.checkboxLabel },
    }),

    Slider: Slider.extend({
      defaultProps: { size: 'sm', label: null },
      classNames: { thumb: classes.sliderThumb },
    }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'md', width: 260 },
      classNames: {
        dropdown: classes.menuDropdown,
        label: classes.menuLabel,
        item: classes.menuItem,
        itemDescription: classes.menuItemDescription,
      },
    }),

    Table: Table.extend({
      defaultProps: { horizontalSpacing: 0, verticalSpacing: 7, fz: 14, withRowBorders: false },
      classNames: { td: classes.td },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--understory-font-read': "Lora, Georgia, 'Times New Roman', serif",
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-moss-filled-hover': '#7da11a',
      '--understory-ink': '#4a3426',
      '--understory-ink-contrast': '#fbf6f1',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f1f5f2',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-moss-filled-hover': '#b3d65c',
      '--mantine-shadow-md': '0 16px 36px -18px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.4)',
      '--understory-ink': '#3b2b21',
      '--understory-ink-contrast': '#f3e8df',
    },
  };
};
