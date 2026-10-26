import {
  ActionIcon,
  Alert,
  Autocomplete,
  Avatar,
  Badge,
  Button,
  type CSSVariablesResolver,
  createTheme,
  defaultCssVariablesResolver,
  Drawer,
  DrawerRoot,
  Input,
  InputWrapper,
  Modal,
  Popover,
  Progress,
  rem,
  SegmentedControl,
  Select,
  Switch,
  Title,
} from '@mantine/core';
import { DatePicker, DatePickerInput } from '@mantine/dates';
import classes from './theme.module.css';

function isPrimaryFilled(props: { variant?: string; color?: unknown }) {
  return (props.variant === undefined || props.variant === 'filled') && props.color === undefined;
}

export const theme = createTheme({
  primaryColor: 'fernhill',
  primaryShade: { light: 6, dark: 5 },
  black: '#17141f',
  white: '#ffffff',
  colors: {
    fernhill: [
      '#f4f0fd',
      '#ece6fb',
      '#dcd1f8',
      '#c9b9f2',
      '#ad98f0',
      '#9c84ea',
      '#7c5fd3',
      '#6a4ec2',
      '#553ca4',
      '#3d2b7a',
    ],
    gray: [
      '#f5f4f8',
      '#f0eef5',
      '#ecebf0',
      '#e3e0eb',
      '#cdc8d9',
      '#a8a2b4',
      '#76707f',
      '#55505f',
      '#34303e',
      '#17141f',
    ],
    dark: [
      '#d9d5e2',
      '#b9b3c5',
      '#9b95a7',
      '#6d6779',
      '#474253',
      '#34303d',
      '#2a2632',
      '#211e28',
      '#18161d',
      '#0e0d12',
    ],
  },
  surfaces: {
    dark: { panel2: 'var(--mantine-color-dark-7)', sunken: 'var(--mantine-color-dark-6)' },
  },

  fontFamily: "'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif",
  headings: {
    fontFamily: "'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif",
    fontWeight: '600',
    sizes: {
      h1: { fontSize: rem(18), lineHeight: '1.2', fontWeight: '700' },
      h2: { fontSize: rem(14), lineHeight: '1.45' },
      h3: { fontSize: rem(13), lineHeight: '1.45' },
    },
  },
  fontSizes: { xs: rem(12), sm: rem(13), md: rem(14), lg: rem(15), xl: rem(18) },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.45', lg: '1.45', xl: '1.3' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'sm',
  radius: { xs: rem(4), sm: rem(6), md: rem(8), lg: rem(12), xl: rem(16) },
  spacing: {
    '3xs': rem(4),
    '2xs': rem(6),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(28),
  },
  shadows: {
    md: '0 4px 12px -4px rgba(23, 20, 31, 0.25)',
    lg: '0 18px 40px -16px rgba(23, 20, 31, 0.32), 0 3px 8px rgba(23, 20, 31, 0.08)',
  },

  components: {
    Button: Button.extend({
      classNames: { root: classes.button, section: classes.buttonSection },
      vars: (_, props) => ({
        root: {
          '--button-fz': props.size === 'xs' ? rem(13) : rem(14),
          '--button-padding-x': props.size === 'xs' ? rem(10) : rem(14),
          '--button-color': isPrimaryFilled(props)
            ? 'var(--mantine-primary-color-contrast)'
            : undefined,
        },
      }),
    }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 'input-sm' },
    }),

    Input: Input.extend({
      classNames: { input: classes.input },
      vars: () => ({ wrapper: { '--input-fz': rem(14) } }),
    }),

    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.inputLabel, description: classes.inputDescription },
    }),

    Select: Select.extend({
      defaultProps: { allowDeselect: false, comboboxProps: { shadow: 'lg' } },
      classNames: { option: classes.option },
    }),

    Autocomplete: Autocomplete.extend({
      defaultProps: { comboboxProps: { shadow: 'lg' } },
      classNames: { option: classes.option },
    }),

    DatePickerInput: DatePickerInput.extend({
      defaultProps: { popoverProps: { shadow: 'lg' } },
    }),

    DatePicker: DatePicker.extend({
      classNames: {
        day: classes.day,
        weekday: classes.weekday,
        calendarHeaderLevel: classes.calendarLevel,
        calendarHeaderControl: classes.calendarControl,
      },
    }),

    Popover: Popover.extend({ defaultProps: { shadow: 'lg', radius: 'md' } }),

    SegmentedControl: SegmentedControl.extend({
      defaultProps: { withItemsBorders: false, radius: 'md' },
      classNames: {
        root: classes.segmented,
        indicator: classes.segmentedIndicator,
        label: classes.segmentedLabel,
      },
    }),

    Switch: Switch.extend({
      defaultProps: { withThumbIndicator: false },
      classNames: { label: classes.switchLabel, track: classes.switchTrack },
      vars: () => ({
        root: {
          '--switch-height': rem(20),
          '--switch-width': rem(34),
          '--switch-thumb-size': rem(16),
          '--switch-label-font-size': rem(14),
        },
      }),
    }),

    Avatar: Avatar.extend({
      defaultProps: { size: 30, radius: '50%' },
      classNames: { root: classes.avatar, placeholder: classes.avatarPlaceholder },
    }),

    Badge: Badge.extend({
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Progress: Progress.extend({
      classNames: { root: classes.progress },
    }),

    Alert: Alert.extend({
      defaultProps: { size: 'sm' },
      classNames: {
        root: classes.alert,
        icon: classes.alertIcon,
        message: classes.alertMessage,
        body: classes.alertBody,
      },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Modal: Modal.extend({
      defaultProps: { radius: 'lg', shadow: 'lg', size: 520 },
      classNames: {
        header: classes.modalHeader,
        title: classes.modalTitle,
        body: classes.modalBody,
      },
    }),

    Drawer: Drawer.extend({
      classNames: { content: classes.drawerContent },
    }),

    DrawerRoot: DrawerRoot.extend({
      defaultProps: { size: 380, shadow: 'lg', position: 'right' },
    }),
  },
});

const STATUS_COLORS = {
  light: {
    '--fh-primary-tint': '#ece6fb',
    '--fh-primary-line': '#c9b9f2',
    '--fh-mint': '#23875f',
    '--fh-mint-tint': '#dcf3e9',
    '--fh-sky': '#24709f',
    '--fh-sky-tint': '#dcecf8',
    '--fh-amber': '#a26a12',
    '--fh-amber-tint': '#fbefd8',
    '--fh-red': '#c93b31',
    '--fh-red-tint': '#fbe3e0',
    '--fh-grey-tint': '#ecebf0',
    '--fh-now': '#e5484d',
    '--fh-overlay': 'rgba(23, 20, 31, 0.36)',
  },
  dark: {
    '--fh-primary-tint': '#2e2746',
    '--fh-primary-line': '#5a4a92',
    '--fh-mint': '#4cc795',
    '--fh-mint-tint': '#1b3229',
    '--fh-sky': '#62aee6',
    '--fh-sky-tint': '#1a2b3b',
    '--fh-amber': '#e0a43c',
    '--fh-amber-tint': '#33291a',
    '--fh-red': '#f0675e',
    '--fh-red-tint': '#3a201f',
    '--fh-grey-tint': '#2b2833',
    '--fh-now': '#ff6b6f',
    '--fh-overlay': 'rgba(0, 0, 0, 0.55)',
  },
};

export const cssVariablesResolver: CSSVariablesResolver = (resolvedTheme) => {
  const defaults = defaultCssVariablesResolver(resolvedTheme);
  return {
    variables: defaults.variables,
    light: {
      ...defaults.light,
      ...STATUS_COLORS.light,
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-dimmed': 'var(--mantine-color-gray-6)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-4)',
      '--mantine-color-border-strong': 'var(--mantine-color-gray-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-1)',
      '--mantine-color-hover': 'var(--mantine-color-gray-1)',
      '--mantine-primary-color-contrast': '#ffffff',
      '--mantine-shadow-lg':
        '0 18px 40px -16px rgba(23, 20, 31, 0.32), 0 3px 8px rgba(23, 20, 31, 0.08)',
    },
    dark: {
      ...defaults.dark,
      ...STATUS_COLORS.dark,
      '--mantine-color-bright': '#f6f4fa',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-border-strong': 'var(--mantine-color-dark-4)',
      '--mantine-color-default-hover': 'var(--mantine-color-dark-6)',
      '--mantine-color-hover': 'var(--mantine-color-dark-6)',
      '--mantine-primary-color-contrast': '#150f26',
      '--mantine-color-fernhill-filled-hover': 'var(--mantine-color-fernhill-4)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-fernhill-4)',
      '--mantine-shadow-md': '0 4px 12px -4px rgba(0, 0, 0, 0.5)',
      '--mantine-shadow-lg': '0 18px 40px -16px rgba(0, 0, 0, 0.7), 0 3px 8px rgba(0, 0, 0, 0.35)',
    },
  };
};
