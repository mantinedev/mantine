import {
  ActionIcon,
  Avatar,
  Button,
  Checkbox,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Drawer,
  Input,
  Menu,
  Notification,
  rem,
  SegmentedControl,
  Select,
  Switch,
  Table,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 34, sm: 40 };

function controlHeight(size: unknown) {
  const height = CONTROL_HEIGHTS[typeof size === 'string' ? size : 'sm'];
  return height ? rem(height) : undefined;
}

export const theme = createTheme({
  primaryColor: 'ink',
  primaryShade: { light: 6, dark: 5 },
  luminanceThreshold: 0.45,
  black: '#0e1222',
  colors: {
    ink: [
      '#eef0fe',
      '#dde1fc',
      '#bcc4fa',
      '#98a4f8',
      '#6d7df6',
      '#5a6cf2',
      '#2638c4',
      '#1d2da6',
      '#18258a',
      '#121b6b',
    ],
    red: [
      '#fff0ef',
      '#fdd9d7',
      '#f9b3af',
      '#f58d87',
      '#f27a73',
      '#f0675f',
      '#c42d2a',
      '#a52421',
      '#861c1a',
      '#661413',
    ],
    green: [
      '#e9f7ef',
      '#cbeedb',
      '#a1e0bd',
      '#7fd1a3',
      '#6bc995',
      '#58c088',
      '#22804b',
      '#1b6b3e',
      '#155632',
      '#0f4125',
    ],
    orange: [
      '#fdf3e3',
      '#fbe3bd',
      '#f4cb8a',
      '#eeb865',
      '#e8ad52',
      '#e3a33f',
      '#a86400',
      '#8c5300',
      '#704200',
      '#543200',
    ],
    pink: [
      '#ffeaf5',
      '#ffcfe7',
      '#ffa3d2',
      '#ff7cbf',
      '#ff63b2',
      '#ff4fa7',
      '#e0177f',
      '#bd106a',
      '#990b56',
      '#750742',
    ],
    gray: [
      '#f3f5f9',
      '#eceff4',
      '#e3e7ee',
      '#d9dee8',
      '#c2c9d6',
      '#9aa1b4',
      '#687088',
      '#4a5164',
      '#242939',
      '#0e1222',
    ],
    dark: [
      '#d9dce6',
      '#b8bccb',
      '#979db2',
      '#6a7084',
      '#424758',
      '#2e3240',
      '#292d3a',
      '#20232e',
      '#161821',
      '#111319',
    ],
  },

  fontFamily: "Figtree, 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "'Bricolage Grotesque', 'Trebuchet MS', system-ui, sans-serif",
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(30), lineHeight: '1', fontWeight: '800' },
      h2: { fontSize: rem(24), lineHeight: '1.1' },
      h3: { fontSize: rem(16), lineHeight: '1.3' },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(13),
    md: rem(15),
    lg: rem(17),
    xl: rem(20),
  },
  lineHeights: { xs: '1.35', sm: '1.4', md: '1.45', lg: '1.45', xl: '1.4' },
  fontWeights: { regular: '400', medium: '600', bold: '700' },

  defaultRadius: 'md',
  radius: { xs: rem(6), sm: rem(10), md: rem(14), lg: rem(16), xl: rem(20) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  shadows: {
    xs: '0 1px 0 rgba(14, 18, 34, 0.06), 0 1px 2px rgba(14, 18, 34, 0.08)',
    sm: '0 6px 14px -6px rgba(14, 18, 34, 0.22), 0 1px 2px rgba(14, 18, 34, 0.08)',
    xl: '0 24px 56px -16px rgba(14, 18, 34, 0.38), 0 4px 10px rgba(14, 18, 34, 0.1)',
  },

  components: {
    Button: Button.extend({
      defaultProps: { radius: 1000 },
      classNames: { root: classes.button },
      vars: (_, props) => ({
        root: {
          '--button-height': controlHeight(props.size),
          '--button-fz': 'var(--mantine-font-size-sm)',
          '--button-padding-x': props.size === 'xs' ? rem(14) : rem(18),
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 40, radius: 1000 },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      defaultProps: { radius: 1000 },
      classNames: { input: classes.input },
      vars: () => ({
        wrapper: {
          '--input-height': rem(36),
          '--input-fz': 'var(--mantine-font-size-sm)',
        },
      }),
    }),

    Select: Select.extend({
      defaultProps: {
        allowDeselect: false,
        comboboxProps: { radius: 'md', shadow: 'xl' },
      },
    }),

    Checkbox: Checkbox.extend({
      defaultProps: { radius: 'xs' },
      classNames: {
        input: classes.checkboxInput,
        label: classes.checkboxLabel,
      },
    }),

    Switch: Switch.extend({
      defaultProps: { color: 'green', withThumbIndicator: false },
      classNames: { track: classes.switchTrack, thumb: classes.switchThumb },
      vars: () => ({
        root: {
          '--switch-height': rem(26),
          '--switch-width': rem(44),
          '--switch-thumb-size': rem(20),
        },
      }),
    }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 1000, withItemsBorders: false },
      classNames: { root: classes.segmented, label: classes.segmentedLabel },
      vars: () => ({
        root: {
          '--sc-color': 'var(--mantine-color-surface-panel)',
          '--sc-shadow': 'var(--mantine-shadow-xs)',
          '--sc-font-size': 'var(--mantine-font-size-sm)',
          '--sc-padding': `0 ${rem(16)}`,
        },
      }),
    }),

    Avatar: Avatar.extend({
      defaultProps: { size: 26 },
      classNames: { root: classes.avatar },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Menu: Menu.extend({
      defaultProps: {
        shadow: 'xl',
        radius: 'md',
        width: 220,
        position: 'bottom-end',
      },
      classNames: {
        dropdown: classes.menuDropdown,
        item: classes.menuItem,
        label: classes.menuLabel,
      },
    }),

    Drawer: Drawer.extend({
      defaultProps: { radius: 22, offset: 'var(--mantine-spacing-xs)', size: 420, shadow: 'xl' },
      classNames: { content: classes.drawerContent },
    }),

    DrawerRoot: {
      defaultProps: { radius: 22, offset: 'var(--mantine-spacing-xs)', size: 420, shadow: 'xl' },
    },

    Table: Table.extend({
      classNames: { th: classes.th, td: classes.td },
    }),

    Notification: Notification.extend({
      classNames: {
        root: classes.notification,
        description: classes.notificationDescription,
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
      '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-border-input': 'var(--mantine-color-gray-4)',
      '--mantine-color-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f6f7fb',
      '--mantine-color-surface-page': 'var(--mantine-color-dark-7)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-border': 'var(--mantine-color-dark-5)',
      '--mantine-color-border-input': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-ink-filled-hover': 'var(--mantine-color-ink-4)',
      '--mantine-shadow-xs': '0 1px 0 rgba(0, 0, 0, 0.35)',
      '--mantine-shadow-sm': '0 8px 18px -6px rgba(0, 0, 0, 0.6)',
      '--mantine-shadow-xl': '0 24px 56px -16px rgba(0, 0, 0, 0.8)',
    },
  };
};
