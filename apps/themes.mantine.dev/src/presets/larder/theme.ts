import {
  ActionIcon,
  Breadcrumbs,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  InputWrapper,
  NavLink,
  Overlay,
  Pill,
  rem,
  SegmentedControl,
  Select,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; padding: number; fz: string }> = {
  xs: { height: 30, padding: 10, fz: 'var(--mantine-font-size-sm)' },
  sm: { height: 36, padding: 14, fz: 'var(--mantine-font-size-md)' },
};

export const theme = createTheme({
  primaryColor: 'tomato',
  primaryShade: { light: 6, dark: 4 },
  black: '#000000',
  white: '#ffffff',
  colors: {
    tomato: [
      '#fff0ec',
      '#ffd9d0',
      '#ffb3a3',
      '#ff7259',
      '#ff5c40',
      '#ea4428',
      '#d6361e',
      '#bb2c16',
      '#962210',
      '#701a0c',
    ],
    gray: [
      '#f2f2f0',
      '#e8e8e4',
      '#e2e2de',
      '#dcdcd8',
      '#b9b9b4',
      '#9a9a94',
      '#74746f',
      '#4a4a47',
      '#2a2a28',
      '#1c1c1b',
    ],
    dark: [
      '#d8d8d4',
      '#b9b9b4',
      '#9a9a94',
      '#74746f',
      '#4a4a47',
      '#343432',
      '#272726',
      '#1f1f1e',
      '#171716',
      '#0f0f0e',
    ],
  },

  fontFamily: "'Schibsted Grotesk', 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace: "ui-monospace, 'SF Mono', Menlo, monospace",
  headings: {
    fontFamily: "'Schibsted Grotesk', 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '700',
    sizes: {
      h1: { fontSize: rem(17), lineHeight: '1.3' },
      h2: { fontSize: rem(15), lineHeight: '1.3' },
      h3: { fontSize: rem(14), lineHeight: '1.3' },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(13),
    md: rem(14),
    lg: rem(16),
    xl: rem(18),
  },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.5', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'xs',
  radius: { xs: rem(2), sm: rem(2), md: rem(4), lg: rem(6), xl: rem(10) },
  spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(20), xl: rem(32) },
  shadows: {
    md: '0 18px 40px -16px rgba(0, 0, 0, 0.35)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = BUTTON_SIZES[typeof props.size === 'string' ? props.size : 'sm'];
        const primaryFilled =
          (props.variant === undefined || props.variant === 'filled') && props.color === undefined;
        return {
          root: {
            ...(size && {
              '--button-height': rem(size.height),
              '--button-padding-x': rem(size.padding),
              '--button-fz': size.fz,
            }),
            ...(primaryFilled && {
              '--button-color': 'var(--mantine-primary-color-contrast)',
            }),
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 'input-sm' },
      classNames: { root: classes.actionIcon },
    }),

    Input: Input.extend({
      classNames: { wrapper: classes.inputWrapper, input: classes.input },
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.label },
    }),

    Select: Select.extend({
      defaultProps: { allowDeselect: false, comboboxProps: { shadow: 'md' } },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 'xs', transitionDuration: 0 },
      classNames: {
        root: classes.segmented,
        control: classes.segmentedControl,
        indicator: classes.segmentedIndicator,
        label: classes.segmentedLabel,
      },
    }),

    NavLink: NavLink.extend({
      classNames: { root: classes.navLink },
    }),

    Pill: Pill.extend({
      classNames: { root: classes.pill, remove: classes.pillRemove },
    }),

    Breadcrumbs: Breadcrumbs.extend({
      defaultProps: { separator: '/', separatorMargin: 8 },
      classNames: {
        root: classes.breadcrumbs,
        separator: classes.breadcrumbsSeparator,
      },
    }),

    Overlay: Overlay.extend({
      defaultProps: { color: '#000', backgroundOpacity: 0.35 },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--larder-font-serif': "'Source Serif 4', Georgia, 'Times New Roman', serif",
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--larder-ink': 'var(--mantine-color-gray-9)',
      '--larder-ink-contrast': 'var(--mantine-color-white)',
      '--larder-placeholder': 'var(--mantine-color-gray-1)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-focus-ring': 'var(--mantine-color-tomato-4)',
      '--mantine-primary-color-contrast': '#1a0702',
      '--mantine-color-tomato-filled-hover': 'var(--mantine-color-tomato-3)',
      '--mantine-shadow-md': '0 18px 40px -16px rgba(0, 0, 0, 0.8)',
      '--larder-ink': '#ececea',
      '--larder-ink-contrast': '#121211',
      '--larder-placeholder': '#2b2b29',
    },
  };
};
