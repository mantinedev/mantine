import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  CheckboxIndicator,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  Paper,
  rem,
  Text,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; px: number; fz: number }> = {
  xs: { height: 30, px: 10, fz: 13 },
  sm: { height: 36, px: 14, fz: 14 },
};

const INPUT_HEIGHTS: Record<string, number> = { xs: 34, sm: 38 };

function sizeKey(size: unknown) {
  return typeof size === 'string' ? size : 'sm';
}

export const TONES = {
  sky: { light: ['#d6e9ff', '#0b4f99'], dark: ['#17375c', '#bcdcff'] },
  coral: { light: ['#ffe1db', '#9c2b18'], dark: ['#4a2620', '#ffcabf'] },
  green: { light: ['#dcf3e8', '#135f3c'], dark: ['#143b2b', '#b7ecd3'] },
  violet: { light: ['#efe3ff', '#5b2d99'], dark: ['#33245a', '#ddc9ff'] },
  yellow: { light: ['#fff1c9', '#7a5300'], dark: ['#43361a', '#ffe2a0'] },
  cyan: { light: ['#dff4f7', '#0d5d68'], dark: ['#12393f', '#bdeef4'] },
} as const;

export type Tone = keyof typeof TONES;

function isTone(color: unknown): color is Tone {
  return typeof color === 'string' && color in TONES;
}

