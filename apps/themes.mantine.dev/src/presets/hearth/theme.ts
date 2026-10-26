import {
  Accordion,
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Combobox,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  Paper,
  parseThemeColor,
  Pill,
  rem,
  Select,
  Tabs,
  ThemeIcon,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_HEIGHTS: Record<string, number> = { xs: 28, sm: 32, md: 36 };
const INPUT_HEIGHTS: Record<string, number> = { xs: 32, sm: 36 };

function controlHeight(heights: Record<string, number>, size: unknown) {
  const height = heights[typeof size === 'string' ? size : 'sm'];
  return height ? rem(height) : undefined;
}

function isPrimaryFilled(props: { variant?: string; color?: string }) {
  return (props.variant === undefined || props.variant === 'filled') && !props.color;
}

export const theme = createTheme({
  primaryColor: 'hearth',
  primaryShade: { light: 6, dark: 5 },
  black: '#0e1216',
  colors: {
    hearth: [
      '#fdf4e3',
      '#fbe6c2',
      '#ecc887',
      '#ffb648',
      '#f5b342',
      '#f5a524',
      '#b25500',
      '#a14d00',
      '#5a4418',
      '#2a2315',
    ],
    red: [
      '#fdeceb',
      '#fad3d0',
      '#f5aaa4',
      '#f48a81',
      '#f2665b',
      '#f2665b',
      '#c6362c',
      '#a92c23',
      '#86231c',
      '#5e1914',
    ],
    green: [
      '#e6f6ee',
      '#c5ead6',
      '#99dbb8',
      '#6fcd9d',
      '#4cc38a',
      '#4cc38a',
      '#1d8a55',
      '#187548',
      '#135e3a',
      '#0d4229',
    ],
    gray: [
      '#f6f7f8',
      '#eef0f2',
      '#eaedf0',
      '#dde1e6',
      '#c3c9d0',
      '#9aa2ac',
      '#646e79',
      '#4a535d',
      '#2d333a',
      '#1b2026',
    ],
    dark: [
      '#c8ced5',
      '#a9b0b8',
      '#8a929c',
      '#5b636d',
      '#3c434c',
      '#2b3138',
      '#22272d',
      '#1b1f24',
      '#14171b',
      '#0d0f12',
    ],
  },

  surfaces: {
    light: { page: 'var(--mantine-color-gray-1)' },
  },

  fontFamily: "Onest, 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "Onest, 'Segoe UI', system-ui, sans-serif",
    fontWeight: '600',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(20), lineHeight: '1.25' },
      h2: { fontSize: rem(16), lineHeight: '1.25' },
      h3: { fontSize: rem(14), lineHeight: '1.35' },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(13),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  lineHeights: { xs: '1.5', sm: '1.5', md: '1.5', lg: '1.5', xl: '1.4' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(3), sm: rem(4), md: rem(6), lg: rem(10), xl: rem(16) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(28),
  },
  shadows: {
    md: '0 16px 40px -12px rgba(14, 18, 22, 0.25), 0 2px 6px rgba(14, 18, 22, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => ({
        root: {
          '--button-height': controlHeight(BUTTON_HEIGHTS, props.size),
          '--button-fz': 'var(--mantine-font-size-sm)',
          '--button-padding-x': props.size === 'md' ? rem(14) : rem(12),
          '--button-color': isPrimaryFilled(props)
            ? 'var(--mantine-primary-color-contrast)'
            : undefined,
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 32 },
      classNames: { root: classes.actionIcon },
    }),

    ThemeIcon: ThemeIcon.extend({
      vars: (_, props) => ({
        root: {
          '--ti-color': isPrimaryFilled(props)
            ? 'var(--mantine-primary-color-contrast)'
            : undefined,
        },
      }),
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: (_, props) => ({
        wrapper: {
          '--input-height': controlHeight(INPUT_HEIGHTS, props.size),
          '--input-fz': 'var(--mantine-font-size-md)',
        },
      }),
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Paper: Paper.extend({ defaultProps: { radius: 'md', withBorder: true } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'sm' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Pill: Pill.extend({
      classNames: { root: classes.pill, remove: classes.pillRemove },
    }),

    Avatar: Avatar.extend({
      defaultProps: { radius: 'xl' },
      classNames: { placeholder: classes.avatarPlaceholder },
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'lg', width: 230 },
      classNames: {
        dropdown: classes.dropdown,
        item: classes.menuItem,
        label: classes.menuLabel,
      },
    }),

    Combobox: Combobox.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: { dropdown: classes.dropdown, option: classes.option },
    }),

    Select: Select.extend({
      defaultProps: { checkIconPosition: 'right' },
      classNames: { dropdown: classes.dropdown, option: classes.option },
    }),

    Tabs: Tabs.extend({
      classNames: { list: classes.tabsList, tab: classes.tab },
    }),

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

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-default': 'var(--mantine-color-gray-0)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-2)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-color': 'var(--mantine-color-text)',
      '--mantine-color-hover': 'var(--mantine-color-gray-2)',
      '--mantine-color-hearth-text': 'var(--mantine-color-hearth-7)',
      '--mantine-color-red-text': 'var(--mantine-color-red-6)',
      '--mantine-color-green-text': 'var(--mantine-color-green-6)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f3f5f7',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-default': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-color': 'var(--mantine-color-text)',
      '--mantine-color-hover': 'var(--mantine-color-dark-5)',
      '--mantine-color-hearth-filled-hover': 'var(--mantine-color-hearth-3)',
      '--mantine-color-red-text': 'var(--mantine-color-red-5)',
      '--mantine-color-green-text': 'var(--mantine-color-green-5)',
      '--mantine-primary-color-contrast': parseThemeColor({
        color: theme.primaryColor,
        theme,
        colorScheme: 'dark',
      }).isLight
        ? '#1c1305'
        : defaults.dark['--mantine-primary-color-contrast'],
      '--mantine-shadow-md': '0 16px 40px -12px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.4)',
    },
  };
};
