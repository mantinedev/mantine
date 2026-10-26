import {
  ActionIcon,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Popover,
  rem,
  SegmentedControl,
  Table,
  TableOfContents,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 34, sm: 40, md: 46 };
const CONTROL_FONT_SIZES: Record<string, string> = {
  xs: 'var(--mantine-font-size-xs)',
  sm: 'var(--mantine-font-size-sm)',
  md: 'var(--mantine-font-size-sm)',
};

function sizeKey(size: unknown) {
  return typeof size === 'string' ? size : size === undefined ? 'sm' : '';
}

function controlHeight(size: unknown) {
  const height = CONTROL_HEIGHTS[sizeKey(size)];
  return height ? rem(height) : undefined;
}

export const theme = createTheme({
  primaryColor: 'tide',
  primaryShade: { light: 7, dark: 4 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  black: '#0f1c26',
  colors: {
    tide: [
      '#eaf3f9',
      '#cfe3ef',
      '#a9cde6',
      '#86bfe6',
      '#6fb0de',
      '#4a93c4',
      '#2f75a6',
      '#1d5c8a',
      '#174d75',
      '#10395a',
    ],
    gray: [
      '#eef3f6',
      '#e6ebef',
      '#dfe8ee',
      '#dbe3e9',
      '#c3cfd8',
      '#a9b4bc',
      '#7f8c96',
      '#64737f',
      '#24323d',
      '#0f1c26',
    ],
    dark: [
      '#cdd8df',
      '#b0bdc6',
      '#8d9ca7',
      '#56656f',
      '#354652',
      '#26343e',
      '#213039',
      '#17222a',
      '#10181e',
      '#0a0f13',
    ],
  },

  fontFamily: "'Work Sans', 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "Gloock, 'Times New Roman', Georgia, serif",
    fontWeight: '400',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(60), lineHeight: '1.02' },
      h2: { fontSize: rem(30), lineHeight: '1.15' },
      h3: { fontSize: rem(22), lineHeight: '1.2' },
    },
  },
  fontSizes: {
    xs: rem(13),
    sm: rem(14),
    md: rem(15),
    lg: rem(17),
    xl: rem(19),
  },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.55', xl: '1.6' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(4), sm: rem(6), md: rem(10), lg: rem(14), xl: rem(20) },
  spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(24), xl: rem(40) },
  shadows: {
    md: '0 12px 32px -14px rgba(15, 28, 38, 0.3), 0 2px 6px rgba(15, 28, 38, 0.06)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => ({
        root: {
          '--button-height': controlHeight(props.size),
          '--button-fz': CONTROL_FONT_SIZES[sizeKey(props.size)],
          '--button-padding-x': sizeKey(props.size) === 'xs' ? rem(12) : undefined,
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 'input-sm' },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: (_, props) => ({
        wrapper: {
          '--input-height': controlHeight(props.size),
          '--input-fz': 'var(--mantine-font-size-md)',
        },
      }),
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Anchor: Anchor.extend({
      defaultProps: { underline: 'always' },
      classNames: { root: classes.anchor },
    }),

    Avatar: Avatar.extend({
      defaultProps: { size: 40, radius: '50%' },
      classNames: { placeholder: classes.avatarPlaceholder },
      vars: () => ({
        root: {
          '--avatar-bg': 'var(--lt-sea-1)',
          '--avatar-color': 'var(--mantine-color-bright)',
        },
      }),
    }),

    Badge: Badge.extend({ classNames: { label: classes.badgeLabel } }),

    Alert: Alert.extend({
      defaultProps: { variant: 'default', radius: 'md' },
      classNames: { title: classes.alertTitle, message: classes.alertMessage },
      vars: () => ({
        root: {
          '--alert-bg': 'var(--mantine-color-surface-muted)',
          '--alert-bd': 'none',
          '--alert-padding': `${rem(20)} ${rem(22)}`,
          '--alert-icon-size': rem(36),
          '--alert-gap': rem(14),
          '--alert-fz': 'var(--mantine-font-size-md)',
          '--alert-lh': '1.55',
        },
      }),
    }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 'md' },
      classNames: { root: classes.segmented, label: classes.segmentedLabel },
      vars: () => ({
        root: {
          '--sc-shadow': '0 1px 2px rgba(15, 28, 38, 0.15)',
          '--sc-padding': `0 ${rem(10)}`,
        },
      }),
    }),

    TableOfContents: TableOfContents.extend({
      defaultProps: { size: 'sm' },
      classNames: { control: classes.tocControl },
    }),

    Table: Table.extend({
      defaultProps: {
        horizontalSpacing: 'md',
        verticalSpacing: rem(11),
        fz: 'sm',
      },
      classNames: { th: classes.th, caption: classes.caption, td: classes.td },
    }),

    Popover: Popover.extend({ defaultProps: { shadow: 'md', radius: 'md' } }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--lt-font-read': "Literata, Georgia, 'Times New Roman', serif",
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--lt-sea-1': '#cfe3ef',
      '--lt-sea-2': '#9cc4dc',
      '--lt-sea-3': '#5f9cc1',
      '--lt-rock': '#a9b4bc',
      '--lt-rock-dark': '#7f8c96',
      '--lt-weed': '#6f8f5a',
      '--lt-sand': '#e8e2d4',
      '--lt-spray-strong': 'var(--mantine-color-gray-2)',
      '--lt-good': '#2e7d4f',
      '--lt-critical': '#b3392f',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f0f5f8',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--lt-sea-1': '#1c3546',
      '--lt-sea-2': '#24506b',
      '--lt-sea-3': '#3a7aa3',
      '--lt-rock': '#3f4c55',
      '--lt-rock-dark': '#56656f',
      '--lt-weed': '#5f7d4c',
      '--lt-sand': '#3a3a33',
      '--lt-spray-strong': 'var(--mantine-color-dark-6)',
      '--lt-good': '#5cbb83',
      '--lt-critical': '#ec6b5f',
    },
  };
};
