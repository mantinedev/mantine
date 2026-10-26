import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  Paper,
  Popover,
  rem,
  ScrollArea,
  Slider,
  Switch,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 34, sm: 42 };

function controlHeight(size: unknown) {
  const height = CONTROL_HEIGHTS[typeof size === 'string' ? size : 'sm'];
  return height ? rem(height) : undefined;
}

export const theme = createTheme({
  primaryColor: 'ember',
  primaryShade: { light: 7, dark: 5 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  white: '#ffffff',
  black: '#13121e',
  colors: {
    ember: [
      '#fff3eb',
      '#ffe2cf',
      '#ffc9a5',
      '#ffb07c',
      '#ff9d5c',
      '#ff8a3d',
      '#e06a24',
      '#c4521a',
      '#a94515',
      '#7a3210',
    ],
    gray: [
      '#f8f7fb',
      '#f5f4f9',
      '#eeecf4',
      '#e1dee9',
      '#cbc7d8',
      '#a9a6b9',
      '#6a687c',
      '#4d4b5e',
      '#3a3949',
      '#2c2b3b',
    ],
    dark: [
      '#c8cde0',
      '#a8aec6',
      '#8890ab',
      '#5d6584',
      '#353f5f',
      '#252d47',
      '#222a43',
      '#141a2c',
      '#0d1120',
      '#070a13',
    ],
  },
  surfaces: {
    light: {
      page: 'var(--mantine-color-gray-1)',
      panel: 'var(--mantine-color-white)',
      panel2: 'var(--mantine-color-gray-0)',
      input: 'var(--mantine-color-white)',
    },
    dark: {
      page: 'var(--mantine-color-dark-8)',
      panel: 'var(--mantine-color-dark-7)',
      panel2: '#1b2238',
      input: 'var(--mantine-color-dark-7)',
    },
  },

  fontFamily: "'Hanken Grotesk', 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif",
    fontWeight: '700',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(64), lineHeight: '0.98', fontWeight: '800' },
      h2: { fontSize: rem(26), lineHeight: '1.15' },
      h3: { fontSize: rem(20), lineHeight: '1.2' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(20) },
  lineHeights: { xs: '1.5', sm: '1.55', md: '1.55', lg: '1.55', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(8), md: rem(10), lg: rem(12), xl: rem(16) },
  spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(24), xl: rem(40) },
  shadows: {
    md: '0 18px 40px -18px rgba(19, 18, 30, 0.35), 0 2px 6px rgba(19, 18, 30, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => ({
        root: {
          '--button-height': controlHeight(props.size),
          '--button-padding-x': props.size === 'xs' ? rem(12) : rem(18),
          '--button-fz':
            props.size === 'xs' ? 'var(--mantine-font-size-xs)' : 'var(--mantine-font-size-sm)',
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 'input-sm' },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root: {
          '--ai-size': props.size === undefined || props.size === 'input-sm' ? rem(42) : undefined,
        },
      }),
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
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

    Anchor: Anchor.extend({
      defaultProps: { underline: 'always' },
      classNames: { root: classes.anchor },
    }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl', size: 'lg' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { radius: '50%' },
      classNames: { placeholder: classes.avatarPlaceholder },
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'xl', withBorder: true } }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'lg', width: 220 },
      classNames: { dropdown: classes.dropdown, item: classes.menuItem },
    }),

    Popover: Popover.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: { dropdown: classes.dropdown },
    }),

    Switch: Switch.extend({
      defaultProps: { withThumbIndicator: false },
      classNames: {
        track: classes.switchTrack,
        thumb: classes.switchThumb,
        input: classes.switchInput,
        label: classes.switchLabel,
      },
      vars: () => ({
        root: {
          '--switch-height': rem(20),
          '--switch-width': rem(36),
          '--switch-thumb-size': rem(16),
          '--switch-track-label-padding': rem(2),
        },
      }),
    }),

    Slider: Slider.extend({
      defaultProps: { size: 4, thumbSize: 16, label: null },
      classNames: { thumb: classes.sliderThumb },
    }),

    ScrollArea: ScrollArea.extend({ defaultProps: { type: 'auto', scrollbarSize: 8 } }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-9)',
      '--mantine-color-default-color': 'var(--mantine-color-text)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-hover': 'var(--mantine-color-gray-2)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-2)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-track': 'var(--ns-wave)',
      '--mantine-color-anchor': 'var(--mantine-primary-color-filled)',
      '--mantine-color-error': '#c4321d',
      '--mantine-shadow-md':
        '0 18px 40px -18px rgba(19, 18, 30, 0.35), 0 2px 6px rgba(19, 18, 30, 0.08)',
      '--ns-wave': '#d3d0de',
      '--ns-glow': 'rgba(196, 82, 26, 0.1)',
      '--ns-sky': '#23294a',
      '--ns-sky-2': '#2f3760',
      '--ns-brick': '#3b4266',
      '--ns-brick-2': '#4a527a',
      '--ns-star': '#e8e9f3',
      '--ns-mini-shadow': '0 -12px 30px -18px rgba(19, 18, 30, 0.6)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f3f4fa',
      '--mantine-color-default-color': 'var(--mantine-color-text)',
      '--mantine-primary-color-contrast': '#1b0e04',
      '--mantine-color-ember-filled-hover': 'var(--mantine-color-ember-4)',
      '--mantine-color-ember-outline': 'var(--mantine-color-ember-5)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-ember-4)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-track': 'var(--ns-wave)',
      '--mantine-color-anchor': 'var(--mantine-primary-color-filled)',
      '--mantine-color-error': '#ff7b72',
      '--mantine-shadow-md': '0 18px 40px -16px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.35)',
      '--ns-wave': '#39425f',
      '--ns-glow': 'rgba(255, 138, 61, 0.16)',
      '--ns-sky': '#10162a',
      '--ns-sky-2': '#1a2240',
      '--ns-brick': '#2a2f47',
      '--ns-brick-2': '#343a57',
      '--ns-star': '#c8cde0',
      '--ns-mini-shadow': '0 -12px 30px -18px rgba(0, 0, 0, 0.6)',
    },
  };
};