export const theme = createTheme({
  primaryColor: 'sky',
  primaryShade: { light: 6, dark: 5 },
  black: '#0d1724',
  colors: {
    sky: [
      '#e8f3ff',
      '#d6e9ff',
      '#aed3ff',
      '#84bdff',
      '#66b2ff',
      '#4aa3ff',
      '#1f8fff',
      '#0c7cea',
      '#0b62bb',
      '#0b4f99',
    ],
    coral: [
      '#fff0ed',
      '#ffe1db',
      '#ffc4b8',
      '#ffa596',
      '#ff8a78',
      '#ff6f59',
      '#f04f37',
      '#c93a24',
      '#9c2b18',
      '#6e1d10',
    ],
    gray: [
      '#f1f5f9',
      '#e6ecf3',
      '#e2e8ef',
      '#dde4ec',
      '#c3cdd9',
      '#9aa8b8',
      '#6b7a8c',
      '#4a5768',
      '#2b3644',
      '#0d1724',
    ],
    dark: [
      '#c4d1df',
      '#9aabbd',
      '#7a8ca0',
      '#50657d',
      '#2c4259',
      '#1d2f44',
      '#16263a',
      '#0f1c2b',
      '#0b1724',
      '#0a1420',
    ],
  },
  surfaces: {
    light: {
      page: '#ffffff',
      panel: '#ffffff',
      sunken: 'var(--mantine-color-gray-0)',
      muted: 'var(--mantine-color-gray-0)',
      input: '#ffffff',
    },
    dark: {
      page: 'var(--mantine-color-dark-7)',
      panel: 'var(--mantine-color-dark-7)',
      panel2: 'var(--mantine-color-dark-6)',
      sunken: 'var(--mantine-color-dark-8)',
      muted: 'var(--mantine-color-dark-8)',
      input: 'var(--mantine-color-dark-7)',
    },
  },

  fontFamily: "Manrope, 'Segoe UI', Arial, sans-serif",
  headings: {
    fontFamily: "Gabarito, 'Trebuchet MS', Arial, sans-serif",
    fontWeight: '800',
    sizes: {
      h1: { fontSize: rem(24), lineHeight: '1.2' },
      h2: { fontSize: rem(18), lineHeight: '1.2' },
      h3: { fontSize: rem(13), lineHeight: '1.4', fontWeight: '700' },
      h4: { fontSize: rem(16), lineHeight: '1.25', fontWeight: '700' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(15), lg: rem(16), xl: rem(18) },
  lineHeights: { xs: '1.45', sm: '1.45', md: '1.5', lg: '1.5', xl: '1.4' },
  fontWeights: { regular: '400', medium: '600', bold: '700' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(6), md: rem(10), lg: rem(16), xl: rem(18) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(10),
    md: rem(16),
    lg: rem(20),
    xl: rem(28),
  },
  shadows: {
    md: '0 18px 40px -16px rgba(13, 23, 36, 0.32), 0 2px 6px rgba(13, 23, 36, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = BUTTON_SIZES[sizeKey(props.size)];
        return {
          root: {
            '--button-height': size ? rem(size.height) : undefined,
            '--button-padding-x': size ? rem(size.px) : undefined,
            '--button-fz': size ? rem(size.fz) : undefined,
            '--button-color':
              props.variant === undefined || props.variant === 'filled'
                ? 'var(--mantine-primary-color-contrast)'
                : undefined,
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'subtle', size: 38 },
      vars: (_, props) => {
        const variant = props.variant ?? 'subtle';
        if (variant === 'subtle') {
          return {
            root: {
              '--ai-color': 'var(--mantine-color-bright)',
              '--ai-hover': 'var(--mantine-color-hover-strong)',
              '--ai-hover-color': 'var(--mantine-color-bright)',
            },
          };
        }
        if (variant === 'default') {
          return { root: { '--ai-color': 'var(--mantine-color-bright)' } };
        }
        if (variant === 'filled') {
          return { root: { '--ai-color': 'var(--mantine-primary-color-contrast)' } };
        }
        return { root: {} };
      },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { wrapper: classes.inputWrapper },
      vars: (_, props) => {
        const height = INPUT_HEIGHTS[sizeKey(props.size)];
        return {
          wrapper: {
            '--input-height': height ? rem(height) : undefined,
            '--input-fz': 'var(--mantine-font-size-md)',
          },
        };
      },
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg', withBorder: true } }),
    Card: Card.extend({
      defaultProps: { radius: 'lg', withBorder: true, padding: 'md' },
      classNames: { root: classes.card },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),
    Text: Text.extend({ classNames: { root: classes.text } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl', size: 'lg' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Avatar: Avatar.extend({
      defaultProps: { radius: 'xl' },
      classNames: { root: classes.avatar, placeholder: classes.avatarPlaceholder },
      vars: (_, props) =>
        isTone(props.color)
          ? {
              root: {
                '--avatar-bg': `light-dark(${TONES[props.color].light[0]}, ${TONES[props.color].dark[0]})`,
                '--avatar-color': `light-dark(${TONES[props.color].light[1]}, ${TONES[props.color].dark[1]})`,
                '--avatar-bd': '0',
              },
            }
          : { root: {} },
    }),

    Checkbox: Checkbox.extend({
      defaultProps: { radius: 'sm' },
      classNames: { input: classes.checkboxInput },
    }),
    CheckboxIndicator: CheckboxIndicator.extend({
      classNames: { indicator: classes.checkboxInput },
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'lg', width: 240 },
      classNames: {
        dropdown: classes.menuDropdown,
        item: classes.menuItem,
        itemSection: classes.menuItemSection,
        itemLabel: classes.menuItemLabel,
        itemDescription: classes.menuItemDescription,
      },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--roundabout-coral':
        'light-dark(var(--mantine-color-coral-5), var(--mantine-color-coral-4))',
    },
    light: {
      ...defaults.light,
      '--mantine-primary-color-contrast': '#ffffff',
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-border-strong': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-hover-strong': 'var(--mantine-color-gray-1)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-primary-color-contrast': '#04121f',
      '--mantine-color-sky-filled-hover': 'var(--mantine-color-sky-4)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-sky-4)',
      '--mantine-color-bright': '#f1f6fb',
      '--mantine-color-default-color': '#f1f6fb',
      '--mantine-color-text': 'var(--mantine-color-dark-0)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-border': 'var(--mantine-color-dark-5)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-4)',
      '--mantine-color-border-input': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-8)',
      '--mantine-color-hover': 'var(--mantine-color-dark-8)',
      '--mantine-color-hover-strong': 'var(--mantine-color-dark-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-shadow-md': '0 18px 40px -16px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.4)',
    },
  };
};
