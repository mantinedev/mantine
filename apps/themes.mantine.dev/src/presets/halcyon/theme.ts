import {
  Accordion,
  ActionIcon,
  Button,
  Card,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Drawer,
  DrawerRoot,
  Indicator,
  Progress,
  Rating,
  rem,
  Slider,
  Table,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; px: number; fz: number }> = {
  sm: { height: 40, px: 18, fz: 15 },
  md: { height: 48, px: 26, fz: 16 },
};

export const theme = createTheme({
  primaryColor: 'ink',
  primaryShade: { light: 9, dark: 0 },
  white: '#ffffff',
  black: '#151412',
  colors: {
    ink: [
      '#f5f4f1',
      '#dedcd7',
      '#bcb8b1',
      '#9a958d',
      '#78746d',
      '#5e5a54',
      '#4a4743',
      '#3d3a36',
      '#34322f',
      '#1c1b19',
    ],
    ember: [
      '#fff3e4',
      '#ffe3bd',
      '#ffd9a6',
      '#f9bb7c',
      '#f5a862',
      '#f29a4a',
      '#d9772f',
      '#b8492a',
      '#8f3720',
      '#682816',
    ],
    gray: [
      '#fafaf9',
      '#f3f2f0',
      '#ecebe8',
      '#e2e0dc',
      '#c9c6c0',
      '#a8a49d',
      '#78746d',
      '#57544f',
      '#3a3835',
      '#151412',
    ],
    dark: [
      '#cfccc6',
      '#a9a59e',
      '#827e77',
      '#5e5b56',
      '#42403c',
      '#2e2d2a',
      '#252422',
      '#1e1d1b',
      '#131312',
      '#0b0b0a',
    ],
  },

  fontFamily: "Urbanist, 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "Urbanist, 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '300',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(54), lineHeight: '1.04' },
      h2: { fontSize: rem(42), lineHeight: '1.1' },
      h3: { fontSize: rem(21), lineHeight: '1.3', fontWeight: '500' },
      h4: { fontSize: rem(18), lineHeight: '1.35', fontWeight: '600' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(21) },
  lineHeights: { xs: '1.5', sm: '1.55', md: '1.6', lg: '1.6', xl: '1.5' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(8), md: rem(14), lg: rem(20), xl: rem(32) },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(20),
    lg: rem(28),
    xl: rem(48),
    '2xl': rem(56),
    '3xl': rem(96),
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    xl: '0 24px 60px -24px rgba(21, 20, 18, 0.35), 0 4px 12px rgba(21, 20, 18, 0.06)',
  },

  components: {
    Button: Button.extend({
      defaultProps: { size: 'md', radius: 'xl' },
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = typeof props.size === 'string' ? BUTTON_SIZES[props.size] : undefined;
        const primaryFilled =
          (props.variant === undefined || props.variant === 'filled') && props.color === undefined;
        return {
          root: {
            ...(size
              ? {
                  '--button-height': rem(size.height),
                  '--button-padding-x': rem(size.px),
                  '--button-fz': rem(size.fz),
                }
              : {}),
            ...(primaryFilled ? { '--button-color': 'var(--mantine-primary-color-contrast)' } : {}),
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 42, radius: 'xl' },
      classNames: { root: classes.actionIcon },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Card: Card.extend({
      defaultProps: { radius: 'lg', withBorder: true, padding: 'lg' },
    }),

    Indicator: Indicator.extend({
      defaultProps: { size: 20, offset: 4 },
      classNames: { indicator: classes.indicator },
    }),

    Slider: Slider.extend({
      defaultProps: { size: 6, thumbSize: 24, label: null },
      classNames: { thumb: classes.sliderThumb, track: classes.sliderTrack },
    }),

    Rating: Rating.extend({
      defaultProps: { size: 15, readOnly: true, color: 'var(--mantine-color-bright)' },
      classNames: {
        root: classes.rating,
        starSymbol: classes.ratingStar,
        symbolGroup: classes.ratingGroup,
      },
    }),

    Progress: Progress.extend({
      defaultProps: { size: 6, color: 'var(--mantine-color-bright)' },
    }),

    Table: Table.extend({
      defaultProps: {
        horizontalSpacing: 'calc(var(--mantine-spacing-md) * 1.1)',
        verticalSpacing: 'calc(var(--mantine-spacing-md) * 0.8)',
        fz: 'md',
      },
      classNames: { th: classes.th, td: classes.td },
    }),

    Accordion: Accordion.extend({
      defaultProps: { chevronSize: 20 },
      classNames: {
        item: classes.accordionItem,
        control: classes.accordionControl,
        label: classes.accordionLabel,
        chevron: classes.accordionChevron,
        content: classes.accordionContent,
      },
    }),

    Drawer: Drawer.extend({
      classNames: {
        content: classes.drawerContent,
        header: classes.drawerHeader,
        title: classes.drawerTitle,
        body: classes.drawerBody,
        overlay: classes.drawerOverlay,
      },
    }),

    DrawerRoot: DrawerRoot.extend({
      defaultProps: { position: 'right', size: 400, shadow: 'xl' },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: {
      ...defaults.variables,
      '--hc-glow-core': '#ffd9a6',
      '--hc-glow-edge': '#f29a4a',
      '--hc-accent': 'var(--mantine-color-ember-5)',
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-border': 'var(--mantine-color-gray-3)',
      '--mantine-color-default': 'transparent',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-track': '#d6d3ce',
      '--mantine-color-focus-ring': 'var(--mantine-color-bright)',
      '--mantine-primary-color-contrast': 'var(--mantine-color-white)',
      '--hc-page': 'var(--mantine-color-gray-0)',
      '--hc-surface': 'var(--mantine-color-white)',
      '--hc-surface-2': 'var(--mantine-color-gray-1)',
      '--hc-stage': 'var(--mantine-color-gray-2)',
      '--hc-globe-off': '#e4e2de',
      '--hc-globe-edge': '#d3d0ca',
      '--hc-good': '#2f7a4d',
      '--hc-bad': '#9c3b30',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': 'var(--mantine-color-ink-0)',
      '--mantine-color-text': 'var(--mantine-color-dark-0)',
      '--mantine-color-border': 'var(--mantine-color-dark-5)',
      '--mantine-color-default': 'transparent',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-track': '#3a3835',
      '--mantine-color-focus-ring': 'var(--mantine-color-bright)',
      '--mantine-primary-color-contrast': 'var(--mantine-color-black)',
      '--mantine-shadow-xl': '0 24px 60px -24px rgba(0, 0, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.4)',
      '--hc-page': 'var(--mantine-color-dark-8)',
      '--hc-surface': 'var(--mantine-color-dark-7)',
      '--hc-surface-2': 'var(--mantine-color-dark-6)',
      '--hc-stage': '#1b1a19',
      '--hc-globe-off': '#34322f',
      '--hc-globe-edge': '#2a2927',
      '--hc-good': '#6cc08e',
      '--hc-bad': '#e2786b',
    },
  };
};
