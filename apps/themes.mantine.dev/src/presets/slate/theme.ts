import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Combobox,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Divider,
  Input,
  Menu,
  NavLink,
  Paper,
  Popover,
  rem,
  ScrollArea,
  Table,
  ThemeIcon,
  Title,
  Tooltip,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_HEIGHTS: Record<string, number> = { xs: 26, sm: 32, md: 36 };

function buttonHeight(size: unknown) {
  const height = BUTTON_HEIGHTS[typeof size === 'string' ? size : 'sm'];
  return height ? rem(height) : undefined;
}

export const theme = createTheme({
  primaryColor: 'clapper',
  primaryShade: { light: 6, dark: 5 },
  black: '#121315',
  colors: {
    clapper: [
      '#fdf0ef',
      '#fbdcd9',
      '#f6b5b0',
      '#f28c85',
      '#f4645c',
      '#ef4a41',
      '#e0372f',
      '#c92d26',
      '#a5241e',
      '#7f1b16',
    ],
    gray: [
      '#f5f5f4',
      '#f2f2f1',
      '#ececea',
      '#e4e4e2',
      '#cdcdca',
      '#a9aaad',
      '#6c6d71',
      '#4a4b4f',
      '#2c2d30',
      '#121315',
    ],
    dark: [
      '#d4d5d8',
      '#b4b5b9',
      '#96979c',
      '#6b6c71',
      '#3d3e43',
      '#2f3034',
      '#26272a',
      '#1f2023',
      '#18191b',
      '#111214',
    ],
  },
  surfaces: {
    dark: { muted: '#232427', panel2: '#26272a' },
  },

  fontFamily: "Geist, 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace: "'Geist Mono', ui-monospace, Menlo, monospace",
  headings: {
    fontFamily: "Geist, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(20), lineHeight: '1.25' },
      h2: { fontSize: rem(16), lineHeight: '1.3' },
      h3: { fontSize: rem(15), lineHeight: '1.25' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(14), lg: rem(15), xl: rem(16) },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.5', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', semibold: '600', bold: '700' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(6), md: rem(8), lg: rem(12), xl: rem(16) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(18),
    lg: rem(24),
    xl: rem(32),
  },
  shadows: {
    xs: '0 2px 6px rgba(0, 0, 0, 0.08)',
    md: '0 16px 40px -12px rgba(18, 19, 21, 0.3), 0 2px 6px rgba(18, 19, 21, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button, section: classes.buttonSection },
      vars: (_, props) => ({
        root: {
          '--button-height': props.size?.includes('compact') ? undefined : buttonHeight(props.size),
          '--button-padding-x':
            props.size === undefined || props.size === 'sm' ? rem(12) : undefined,
          '--button-fz':
            props.size === undefined || props.size === 'sm'
              ? 'var(--mantine-font-size-sm)'
              : undefined,
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default' },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root: {
          '--ai-size': props.size === undefined ? rem(32) : undefined,
        },
      }),
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg', withBorder: true } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { variant: 'filled' },
      classNames: { placeholder: classes.avatarPlaceholder },
    }),

    ThemeIcon: ThemeIcon.extend({ defaultProps: { radius: 'md' } }),

    NavLink: NavLink.extend({
      classNames: { root: classes.navLink, section: classes.navLinkSection },
    }),

    Divider: Divider.extend({ classNames: { label: classes.dividerLabel } }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: {
        dropdown: classes.dropdown,
        item: classes.menuItem,
        label: classes.menuLabel,
        itemSection: classes.menuItemSection,
      },
    }),

    Popover: Popover.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: { dropdown: classes.dropdown },
    }),

    Combobox: Combobox.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: {
        dropdown: classes.dropdown,
        option: classes.option,
        header: classes.comboboxHeader,
      },
    }),

    Tooltip: Tooltip.extend({ classNames: { tooltip: classes.tooltip } }),

    ScrollArea: ScrollArea.extend({ defaultProps: { scrollbarSize: 8 } }),

    Table: Table.extend({
      defaultProps: { horizontalSpacing: 'sm', verticalSpacing: '2xs', fz: 'sm' },
      classNames: { th: classes.th, td: classes.td },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--slate-hold': '#f6c443',
      '--slate-online': '#2f9e5b',
      '--slate-hold-icon': '#3d2f00',
      '--slate-sticks-dark': '#121315',
      '--slate-sticks-light': '#ffffff',
      '--slate-side-bright': '#ffffff',
      '--slate-side-text': '#c9cacd',
      '--slate-side-line': 'rgba(255, 255, 255, 0.07)',
      '--slate-rail-muted': '#9a9ba0',
      '--slate-rail-hover': '#26282c',
      '--slate-ws-other': '#34363b',
      '--slate-ws-dashed': '#55575d',
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--slate-mention-bg': 'var(--mantine-color-clapper-0)',
      '--slate-hold-bg': '#fff7dc',
      '--slate-hold-ink': '#3d2f00',
      '--slate-done': '#8b8c90',
      '--slate-side': '#1f2124',
      '--slate-side-2': '#2a2c30',
      '--slate-rail': '#16171a',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f5f5f6',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-clapper-filled-hover': 'var(--mantine-color-clapper-4)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-clapper-4)',
      '--mantine-shadow-xs': '0 2px 6px rgba(0, 0, 0, 0.3)',
      '--mantine-shadow-md': '0 16px 40px -12px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.4)',
      '--slate-mention-bg': '#2c1f1f',
      '--slate-hold-bg': '#2e2810',
      '--slate-hold-ink': '#f6e3a8',
      '--slate-done': '#7d7e83',
      '--slate-side': '#111214',
      '--slate-side-2': '#1c1d20',
      '--slate-rail': '#0a0a0b',
    },
  };
};
