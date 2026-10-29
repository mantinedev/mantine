import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Chip,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  Menu,
  Modal,
  Radio,
  rem,
  Tabs,
  Timeline,
  Title,
  Tooltip,
} from '@mantine/core';
import classes from './theme.module.css';

const CONTROL_SIZES: Record<string, { height: number; padding: number }> = {
  xs: { height: 34, padding: 12 },
  sm: { height: 40, padding: 16 },
};

function controlSize(size: unknown) {
  return CONTROL_SIZES[typeof size === 'string' ? size : 'sm'];
}

const SHADOWS_LIGHT = {
  sm: '0 1px 2px rgba(23, 20, 30, 0.06), 0 1px 3px rgba(23, 20, 30, 0.08)',
  md: '0 6px 20px -6px rgba(23, 20, 30, 0.16), 0 2px 5px rgba(23, 20, 30, 0.06)',
  lg: '0 24px 60px -12px rgba(23, 20, 30, 0.35), 0 4px 12px rgba(23, 20, 30, 0.1)',
};

const SHADOWS_DARK = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
  md: '0 8px 24px -8px rgba(0, 0, 0, 0.6), 0 2px 5px rgba(0, 0, 0, 0.3)',
  lg: '0 24px 60px -12px rgba(0, 0, 0, 0.75)',
};

export const theme = createTheme({
  primaryColor: 'plum',
  primaryShade: { light: 6, dark: 5 },
  black: '#17141e',
  colors: {
    plum: [
      '#f8eff5',
      '#efdbe9',
      '#deb6d2',
      '#cc91bb',
      '#b4679f',
      '#a65a92',
      '#7a3b69',
      '#692f59',
      '#55254a',
      '#3f1b37',
    ],
    rust: [
      '#fdeceb',
      '#f9d4d1',
      '#f5b4ad',
      '#f29b92',
      '#ef8478',
      '#ec6b5f',
      '#b8352c',
      '#9c2c25',
      '#7f241e',
      '#5f1b17',
    ],
    sage: [
      '#e8f5ed',
      '#cdeada',
      '#a7d9bb',
      '#86cc9f',
      '#70c390',
      '#5cbb83',
      '#2f7d4f',
      '#286b44',
      '#205738',
      '#18422a',
    ],
    gray: [
      '#f4f3f7',
      '#efeef4',
      '#e9e7ef',
      '#e4e2eb',
      '#cfccda',
      '#a9a4b6',
      '#706b7e',
      '#4f4a5b',
      '#2b2833',
      '#17141e',
    ],
    dark: [
      '#dcd9e3',
      '#b9b5c4',
      '#9b96a9',
      '#6c6779',
      '#46434f',
      '#3b3944',
      '#2d2c35',
      '#24232b',
      '#1b1a20',
      '#131217',
    ],
  },

  surfaces: {
    light: { sunken: '#f8f7fb', muted: '#f8f7fb' },
    dark: {
      sunken: '#201f26',
      muted: '#201f26',
      panel2: 'var(--mantine-color-dark-7)',
    },
  },

  fontFamily: "'Instrument Sans', 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif",
    fontWeight: '500',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(30), lineHeight: '1.1' },
      h2: { fontSize: rem(24), lineHeight: '1.2' },
      h3: { fontSize: rem(17), lineHeight: '1.3' },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(15),
    lg: rem(17),
    xl: rem(20),
  },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.5', xl: '1.4' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(4), sm: rem(6), md: rem(8), lg: rem(12), xl: rem(16) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  shadows: SHADOWS_LIGHT,

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = controlSize(props.size);
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
      defaultProps: { variant: 'default' },
      classNames: { root: classes.actionIcon },
      vars: (_, props) => ({
        root: { '--ai-size': props.size === undefined ? rem(40) : undefined },
      }),
    }),

    Input: Input.extend({
      classNames: { input: classes.input, section: classes.inputSection },
      vars: (_, props) => ({
        wrapper: {
          '--input-height': controlSize(props.size) ? rem(40) : undefined,
          '--input-fz': 'var(--mantine-font-size-md)',
        },
      }),
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.inputLabel,
        description: classes.description,
      },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xl', size: 'lg' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Chip: Chip.extend({
      defaultProps: { variant: 'outline' },
      classNames: { label: classes.chipLabel, iconWrapper: classes.chipIcon },
      vars: () => ({
        root: {
          '--chip-size': rem(30),
          '--chip-padding': rem(12),
          '--chip-checked-padding': rem(12),
        },
      }),
    }),

    Tabs: Tabs.extend({
      defaultProps: { variant: 'contained', radius: 'lg' },
      classNames: {
        list: classes.tabsList,
        tab: classes.tab,
        tabSection: classes.tabSection,
      },
    }),

    Checkbox: Checkbox.extend({
      defaultProps: { radius: 'sm' },
      classNames: {
        input: classes.checkboxInput,
        description: classes.description,
      },
    }),

    Radio: Radio.extend({
      defaultProps: { variant: 'outline' },
      classNames: { radio: classes.radio, label: classes.radioLabel },
      vars: () => ({
        root: {
          '--radio-icon-size': rem(10),
          '--radio-color': 'var(--mantine-primary-color-filled)',
        },
      }),
    }),

    Timeline: Timeline.extend({
      defaultProps: { bulletSize: 14, lineWidth: 2 },
      classNames: {
        item: classes.timelineItem,
        itemBullet: classes.timelineBullet,
        itemBody: classes.timelineBody,
        itemTitle: classes.timelineTitle,
      },
    }),

    Avatar: Avatar.extend({
      defaultProps: { variant: 'default', radius: 'xl' },
      classNames: { placeholder: classes.avatarPlaceholder },
      vars: (_, props) => ({
        root: {
          '--avatar-placeholder-fz': rem(props.size === 26 || props.size === 'sm' ? 11 : 12),
          '--avatar-bg': 'var(--mantine-color-track)',
          '--avatar-color': 'var(--mantine-color-bright)',
          '--avatar-bd': '0',
        },
      }),
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'lg', radius: 'lg', width: 210 },
      classNames: { dropdown: classes.menuDropdown, item: classes.menuItem },
    }),

    Tooltip: Tooltip.extend({
      defaultProps: { radius: 'sm' },
      classNames: { tooltip: classes.tooltip },
    }),

    Modal: Modal.extend({
      defaultProps: { radius: 'xl', shadow: 'lg', size: 460 },
      classNames: {
        header: classes.modalHeader,
        title: classes.modalTitle,
        body: classes.modalBody,
      },
    }),
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      '--mantine-color-error': 'var(--mantine-color-rust-6)',
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-placeholder': 'var(--mantine-color-gray-6)',
      '--mantine-color-track': '#dedbe6',
      '--mantine-shadow-sm': SHADOWS_LIGHT.sm,
      '--mantine-shadow-md': SHADOWS_LIGHT.md,
      '--mantine-shadow-lg': SHADOWS_LIGHT.lg,
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-error': 'var(--mantine-color-rust-5)',
      '--mantine-color-bright': '#f6f4f9',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-border': '#34323d',
      '--mantine-color-placeholder': 'var(--mantine-color-dark-2)',
      '--mantine-color-plum-filled-hover': 'var(--mantine-color-plum-4)',
      '--mantine-shadow-sm': SHADOWS_DARK.sm,
      '--mantine-shadow-md': SHADOWS_DARK.md,
      '--mantine-shadow-lg': SHADOWS_DARK.lg,
    },
  };
};
