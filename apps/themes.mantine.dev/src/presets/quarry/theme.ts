import { CodeHighlight } from '@mantine/code-highlight';
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  InputWrapper,
  Loader,
  NavLink,
  Paper,
  Popover,
  Progress,
  rem,
  SegmentedControl,
  Stat,
  Switch,
  Table,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 28, sm: 34 };
const BUTTON_FONT_SIZES: Record<string, number> = { xs: 12.5, sm: 13 };
const BUTTON_PADDING: Record<string, number> = { xs: 9, sm: 12 };

function sizeKey(size: unknown) {
  return typeof size === 'string' ? size : 'sm';
}

function fromScale(scale: Record<string, number>, size: unknown) {
  const value = scale[sizeKey(size)];
  return value ? rem(value) : undefined;
}

export const theme = createTheme({
  primaryColor: 'quarry',
  primaryShade: 6,
  black: '#0d1017',
  colors: {
    quarry: [
      '#fdf4ff',
      '#fae8ff',
      '#f5d0fe',
      '#f0abfc',
      '#e879f9',
      '#d946ef',
      '#c026d3',
      '#a21caf',
      '#86198f',
      '#701a75',
    ],
    gray: [
      '#f4f5f8',
      '#f0f2f6',
      '#eceff4',
      '#e0e4eb',
      '#c8cdd8',
      '#9aa1b0',
      '#6b7282',
      '#4a5160',
      '#2a2f3b',
      '#0d1017',
    ],
    dark: [
      '#c8cdd8',
      '#a9afbd',
      '#8b92a3',
      '#3a3f4d',
      '#2a2e3a',
      '#232733',
      '#1d2029',
      '#161920',
      '#0e1015',
      '#0a0c11',
    ],
  },

  fontFamily: "'Mona Sans', 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace: "'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace",
  headings: {
    fontFamily: "'Mona Sans', 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(16), lineHeight: '1.5' },
      h2: { fontSize: rem(15), lineHeight: '1.5' },
      h3: { fontSize: rem(12.5), lineHeight: '1.5', fontWeight: '600' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(14), lg: rem(16), xl: rem(17) },
  lineHeights: { xs: '1.5', sm: '1.5', md: '1.5', lg: '1.5', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(6), md: rem(8), lg: rem(12), xl: rem(14) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24),
    '2xl': rem(28),
  },
  shadows: {
    md: '0 16px 36px -14px rgba(13, 16, 23, 0.32), 0 3px 8px rgba(13, 16, 23, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button, section: classes.buttonSection },
      vars: (_, props) => ({
        root: {
          '--button-height': fromScale(CONTROL_HEIGHTS, props.size),
          '--button-fz': fromScale(BUTTON_FONT_SIZES, props.size),
          '--button-padding-x': fromScale(BUTTON_PADDING, props.size),
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 32 },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: (_, props) => ({
        wrapper: {
          '--input-height': fromScale(CONTROL_HEIGHTS, props.size),
          '--input-fz': sizeKey(props.size) === 'sm' ? 'var(--mantine-font-size-md)' : undefined,
        },
      }),
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.inputLabel },
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg', withBorder: true } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      defaultProps: { variant: 'default', radius: 'sm' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { size: 30, radius: 'xl' },
      classNames: { placeholder: classes.avatarPlaceholder },
    }),

    NavLink: NavLink.extend({
      defaultProps: { variant: 'rail' },
      classNames: {
        root: classes.navLink,
        label: classes.navLinkLabel,
        description: classes.navLinkDescription,
      },
    }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 9, withItemsBorders: false },
      classNames: {
        root: classes.segmented,
        label: classes.segmentedLabel,
        indicator: classes.segmentedIndicator,
      },
    }),

    Switch: Switch.extend({
      defaultProps: { withThumbIndicator: false, labelPosition: 'left' },
      classNames: {
        root: classes.switch,
        body: classes.switchBody,
        label: classes.switchLabel,
        track: classes.switchTrack,
        thumb: classes.switchThumb,
      },
      vars: () => ({
        root: {
          '--switch-height': rem(20),
          '--switch-width': rem(34),
          '--switch-thumb-size': rem(16),
          '--switch-track-label-padding': rem(2),
        },
      }),
    }),

    Progress: Progress.extend({
      defaultProps: { size: 8, radius: 4 },
      classNames: { root: classes.progress },
    }),

    Stat: Stat.extend({
      classNames: {
        root: classes.stat,
        body: classes.statBody,
        label: classes.statLabel,
        value: classes.statValue,
      },
    }),

    Table: Table.extend({
      defaultProps: {
        horizontalSpacing: 12,
        verticalSpacing: 8,
        highlightOnHover: true,
        fz: 'sm',
      },
      classNames: { th: classes.th, td: classes.td, tr: classes.tr },
    }),

    Popover: Popover.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
    }),

    Loader: Loader.extend({ defaultProps: { size: 14 } }),

    CodeHighlight: CodeHighlight.extend({
      defaultProps: { withCopyButton: false, withBorder: false, radius: 0 },
      classNames: { code: classes.code },
      vars: () => ({ codeHighlight: { '--ch-background': 'var(--quarry-code-bg)' } }),
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (resolvedTheme) => {
  const defaults = defaultCssVariablesResolver(resolvedTheme);
  const brandPrimary = resolvedTheme.primaryColor === 'quarry';
  return {
    variables: {
      ...defaults.variables,
      '--quarry-avatar-bg': brandPrimary ? '#f5d0fa' : 'var(--mantine-primary-color-2)',
      '--quarry-avatar-color': brandPrimary ? '#6b0f78' : 'var(--mantine-primary-color-9)',
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-border': 'var(--mantine-color-gray-3)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-border-input': 'var(--mantine-color-gray-4)',
      '--mantine-color-hover': 'var(--mantine-color-gray-2)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-2)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',
      '--mantine-color-track': 'var(--mantine-color-gray-4)',
      '--quarry-surface-2': 'var(--mantine-color-gray-1)',
      '--quarry-ring': 'color-mix(in srgb, var(--mantine-primary-color-filled) 28%, transparent)',
      '--quarry-code-bg': '#14161d',
      '--quarry-code-line': '#262a35',
      '--quarry-series-1': '#2a78d6',
      '--quarry-series-2': '#eb6834',
      '--quarry-grid': '#edf0f4',
      '--quarry-good': '#1a7f4b',
      '--quarry-critical': '#c4352b',
      '--quarry-warning': '#b45309',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f3f4f7',
      '--mantine-color-default-color': '#f3f4f7',
      '--mantine-color-text': 'var(--mantine-color-dark-0)',
      '--mantine-color-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-3)',
      '--mantine-color-border-input': 'var(--mantine-color-dark-3)',
      '--mantine-color-hover': 'var(--mantine-color-dark-5)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-5)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-dimmed': 'var(--mantine-color-dark-2)',
      '--mantine-color-track': 'var(--mantine-color-dark-3)',
      '--mantine-color-quarry-filled': '#c832dc',
      '--mantine-color-quarry-filled-hover': '#d653e7',
      ...(brandPrimary && {
        '--mantine-primary-color-filled': '#c832dc',
        '--mantine-primary-color-filled-hover': '#d653e7',
      }),
      '--mantine-shadow-md': '0 16px 36px -14px rgba(0, 0, 0, 0.75), 0 3px 8px rgba(0, 0, 0, 0.4)',
      '--quarry-surface-2': 'var(--mantine-color-dark-6)',
      '--quarry-ring':
        'color-mix(in srgb, var(--mantine-primary-color-filled-hover) 32%, transparent)',
      '--quarry-code-bg': 'var(--mantine-color-dark-9)',
      '--quarry-code-line': '#1e222c',
      '--quarry-series-1': '#3987e5',
      '--quarry-series-2': '#d95926',
      '--quarry-grid': '#22262f',
      '--quarry-good': '#4cbb7a',
      '--quarry-critical': '#ec6b5f',
      '--quarry-warning': '#e0a03a',
    },
  };
};
