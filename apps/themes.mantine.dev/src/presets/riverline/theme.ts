import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  Notification,
  Pagination,
  Paper,
  rem,
  SegmentedControl,
  Stat,
  Table,
  Tabs,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 34, sm: 40 };

function controlHeight(size: unknown) {
  const height = CONTROL_HEIGHTS[typeof size === 'string' ? size : 'sm'];
  return height ? rem(height) : undefined;
}

function controlFontSize(size: unknown) {
  return size === undefined || size === 'sm' ? 'var(--mantine-font-size-md)' : undefined;
}

export const theme = createTheme({
  primaryColor: 'riverline',
  primaryShade: { light: 6, dark: 5 },
  luminanceThreshold: 0.3,
  black: '#0d1412',
  colors: {
    riverline: [
      '#e7f5f0',
      '#c9e9dd',
      '#9dd6c1',
      '#74c2a6',
      '#4fb08f',
      '#2a9a78',
      '#0f7b5f',
      '#0b6a51',
      '#0a5844',
      '#084536',
    ],
    heron: [
      '#f0eefb',
      '#dedaf6',
      '#c2bbef',
      '#a69de8',
      '#8f86e6',
      '#7a6fd0',
      '#6659bd',
      '#5447a3',
      '#433884',
      '#332a66',
    ],
    gray: [
      '#f2f5f3',
      '#e9eeeb',
      '#e3e8e5',
      '#dbe1de',
      '#c6cec9',
      '#a1aba6',
      '#6a756f',
      '#4c5651',
      '#323a36',
      '#1f2724',
    ],
    dark: [
      '#d9dfdc',
      '#b5bdb9',
      '#919b96',
      '#6b7470',
      '#454c49',
      '#353b39',
      '#2b302e',
      '#242827',
      '#1c1f1e',
      '#141615',
    ],
  },

  fontFamily: "Barlow, 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "'Barlow Semi Condensed', 'Arial Narrow', 'Helvetica Neue', sans-serif",
    fontWeight: '600',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(32), lineHeight: '1.1' },
      h2: { fontSize: rem(20), lineHeight: '1.2' },
      h3: { fontSize: rem(18), lineHeight: '1.25' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(20) },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.5', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(3), sm: rem(4), md: rem(8), lg: rem(12), xl: rem(16) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(20),
    lg: rem(24),
    xl: rem(32),
  },
  shadows: {
    md: '0 10px 28px -12px rgba(13, 20, 18, 0.28), 0 2px 6px rgba(13, 20, 18, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => ({
        root: {
          '--button-height': controlHeight(props.size),
          '--button-fz': controlFontSize(props.size),
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 'input-sm' },
    }),

    Input: Input.extend({
      vars: (_, props) => ({
        wrapper: {
          '--input-height': controlHeight(props.size),
          '--input-fz': controlFontSize(props.size),
        },
      }),
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'md', withBorder: true } }),
    Card: Card.extend({ defaultProps: { radius: 'md', withBorder: true, padding: 'lg' } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xs', size: 'lg' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { variant: 'default', radius: 'xl' },
      classNames: { root: classes.avatar },
      vars: () => ({
        root: {
          '--avatar-bg': 'var(--mantine-color-neutral-2)',
          '--avatar-color': 'var(--mantine-color-bright)',
          '--avatar-bd': '1px solid var(--mantine-color-border)',
        },
      }),
    }),

    Stat: Stat.extend({
      classNames: { label: classes.statLabel, value: classes.statValue },
    }),

    SegmentedControl: SegmentedControl.extend({
      classNames: { root: classes.segmented, label: classes.segmentedLabel },
    }),

    Tabs: Tabs.extend({ classNames: { tab: classes.tab, list: classes.tabsList } }),

    Table: Table.extend({
      defaultProps: {
        horizontalSpacing: 'lg',
        verticalSpacing: 'calc(var(--mantine-spacing-xs) * 2)',
        highlightOnHover: true,
        fz: 'md',
      },
      classNames: { th: classes.th },
    }),

    Checkbox: Checkbox.extend({ defaultProps: { radius: 'sm' } }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'md', width: 216 },
      classNames: { item: classes.menuItem },
    }),

    Notification: Notification.extend({
      defaultProps: { radius: 'md', withBorder: true },
      classNames: {
        title: classes.notificationTitle,
        description: classes.notificationDescription,
      },
    }),

    Pagination: Pagination.extend({
      defaultProps: { size: 'md', gap: '2xs' },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-9)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
    },
  };
};
