import {
  ActionIcon,
  Accordion,
  Alert,
  Anchor,
  Avatar,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Drawer,
  DrawerRoot,
  Input,
  Menu,
  NavLink,
  Paper,
  Progress,
  RadioCard,
  RadioGroup,
  RadioIndicator,
  rem,
  Slider,
  Tabs,
  Textarea,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; padding: number }> = {
  xs: { height: 36, padding: 14 },
  sm: { height: 42, padding: 18 },
};

export const theme = createTheme({
  primaryColor: 'oxblood',
  primaryShade: { light: 7, dark: 5 },
  black: '#121619',
  colors: {
    oxblood: [
      '#fcf0f2',
      '#f5d9de',
      '#ebb3bd',
      '#df8c9b',
      '#d06a7d',
      '#c4566a',
      '#a63c4f',
      '#8e2b3a',
      '#7a2230',
      '#5e1925',
    ],
    green: [
      '#e9f6ee',
      '#cdebd8',
      '#a3dbb9',
      '#7ccb9b',
      '#6cc38f',
      '#5cbb83',
      '#3f9a63',
      '#2e7d4f',
      '#256641',
      '#1c4f32',
    ],
    red: [
      '#fdeeec',
      '#fad5d1',
      '#f5aca5',
      '#f18a80',
      '#ee7a6f',
      '#ec6b5f',
      '#cc4a3f',
      '#b3392f',
      '#942e26',
      '#74241e',
    ],
    gray: [
      '#f1f3f4',
      '#eceff1',
      '#e6e9ec',
      '#dde1e4',
      '#c5cbd0',
      '#9aa3a9',
      '#687178',
      '#4a5258',
      '#2a2f33',
      '#121619',
    ],
    dark: [
      '#d3d9dd',
      '#b2bac0',
      '#939ca2',
      '#6b747a',
      '#41484d',
      '#2f3539',
      '#292e31',
      '#1f2326',
      '#16191b',
      '#0e1113',
    ],
  },

  fontFamily: "'Red Hat Text', 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "'Red Hat Display', 'Segoe UI', system-ui, sans-serif",
    fontWeight: '600',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(36), lineHeight: '1.1', fontWeight: '700' },
      h2: { fontSize: rem(22), lineHeight: '1.25' },
      h3: { fontSize: rem(18), lineHeight: '1.3' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(14), md: rem(16), lg: rem(17), xl: rem(19) },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.6', lg: '1.6', xl: '1.6' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(4), sm: rem(8), md: rem(10), lg: rem(14), xl: rem(20) },
  spacing: {
    '2xs': rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    '2xl': rem(48),
  },
  shadows: {
    md: '0 14px 36px -14px rgba(18, 22, 25, 0.3), 0 2px 6px rgba(18, 22, 25, 0.07)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = BUTTON_SIZES[typeof props.size === 'string' ? props.size : 'sm'];
        return {
          root: size
            ? {
                '--button-height': rem(size.height),
                '--button-padding-x': rem(size.padding),
                '--button-fz': 'var(--mantine-font-size-sm)',
              }
            : {},
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 40 },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
    }),

    Textarea: Textarea.extend({
      defaultProps: { resize: 'vertical' },
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'md', withBorder: true } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Anchor: Anchor.extend({ defaultProps: { underline: 'hover' } }),

    Avatar: Avatar.extend({
      defaultProps: { variant: 'default', radius: 'xl' },
      classNames: { placeholder: classes.avatarPlaceholder },
      vars: (_, props) => ({
        root:
          props.variant === 'filled'
            ? props.color
              ? {}
              : {
                  '--avatar-bg': 'var(--mantine-primary-color-filled)',
                  '--avatar-color': 'var(--mantine-primary-color-contrast)',
                }
            : {
                '--avatar-bg': 'var(--mantine-color-hover)',
                '--avatar-color': 'var(--mantine-color-bright)',
                '--avatar-bd': '1px solid transparent',
              },
      }),
    }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl', size: 'sm' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Progress: Progress.extend({
      defaultProps: { size: 8, radius: 4, transitionDuration: 300 },
      classNames: { root: classes.progress },
    }),

    Tabs: Tabs.extend({ classNames: { list: classes.tabsList, tab: classes.tab } }),

    Accordion: Accordion.extend({
      defaultProps: { variant: 'separated', radius: 'md', chevronPosition: 'right' },
      classNames: {
        item: classes.accordionItem,
        control: classes.accordionControl,
        label: classes.accordionLabel,
        chevron: classes.accordionChevron,
        content: classes.accordionContent,
      },
    }),

    NavLink: NavLink.extend({
      defaultProps: { variant: 'rail' },
      classNames: {
        root: classes.navLink,
        label: classes.navLinkLabel,
        section: classes.navLinkSection,
      },
    }),

    Alert: Alert.extend({
      defaultProps: { variant: 'default', radius: 'md' },
      classNames: { root: classes.alert, title: classes.alertTitle, message: classes.alertMessage },
      vars: (_, props) => ({
        root:
          props.variant === 'default' || props.variant === undefined
            ? {
                '--alert-bg': 'var(--cw-surface-sunk)',
                '--alert-bd': '1px solid var(--mantine-color-border)',
                '--alert-padding': `var(--mantine-spacing-md) calc(var(--mantine-spacing-md) + var(--mantine-spacing-2xs))`,
                '--alert-gap': 'var(--mantine-spacing-sm)',
                '--alert-icon-size': rem(32),
                '--alert-fz': 'var(--mantine-font-size-md)',
                '--alert-lh': 'var(--mantine-line-height-md)',
              }
            : {},
      }),
    }),

    RadioGroup: RadioGroup.extend({
      classNames: { label: classes.radioGroupLabel },
    }),

    RadioCard: RadioCard.extend({
      defaultProps: { radius: 'sm' },
      classNames: { card: classes.radioCard },
    }),

    RadioIndicator: RadioIndicator.extend({
      defaultProps: { variant: 'outline' },
      classNames: { indicator: classes.radioIndicator },
      vars: () => ({ indicator: { '--radio-icon-size': rem(10) } }),
    }),

    Slider: Slider.extend({
      defaultProps: { size: 6, thumbSize: 14, label: null },
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'md' },
      classNames: { item: classes.menuItem, dropdown: classes.menuDropdown },
    }),

    Drawer: Drawer.extend({
      classNames: { content: classes.drawerContent, overlay: classes.drawerOverlay },
    }),
    DrawerRoot: DrawerRoot.extend({
      defaultProps: { radius: 0, offset: 0, shadow: 'md' },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--cw-surface-sunk': '#f6f7f8',
      '--cw-player': '#1d2226',
      '--cw-wheel': '#9aa3a9',
      '--cw-wheel-dark': '#6c757b',
      '--cw-clay': '#b9a48f',
      '--cw-clay-dark': '#8f7a66',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f2f5f7',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-oxblood-filled-hover': 'var(--mantine-color-oxblood-4)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-primary-color-4)',
      '--mantine-shadow-md': '0 14px 36px -14px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.35)',
      '--cw-surface-sunk': '#1a1d20',
      '--cw-player': '#0e1113',
      '--cw-wheel': '#59636a',
      '--cw-wheel-dark': '#424b51',
      '--cw-clay': '#8c7966',
      '--cw-clay-dark': '#6d5c4c',
    },
  };
};
