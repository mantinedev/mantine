import {
  Accordion,
  ActionIcon,
  Badge,
  Button,
  Chip,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Input,
  InputWrapper,
  Menu,
  Paper,
  Popover,
  RadioCard,
  RadioIndicator,
  rem,
  Select,
  Switch,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { CalendarHeader, Day, WeekdaysRow } from '@mantine/dates';
import classes from './theme.module.css';

const CONTROL_HEIGHTS: Record<string, number> = { xs: 36, sm: 44 };
const CONTROL_PADDING: Record<string, number> = { xs: 14, sm: 20 };
const CONTROL_FONT_SIZES: Record<string, number> = { xs: 14, sm: 15 };

function controlSize(size: unknown) {
  return typeof size === 'string' ? size : size === undefined ? 'sm' : '';
}

function primaryContrast(variant: unknown, color: unknown) {
  return (variant === undefined || variant === 'filled') && color === undefined
    ? 'var(--mantine-primary-color-contrast)'
    : undefined;
}

export const theme = createTheme({
  primaryColor: 'olive',
  primaryShade: { light: 6, dark: 4 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  white: '#ffffff',
  black: '#16140f',
  disabledOpacity: 0.45,
  colors: {
    olive: [
      '#f3f5e6',
      '#e5eac6',
      '#d0db9b',
      '#b3c45e',
      '#a5b650',
      '#8a9a3c',
      '#6b7a2a',
      '#5b6823',
      '#4a551d',
      '#384117',
    ],
    brass: [
      '#f8f2e6',
      '#eee1c4',
      '#e1cb9b',
      '#d4b578',
      '#c9a764',
      '#b99752',
      '#a8894a',
      '#8d723c',
      '#715b30',
      '#554424',
    ],
    gray: [
      '#f3f2ee',
      '#ebe9e2',
      '#e4e1d9',
      '#dddad1',
      '#c4c0b4',
      '#a9a598',
      '#6f6a5c',
      '#504c42',
      '#3b3830',
      '#16140f',
    ],
    dark: [
      '#cfccc0',
      '#aeab9f',
      '#8a8679',
      '#5d5a50',
      '#423f37',
      '#2e2c26',
      '#24221d',
      '#1b1a16',
      '#12110e',
      '#0b0a08',
    ],
  },

  fontFamily: "'Golos Text', 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "'Instrument Serif', Georgia, 'Times New Roman', serif",
    fontWeight: '400',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(60), lineHeight: '1.02' },
      h2: { fontSize: rem(42), lineHeight: '1.05' },
      h3: { fontSize: rem(26), lineHeight: '1.55' },
    },
  },
  fontSizes: { xs: rem(13), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(20) },
  lineHeights: { xs: '1.45', sm: '1.5', md: '1.55', lg: '1.55', xl: '1.55' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(4), sm: rem(8), md: rem(12), lg: rem(14), xl: rem(999) },
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
    '2xl': rem(40),
    '3xl': rem(48),
    '4xl': rem(88),
  },
  shadows: {
    md: '0 18px 40px -20px rgba(22, 20, 15, 0.45), 0 3px 8px rgba(22, 20, 15, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button },
      vars: (_, props) => {
        const size = controlSize(props.size);
        return {
          root: {
            '--button-height': CONTROL_HEIGHTS[size] ? rem(CONTROL_HEIGHTS[size]) : undefined,
            '--button-padding-x': CONTROL_PADDING[size] ? rem(CONTROL_PADDING[size]) : undefined,
            '--button-fz': CONTROL_FONT_SIZES[size] ? rem(CONTROL_FONT_SIZES[size]) : undefined,
            '--button-color': primaryContrast(props.variant, props.color),
          },
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

    ThemeIcon: ThemeIcon.extend({
      vars: (_, props) => ({
        root: { '--ti-color': primaryContrast(props.variant, props.color) },
      }),
    }),

    Input: Input.extend({
      classNames: { wrapper: classes.inputWrapper, input: classes.input },
      vars: (_, props) => {
        const size = controlSize(props.size);
        return {
          wrapper: {
            '--input-height': size === 'sm' ? rem(44) : size === 'xs' ? rem(38) : undefined,
            '--input-fz':
              size === 'sm'
                ? 'var(--mantine-font-size-md)'
                : size === 'xs'
                  ? 'var(--mantine-font-size-sm)'
                  : undefined,
          },
        };
      },
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.inputLabel, error: classes.inputError },
    }),

    Select: Select.extend({
      defaultProps: { allowDeselect: false, comboboxProps: { shadow: 'md' } },
      classNames: { dropdown: classes.dropdown },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Paper: Paper.extend({ defaultProps: { radius: 'lg', withBorder: true } }),

    RadioCard: RadioCard.extend({
      defaultProps: { radius: 'lg' },
      classNames: { card: classes.radioCard },
    }),

    RadioIndicator: RadioIndicator.extend({
      classNames: { indicator: classes.radioIndicator },
      vars: () => ({
        indicator: { '--radio-icon-color': 'var(--mantine-primary-color-contrast)' },
      }),
    }),

    Chip: Chip.extend({
      defaultProps: { variant: 'outline', icon: null },
      classNames: { root: classes.chip, label: classes.chipLabel, input: classes.chipInput },
    }),

    Switch: Switch.extend({
      defaultProps: { withThumbIndicator: false },
      classNames: { label: classes.switchLabel },
      vars: () => ({
        root: {
          '--switch-height': rem(20),
          '--switch-width': rem(34),
          '--switch-thumb-size': rem(16),
        },
      }),
    }),

    Popover: Popover.extend({
      defaultProps: { shadow: 'md', radius: 'lg' },
      classNames: { dropdown: classes.dropdown },
    }),

    Menu: Menu.extend({
      defaultProps: { shadow: 'md', radius: 'md', width: 220 },
      classNames: { dropdown: classes.menuDropdown, item: classes.menuItem },
    }),

    Badge: Badge.extend({
      defaultProps: { variant: 'default', radius: 'xl' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Day: Day.extend({ classNames: { day: classes.day } }),

    WeekdaysRow: WeekdaysRow.extend({ classNames: { weekday: classes.weekday } }),

    CalendarHeader: CalendarHeader.extend({
      classNames: { calendarHeaderLevel: classes.calendarHeaderLevel },
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
  },
});

export const cssVariablesResolver: CSSVariablesResolver = (theme) => {
  const defaults = defaultCssVariablesResolver(theme);
  const brandPrimary = theme.primaryColor === 'olive';
  return {
    variables: {
      ...defaults.variables,
      '--piano-felt': '#7a2a2a',
    },
    light: {
      ...defaults.light,
      ...(brandPrimary && { '--mantine-primary-color-contrast': 'var(--mantine-color-white)' }),
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-border-strong': 'var(--mantine-color-gray-4)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-track': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-error': '#b0392e',
      '--mantine-color-brass-text': 'var(--mantine-color-brass-6)',
      '--piano-ivory': '#fbfaf6',
      '--piano-ebony': '#1b1913',
      '--piano-ebony-ink': '#f3f2ee',
      '--piano-frame': '#e2e0d9',
    },
    dark: {
      ...defaults.dark,
      ...(brandPrimary && {
        '--mantine-primary-color-contrast': '#141609',
        '--mantine-primary-color-filled-hover': '#b3c45e',
      }),
      '--mantine-color-bright': '#f6f4ed',
      '--mantine-color-default-color': 'var(--mantine-color-bright)',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-4)',
      '--mantine-color-olive-filled-hover': '#b3c45e',
      '--mantine-color-error': '#ec6b5f',
      '--mantine-color-focus-ring': 'var(--mantine-primary-color-4)',
      '--mantine-color-track': 'var(--mantine-color-dark-4)',
      '--mantine-color-brass-text': 'var(--mantine-color-brass-4)',
      '--mantine-shadow-md': '0 18px 40px -20px rgba(0, 0, 0, 0.8), 0 3px 8px rgba(0, 0, 0, 0.4)',
      '--piano-ivory': '#ece9df',
      '--piano-ebony': '#050504',
      '--piano-ebony-ink': '#ece9df',
      '--piano-frame': '#090807',
    },
  };
};
