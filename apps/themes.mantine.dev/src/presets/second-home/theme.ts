import {
  ActionIcon,
  Alert,
  Avatar,
  Badge,
  Button,
  Chip,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  Modal,
  Paper,
  RadioCard,
  RadioIndicator,
  rem,
  Tabs,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; px: number; fz: number }> = {
  xs: { height: 34, px: 12, fz: 13 },
  sm: { height: 40, px: 16, fz: 14 },
  'compact-sm': { height: 30, px: 12, fz: 13 },
};

function buttonSize(size: unknown) {
  return BUTTON_SIZES[typeof size === 'string' ? size : 'sm'];
}

function isFilled(variant: string | undefined) {
  return variant === undefined || variant === 'filled';
}

function filledContrast(props: { variant?: string; color?: string }) {
  if (!isFilled(props.variant)) {
    return undefined;
  }
  if (!props.color) {
    return 'var(--mantine-primary-color-contrast)';
  }
  if (props.color === 'green') {
    return 'var(--mantine-color-green-contrast)';
  }
  return undefined;
}

export const theme = createTheme({
  primaryColor: 'clay',
  primaryShade: { light: 6, dark: 4 },
  black: '#161915',
  colors: {
    clay: [
      '#fbf1ea',
      '#f5dfd0',
      '#ecc2a6',
      '#e49a6f',
      '#da8a5c',
      '#b9663a',
      '#9a4f26',
      '#84421f',
      '#6b3519',
      '#4f2712',
    ],
    green: [
      '#e8f5ec',
      '#c9e8d3',
      '#9fd6b1',
      '#7cc993',
      '#5dbb7c',
      '#46a064',
      '#2f7d4a',
      '#28693e',
      '#1f5431',
      '#153a22',
    ],
    red: [
      '#fdecea',
      '#f9d0cc',
      '#f3a8a1',
      '#ef877e',
      '#ec6b5f',
      '#d24c40',
      '#b3372c',
      '#982e25',
      '#7a251e',
      '#561a15',
    ],
    gray: [
      '#f6f6f4',
      '#ebefe9',
      '#e2e5e0',
      '#dde4db',
      '#c8cec5',
      '#a3aaa0',
      '#70776d',
      '#4d534a',
      '#2d312c',
      '#161915',
    ],
    dark: [
      '#d5dad3',
      '#b2b8af',
      '#8d948a',
      '#666d63',
      '#434a41',
      '#2f352e',
      '#252a24',
      '#1c1f1b',
      '#141613',
      '#0b0c0b',
    ],
  },

  fontFamily: "Lexend, 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "Lexend, 'Segoe UI', system-ui, sans-serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: rem(22), lineHeight: '1.5' },
      h2: { fontSize: rem(20), lineHeight: '1.3' },
      h3: { fontSize: rem(15), lineHeight: '1.4' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(15), lg: rem(17), xl: rem(22) },
  lineHeights: { xs: '1.45', sm: '1.45', md: '1.5', lg: '1.4', xl: '1.3' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(6), sm: rem(8), md: rem(10), lg: rem(16), xl: rem(20) },
  spacing: {
    '2xs': rem(4),
    xs: rem(6),
    sm: rem(10),
    md: rem(14),
    lg: rem(18),
    xl: rem(20),
  },
  shadows: {
    md: '0 18px 40px -18px rgba(22, 25, 21, 0.4), 0 3px 8px rgba(22, 25, 21, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = buttonSize(props.size);
        return {
          root: {
            '--button-height': size ? rem(size.height) : undefined,
            '--button-padding-x': size ? rem(size.px) : undefined,
            '--button-fz': size ? rem(size.fz) : undefined,
            '--button-color': filledContrast(props),
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 40 },
      vars: (_, props) => ({
        root: {
          '--ai-color': isFilled(props.variant) ? filledContrast(props) : undefined,
          '--ai-hover':
            props.variant === 'subtle' && !props.color ? 'var(--mantine-color-hover)' : undefined,
          '--ai-hover-color':
            props.variant === 'subtle' && !props.color ? 'var(--mantine-color-bright)' : undefined,
        },
      }),
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: (_, props) => ({
        wrapper: {
          '--input-height': props.size === undefined || props.size === 'sm' ? rem(40) : undefined,
        },
      }),
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg' } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Tabs: Tabs.extend({
      defaultProps: { variant: 'pills', radius: 1000 },
      classNames: { list: classes.tabsList, tab: classes.tab },
      vars: () => ({
        root: {
          '--tabs-color': 'var(--mantine-color-bright)',
          '--tabs-text-color': 'var(--mantine-color-body)',
        },
      }),
    }),

    Chip: Chip.extend({
      defaultProps: { variant: 'outline', size: 'sm' },
      classNames: { label: classes.chipLabel, iconWrapper: classes.chipIcon },
      vars: () => ({
        root: {
          '--chip-size': rem(30),
          '--chip-padding': rem(12),
          '--chip-checked-padding': rem(12),
          '--chip-fz': rem(13),
          '--chip-bg': 'var(--mantine-color-bright)',
          '--chip-hover': 'var(--mantine-color-bright)',
          '--chip-color': 'var(--mantine-color-body)',
          '--chip-bd': '1px solid var(--mantine-color-bright)',
        },
      }),
    }),

    Badge: Badge.extend({
      classNames: { root: classes.badge, label: classes.badgeLabel },
      vars: (_, props) => ({
        root: {
          '--badge-color':
            isFilled(props.variant) && !props.color
              ? 'var(--mantine-primary-color-contrast)'
              : undefined,
        },
      }),
    }),

    Avatar: Avatar.extend({
      defaultProps: { radius: 1000, size: 40 },
      classNames: { root: classes.avatar },
      vars: (_, props) => ({
        root: {
          '--avatar-placeholder-fz':
            props.size === undefined || props.size === 40 ? rem(14) : undefined,
          '--avatar-bg': 'light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-5))',
          '--avatar-color': 'var(--mantine-color-bright)',
        },
      }),
    }),

    Alert: Alert.extend({
      classNames: { closeButton: classes.alertClose, message: classes.alertMessage },
      vars: () => ({
        root: {
          '--alert-bg': 'var(--mantine-color-hover)',
          '--alert-bd': '0',
          '--alert-color': 'var(--mantine-color-text)',
          '--alert-title-color': 'var(--mantine-color-bright)',
          '--alert-icon-color': 'var(--mantine-color-green-filled)',
          '--alert-radius': 'var(--mantine-radius-lg)',
          '--alert-padding': 'calc(var(--mantine-spacing-sm) * 1.2) var(--mantine-spacing-md)',
          '--alert-close-size': rem(30),
        },
      }),
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', width: 220, position: 'bottom-end' },
      classNames: { dropdown: classes.menuDropdown, item: classes.menuItem },
    }),

    Modal: Modal.extend({
      defaultProps: { radius: 'xl', padding: 'xl', size: 420, centered: true },
      classNames: { title: classes.modalTitle, overlay: classes.modalOverlay },
    }),

    RadioCard: RadioCard.extend({
      defaultProps: { radius: 12 },
      classNames: { card: classes.radioCard },
    }),

    RadioIndicator: RadioIndicator.extend({
      defaultProps: { variant: 'outline', size: 18 },
      classNames: { indicator: classes.radioIndicator },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-primary-color-contrast': '#ffffff',
      '--mantine-color-green-contrast': '#ffffff',
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-border': 'var(--mantine-color-gray-2)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-primary-color-contrast': '#1e0f06',
      '--mantine-color-green-contrast': '#08210f',
      '--mantine-color-bright': '#f4f6f2',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-clay-filled-hover': 'var(--mantine-color-clay-3)',
      '--mantine-shadow-md': '0 18px 40px -18px rgba(0, 0, 0, 0.8), 0 3px 8px rgba(0, 0, 0, 0.35)',
    },
  };
};
