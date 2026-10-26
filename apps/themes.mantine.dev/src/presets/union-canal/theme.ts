import {
  Avatar,
  Badge,
  Blockquote,
  Button,
  Checkbox,
  CheckboxCard,
  CheckboxIndicator,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  InputWrapper,
  Paper,
  Progress,
  rem,
  SegmentedControl,
  Select,
  Stat,
  Timeline,
  Title,
  virtualColor,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; px: number; fz: number }> = {
  sm: { height: 38, px: 14, fz: 15 },
  md: { height: 46, px: 20, fz: 16 },
};

export const theme = createTheme({
  primaryColor: 'canal',
  primaryShade: { light: 7, dark: 4 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  white: '#ffffff',
  black: '#0f1b16',
  colors: {
    bottle: [
      '#e8f0ec',
      '#cfe0d8',
      '#a7c6b8',
      '#7ca996',
      '#578e78',
      '#3b725d',
      '#2a5d4a',
      '#1d4a3a',
      '#173d30',
      '#102c22',
    ],
    chrome: [
      '#fdfbe3',
      '#f9f4bd',
      '#f4ec93',
      '#efe46a',
      '#e9dc3c',
      '#d4c21e',
      '#b3a216',
      '#8c7f12',
      '#665c0e',
      '#423c09',
    ],
    canal: virtualColor({ name: 'canal', light: 'bottle', dark: 'chrome' }),
    gray: [
      '#f2f5f4',
      '#e9eeec',
      '#e1e7e4',
      '#dbe2df',
      '#cad3cf',
      '#b9c4bf',
      '#7d8a84',
      '#56635d',
      '#24302b',
      '#0f1b16',
    ],
    dark: [
      '#cbd6d0',
      '#a9b6af',
      '#84928b',
      '#5d6a64',
      '#37483f',
      '#26352e',
      '#1a2721',
      '#15201b',
      '#0d1512',
      '#080d0b',
    ],
  },

  fontFamily: "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "'Rozha One', Georgia, 'Times New Roman', serif",
    fontWeight: '400',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(56), lineHeight: '1.02' },
      h2: { fontSize: rem(40), lineHeight: '1.08' },
      h3: { fontSize: rem(20), lineHeight: '1.55' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(15), md: rem(17), lg: rem(19), xl: rem(22) },
  lineHeights: { xs: '1.45', sm: '1.5', md: '1.55', lg: '1.55', xl: '1.4' },
  fontWeights: { regular: '400', medium: '600', bold: '700' },

  defaultRadius: 'md',
  radius: { xs: rem(3), sm: rem(4), md: rem(6), lg: rem(10), xl: rem(16) },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    '2xl': rem(40),
    '3xl': rem(46),
    '4xl': rem(64),
  },

  components: {
    Button: Button.extend({
      defaultProps: { size: 'md' },
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = BUTTON_SIZES[typeof props.size === 'string' ? props.size : 'md'];
        return {
          root: size
            ? {
                '--button-height': rem(size.height),
                '--button-padding-x': rem(size.px),
                '--button-fz': rem(size.fz),
              }
            : {},
        };
      },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: () => ({ wrapper: { '--input-height': rem(46), '--input-fz': rem(17) } }),
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.inputLabel, error: classes.inputError },
    }),

    Select: Select.extend({ defaultProps: { comboboxProps: { shadow: 'md' } } }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg' } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { withItemsBorders: false, radius: 'md' },
      classNames: {
        root: classes.segmented,
        label: classes.segmentedLabel,
        indicator: classes.segmentedIndicator,
      },
    }),

    Checkbox: Checkbox.extend({
      defaultProps: { radius: 'sm', iconColor: 'var(--mantine-primary-color-contrast)' },
      classNames: {
        input: classes.checkboxInput,
        label: classes.checkboxLabel,
        description: classes.checkboxDescription,
      },
    }),

    CheckboxIndicator: CheckboxIndicator.extend({
      defaultProps: { radius: 'sm', iconColor: 'var(--mantine-primary-color-contrast)' },
      classNames: { indicator: classes.checkboxInput },
    }),

    CheckboxCard: CheckboxCard.extend({
      defaultProps: { radius: 'md' },
      classNames: { card: classes.checkboxCard },
    }),

    Progress: Progress.extend({
      defaultProps: { transitionDuration: 600 },
    }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xs', size: 'lg' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { variant: 'default', radius: '50%', size: 40 },
      classNames: { root: classes.avatar, placeholder: classes.avatarPlaceholder },
      vars: () => ({
        root: {
          '--avatar-bg': 'var(--mantine-color-surface-muted)',
          '--avatar-color': 'var(--mantine-color-bright)',
          '--avatar-bd': '1px solid var(--mantine-color-border)',
        },
      }),
    }),

    Timeline: Timeline.extend({
      defaultProps: { bulletSize: 40, lineWidth: 2 },
      classNames: {
        item: classes.timelineItem,
        itemBullet: classes.timelineBullet,
        itemBody: classes.timelineBody,
        itemTitle: classes.timelineTitle,
        itemContent: classes.timelineContent,
      },
    }),

    Stat: Stat.extend({
      classNames: { label: classes.statLabel, value: classes.statValue },
    }),

    Blockquote: Blockquote.extend({
      classNames: { root: classes.blockquote, cite: classes.blockquoteCite },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (resolvedTheme) => {
  const defaults = defaultCssVariablesResolver(resolvedTheme);
  return {
    variables: {
      ...defaults.variables,
      '--uc-font-slab': "'Zilla Slab', Rockwell, Georgia, serif",
      '--uc-chrome': 'var(--mantine-color-chrome-4)',
      '--uc-chrome-ink': '#1d2a10',
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-5)',
      '--mantine-color-border-input': 'var(--mantine-color-gray-5)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-error': '#b3392f',
      '--mantine-shadow-lg':
        '0 18px 44px -18px rgba(15, 27, 22, 0.5), 0 3px 8px rgba(15, 27, 22, 0.1)',
      '--uc-ground': '#1d4a3a',
      '--uc-ground-ink': '#f4f7f5',
      '--uc-water': '#c9dde4',
      '--uc-funded': '#d4c21e',
      '--uc-need': '#9aa6a1',
      '--uc-good': '#2c7a4e',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f1f5f2',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-border-input': 'var(--mantine-color-dark-4)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-surface-muted': 'var(--mantine-color-dark-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-error': '#ec6b5f',
      '--mantine-color-canal-filled-hover': '#f1e66a',
      '--mantine-color-canal-contrast': 'var(--uc-chrome-ink)',
      '--mantine-primary-color-contrast': 'var(--uc-chrome-ink)',
      '--mantine-shadow-lg': '0 18px 44px -18px rgba(0, 0, 0, 0.8), 0 3px 8px rgba(0, 0, 0, 0.4)',
      '--uc-ground': '#12302a',
      '--uc-ground-ink': '#eef3f0',
      '--uc-water': '#1e3a44',
      '--uc-funded': '#c9b81c',
      '--uc-need': '#5d6a64',
      '--uc-good': '#5cbb83',
    },
  };
};
