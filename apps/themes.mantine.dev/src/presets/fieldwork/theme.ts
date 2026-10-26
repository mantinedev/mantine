import {
  ActionIcon,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  List,
  Modal,
  ModalRoot,
  Paper,
  rem,
  Tabs,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; padding: number; fz: number }> = {
  xs: { height: 36, padding: 14, fz: 14 },
  sm: { height: 38, padding: 14, fz: 14 },
  md: { height: 44, padding: 20, fz: 15 },
  lg: { height: 54, padding: 28, fz: 17 },
};

function isPrimaryFilled(props: { variant?: string; color?: string }) {
  return (props.variant === undefined || props.variant === 'filled') && !props.color;
}

export const theme = createTheme({
  primaryColor: 'pink',
  primaryShade: { light: 6, dark: 4 },
  black: '#0a1e22',
  disabledOpacity: 0.4,
  colors: {
    pink: [
      '#fff0f4',
      '#fde4ec',
      '#ffb3c9',
      '#ff7aa2',
      '#ff5c8d',
      '#e8417a',
      '#d62e64',
      '#bd2556',
      '#9c1d47',
      '#6e1232',
    ],
    teal: [
      '#e6f3f4',
      '#dcecee',
      '#a9e0e1',
      '#79d3d5',
      '#5cc6c9',
      '#1f7f8a',
      '#0b4f5c',
      '#093f4a',
      '#073740',
      '#062226',
    ],
    gray: [
      '#f3f6f6',
      '#e4eaeb',
      '#dbe4e5',
      '#b9c8ca',
      '#9aaeb1',
      '#7d9396',
      '#5d7276',
      '#3d5357',
      '#1f3236',
      '#0a1e22',
    ],
    dark: [
      '#cfe1e3',
      '#a8c1c4',
      '#7f9ea2',
      '#557a80',
      '#2b5f69',
      '#1c4a53',
      '#113b44',
      '#0d323a',
      '#08262c',
      '#041417',
    ],
  },

  fontFamily: "Rubik, 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "Anton, Impact, 'Arial Narrow', sans-serif",
    fontWeight: '400',
    textWrap: 'wrap',
    sizes: {
      h1: { fontSize: rem(168), lineHeight: '0.86' },
      h2: { fontSize: rem(72), lineHeight: '0.95' },
      h3: { fontSize: rem(19), lineHeight: '1.3', fontWeight: '600' },
      h4: { fontSize: rem(14), lineHeight: '1.3', fontWeight: '600' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(14), md: rem(16), lg: rem(17), xl: rem(20) },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.55', lg: '1.5', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(2), sm: rem(4), md: rem(6), lg: rem(8), xl: rem(12) },
  spacing: { xs: rem(8), sm: rem(10), md: rem(16), lg: rem(22), xl: rem(28) },
  shadows: {
    lg: '0 20px 48px -20px rgba(10, 30, 34, 0.45), 0 3px 8px rgba(10, 30, 34, 0.08)',
  },

  components: {
    Button: Button.extend({
      defaultProps: { size: 'md' },
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = BUTTON_SIZES[typeof props.size === 'string' ? props.size : 'md'];
        return {
          root: {
            '--button-height': size ? rem(size.height) : undefined,
            '--button-padding-x': size ? rem(size.padding) : undefined,
            '--button-fz': size ? rem(size.fz) : undefined,
            '--button-color': isPrimaryFilled(props)
              ? 'var(--mantine-primary-color-contrast)'
              : undefined,
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 40 },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root:
          props.variant === 'subtle' && !props.color
            ? {
                '--ai-color': 'var(--mantine-color-bright)',
                '--ai-hover': 'var(--mantine-color-default-hover)',
              }
            : {},
      }),
    }),

    Badge: Badge.extend({
      defaultProps: { radius: 'sm' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
      vars: (_, props) => ({
        root: {
          '--badge-color': isPrimaryFilled(props)
            ? 'var(--mantine-primary-color-contrast)'
            : undefined,
        },
      }),
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: () => ({ wrapper: { '--input-height': rem(44), '--input-fz': rem(16) } }),
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Paper: Paper.extend({ defaultProps: { radius: 'sm' } }),

    Tabs: Tabs.extend({
      classNames: { root: classes.tabs, list: classes.tabsList, tab: classes.tab },
    }),

    List: List.extend({
      defaultProps: { spacing: 6, fz: 'md' },
      classNames: { root: classes.list, item: classes.listItem },
    }),

    ModalRoot: ModalRoot.extend({
      defaultProps: { radius: 'sm', size: rem(560), centered: true, shadow: 'lg' },
    }),

    Modal: Modal.extend({
      defaultProps: { radius: 'sm', size: rem(560), centered: true, shadow: 'lg' },
      classNames: { content: classes.modalContent, overlay: classes.modalOverlay },
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
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-border': 'var(--mantine-color-gray-2)',
      '--mantine-color-border-strong': 'var(--mantine-color-gray-3)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-3)',
      '--fw-teal-ink': '#ffffff',
      '--fw-teal-soft': '#dcecee',
      '--fw-critical': '#b3392f',
      '--fw-overlay': 'rgba(10, 30, 34, 0.55)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-primary-color-contrast': '#2a0612',
      '--mantine-color-bright': '#f2f8f8',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-border': 'var(--mantine-color-dark-5)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-focus-ring': 'var(--mantine-color-pink-4)',
      '--mantine-color-pink-filled-hover': 'var(--mantine-color-pink-3)',
      '--mantine-color-anchor': 'var(--mantine-color-pink-4)',
      '--mantine-shadow-lg': '0 20px 48px -20px rgba(0, 0, 0, 0.8), 0 3px 8px rgba(0, 0, 0, 0.4)',
      '--fw-teal-ink': '#062226',
      '--fw-teal-soft': '#123f47',
      '--fw-critical': '#ec6b5f',
      '--fw-overlay': 'rgba(0, 0, 0, 0.65)',
    },
  };
};
