import {
  Accordion,
  ActionIcon,
  Avatar,
  Badge,
  Button,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Drawer,
  DrawerRoot,
  Menu,
  NavLink,
  Paper,
  Popover,
  rem,
  ScrollArea,
  SegmentedControl,
  Textarea,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

const BUTTON_SIZES: Record<string, { height: number; fz: number; px: number }> = {
  xs: { height: 28, fz: 12.5, px: 10 },
  sm: { height: 34, fz: 13, px: 13 },
};

function buttonSize(size: unknown) {
  return BUTTON_SIZES[typeof size === 'string' ? size : 'sm'];
}

function isFilled(variant: unknown) {
  return variant === undefined || variant === 'filled';
}

export const theme = createTheme({
  primaryColor: 'ink',
  primaryShade: { light: 9, dark: 1 },
  black: '#141517',
  white: '#ffffff',
  colors: {
    ink: [
      '#ffffff',
      '#e9e6df',
      '#cfccc5',
      '#a8a6a1',
      '#7f7e7b',
      '#5d5e5f',
      '#4a4c4f',
      '#424448',
      '#3a3d41',
      '#26282b',
    ],
    brass: [
      '#f8f1e3',
      '#efe0c0',
      '#e5cb93',
      '#e0bb73',
      '#d3a650',
      '#bf9139',
      '#a87b2a',
      '#7c5a1c',
      '#5f4515',
      '#43300f',
    ],
    gray: [
      '#f5f6f6',
      '#eceeef',
      '#e8eaeb',
      '#d5d8da',
      '#c7cbce',
      '#b9bdc1',
      '#6b7075',
      '#4f5357',
      '#34373b',
      '#141517',
    ],
    dark: [
      '#c8cacc',
      '#a9acb0',
      '#8d9196',
      '#5c6065',
      '#42454a',
      '#2e3033',
      '#25272a',
      '#1f2022',
      '#1a1b1d',
      '#131415',
    ],
  },

  surfaces: {
    light: {
      page: '#fcfcfc',
      panel: '#fcfcfc',
      panel2: '#fcfcfc',
      muted: '#f5f6f6',
      sunken: '#eceeef',
      input: '#fcfcfc',
    },
    dark: {
      page: '#1f2022',
      panel: '#1f2022',
      panel2: '#25272a',
      muted: '#1a1b1d',
      sunken: '#25272a',
      input: '#1f2022',
    },
  },

  fontFamily: "Commissioner, 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "'EB Garamond', Garamond, 'Times New Roman', serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: rem(19), lineHeight: '1.2' },
      h2: { fontSize: rem(22), lineHeight: '1.3' },
      h3: { fontSize: rem(18), lineHeight: '1.3' },
      h4: { fontSize: rem(16.5), lineHeight: '1.4' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(12.5), md: rem(14), lg: rem(16), xl: rem(18) },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.55', xl: '1.6' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(4), sm: rem(6), md: rem(10), lg: rem(12), xl: rem(14) },
  spacing: {
    '2xs': rem(4),
    xs: rem(6),
    sm: rem(10),
    md: rem(14),
    lg: rem(18),
    xl: rem(24),
    '2xl': rem(30),
    '3xl': rem(40),
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button, section: classes.buttonSection },
      vars: (_, props) => {
        const size = buttonSize(props.size);
        return {
          root: {
            '--button-height': size ? rem(size.height) : undefined,
            '--button-fz': size ? rem(size.fz) : undefined,
            '--button-padding-x': size ? rem(size.px) : undefined,
            '--button-color': isFilled(props.variant)
              ? 'var(--mantine-primary-color-contrast)'
              : undefined,
          },
        };
      },
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default' },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root: {
          '--ai-size': props.size === undefined ? rem(34) : undefined,
          '--ai-color': isFilled(props.variant)
            ? 'var(--mantine-primary-color-contrast)'
            : props.variant === 'subtle'
              ? 'var(--mantine-color-text)'
              : undefined,
          '--ai-hover':
            props.variant === 'subtle' ? 'var(--mantine-color-default-hover)' : undefined,
        },
      }),
    }),

    Avatar: Avatar.extend({
      defaultProps: { size: 32, radius: '50%' },
      classNames: { placeholder: classes.avatarPlaceholder },
      vars: () => ({
        root: {
          '--avatar-bg': 'var(--mantine-color-hover)',
          '--avatar-color': 'var(--mantine-color-bright)',
          '--avatar-bd': '1px solid var(--mantine-color-border)',
        },
      }),
    }),

    Paper: Paper.extend({ defaultProps: { radius: 'md', withBorder: true } }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      defaultProps: { variant: 'outline', radius: 'xs' },
      classNames: { root: classes.badge, label: classes.badgeLabel, section: classes.badgeSection },
    }),

    Accordion: Accordion.extend({
      defaultProps: { chevronPosition: 'left', chevronSize: 14 },
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
        description: classes.navLinkDescription,
      },
    }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { radius: 8, withItemsBorders: false },
      classNames: { root: classes.segmented, label: classes.segmentedLabel },
      vars: () => ({
        root: {
          '--sc-color': 'var(--mantine-color-surface-panel)',
          '--sc-shadow': '0 1px 2px rgba(0, 0, 0, 0.12)',
        },
      }),
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'md' },
      classNames: {
        dropdown: classes.dropdown,
        item: classes.menuItem,
        itemIndicator: classes.menuItemIndicator,
      },
    }),

    Popover: Popover.extend({
      defaultProps: { shadow: 'md', radius: 'md' },
      classNames: { dropdown: classes.dropdown },
    }),

    Drawer: Drawer.extend({
      classNames: { overlay: classes.drawerOverlay, content: classes.drawerContent },
    }),

    DrawerRoot: DrawerRoot.extend({
      defaultProps: { shadow: 'md' },
    }),

    Textarea: Textarea.extend({
      classNames: { input: classes.textarea },
    }),

    ScrollArea: ScrollArea.extend({
      defaultProps: { scrollbarSize: 8 },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  const brandPrimary = theme.primaryColor === 'ink';
  return {
    variables: {
      ...defaults.variables,
      '--clerk-font-doc': "'EB Garamond', Garamond, 'Times New Roman', serif",
    },
    light: {
      ...defaults.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-border': 'var(--mantine-color-gray-3)',
      '--mantine-color-border-strong': 'var(--mantine-color-gray-5)',
      '--mantine-color-border-input': 'var(--mantine-color-gray-5)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-5)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      ...(brandPrimary && { '--mantine-primary-color-contrast': '#ffffff' }),
      '--mantine-color-focus-ring': 'var(--clerk-brass)',
      '--mantine-shadow-md':
        '0 18px 40px -16px rgba(20, 21, 23, 0.35), 0 2px 6px rgba(20, 21, 23, 0.08)',
      '--clerk-page': 'var(--mantine-color-gray-2)',
      '--clerk-surface': 'var(--mantine-color-gray-0)',
      '--clerk-brass': 'var(--mantine-color-brass-6)',
      '--clerk-brass-ink': 'var(--mantine-color-brass-7)',
      '--clerk-brass-wash': 'rgba(168, 123, 42, 0.18)',
      '--clerk-brass-line': 'rgba(168, 123, 42, 0.55)',
      '--clerk-high': '#b3261e',
      '--clerk-medium': '#9a5b0b',
      '--clerk-low': '#4f6273',
      '--clerk-ins': '#1f6b46',
      '--clerk-ins-wash': 'rgba(31, 107, 70, 0.12)',
      '--clerk-del-wash': 'rgba(179, 38, 30, 0.1)',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f3f2ef',
      '--mantine-color-dimmed': 'var(--mantine-color-dark-2)',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-border': 'var(--mantine-color-dark-5)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-4)',
      '--mantine-color-border-input': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-ink-filled-hover': 'var(--mantine-color-ink-0)',
      ...(brandPrimary && {
        '--mantine-primary-color-filled-hover': 'var(--mantine-color-ink-0)',
        '--mantine-primary-color-contrast': '#18191b',
      }),
      '--mantine-color-focus-ring': 'var(--clerk-brass)',
      '--mantine-shadow-md': '0 18px 40px -16px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.4)',
      '--clerk-page': 'var(--mantine-color-dark-9)',
      '--clerk-surface': 'var(--mantine-color-dark-8)',
      '--clerk-brass': 'var(--mantine-color-brass-4)',
      '--clerk-brass-ink': 'var(--mantine-color-brass-3)',
      '--clerk-brass-wash': 'rgba(211, 166, 80, 0.2)',
      '--clerk-brass-line': 'rgba(211, 166, 80, 0.6)',
      '--clerk-high': '#f07167',
      '--clerk-medium': '#e0a24a',
      '--clerk-low': '#93a7b8',
      '--clerk-ins': '#6fcf97',
      '--clerk-ins-wash': 'rgba(111, 207, 151, 0.14)',
      '--clerk-del-wash': 'rgba(240, 113, 103, 0.14)',
    },
  };
};
