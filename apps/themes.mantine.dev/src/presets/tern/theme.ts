import { CodeHighlight, CodeHighlightTabs } from '@mantine/code-highlight';
import {
  ActionIcon,
  Alert,
  Badge,
  Breadcrumbs,
  Button,
  Code,
  createTheme,
  type CSSVariablesResolver,
  defaultCssVariablesResolver,
  Drawer,
  Input,
  InputWrapper,
  Kbd,
  NavLink,
  Paper,
  rem,
  Table,
  TableOfContents,
  TableScrollContainer,
  Title,
} from '@mantine/core';
import classes from './theme.module.css';

export const theme = createTheme({
  primaryColor: 'tern',
  primaryShade: { light: 6, dark: 4 },
  autoContrast: true,
  luminanceThreshold: 0.3,
  black: '#0e141c',
  colors: {
    tern: [
      '#f1eeff',
      '#e2dcff',
      '#c9bcff',
      '#ad9bff',
      '#9b86ff',
      '#7a5fec',
      '#5b3fd6',
      '#4c32bd',
      '#3d289a',
      '#2e1f75',
    ],
    gray: [
      '#f4f6f9',
      '#e9edf2',
      '#dfe4ea',
      '#c7cfd9',
      '#a9b3c0',
      '#8a96a6',
      '#667180',
      '#4a5463',
      '#2a3340',
      '#0e141c',
    ],
    dark: [
      '#c9d2dd',
      '#a9b4c2',
      '#8a96a6',
      '#5d6878',
      '#333e4c',
      '#232c38',
      '#1d2632',
      '#131922',
      '#0d1117',
      '#080b10',
    ],
  },

  fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  fontFamilyMonospace: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace",
  headings: {
    fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
    fontWeight: '600',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: rem(34), lineHeight: '1.15', fontWeight: '700' },
      h2: { fontSize: rem(22), lineHeight: '1.25' },
    },
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(15),
    lg: rem(17),
    xl: rem(20),
  },
  lineHeights: { xs: '1.4', sm: '1.5', md: '1.6', lg: '1.6', xl: '1.6' },
  fontWeights: { regular: '400', medium: '500', bold: '600' },

  defaultRadius: 'md',
  radius: { xs: rem(3), sm: rem(4), md: rem(6), lg: rem(8), xl: rem(10) },
  spacing: {
    '2xs': rem(4),
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(28),
    '2xl': rem(40),
    '3xl': rem(48),
  },
  shadows: {
    md: '0 16px 40px -16px rgba(14, 20, 28, 0.35), 0 2px 6px rgba(14, 20, 28, 0.08)',
  },

  components: {
    Button: Button.extend({ classNames: { root: classes.button } }),

    ActionIcon: ActionIcon.extend({
      defaultProps: { variant: 'default', size: 'input-sm' },
    }),

    Input: Input.extend({
      classNames: { input: classes.input, section: classes.inputSection },
    }),
    InputWrapper: InputWrapper.extend({
      classNames: { label: classes.inputLabel },
    }),

    Title: Title.extend({ classNames: { root: classes.title } }),

    Code: Code.extend({ classNames: { root: classes.code } }),
    Kbd: Kbd.extend({ classNames: { root: classes.kbd } }),

    Badge: Badge.extend({
      defaultProps: { radius: 'xs' },
      classNames: { root: classes.badge, label: classes.badgeLabel },
    }),

    Paper: Paper.extend({ defaultProps: { withBorder: true } }),

    Breadcrumbs: Breadcrumbs.extend({
      classNames: {
        root: classes.breadcrumbs,
        separator: classes.breadcrumbsSeparator,
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

    TableOfContents: TableOfContents.extend({
      classNames: { root: classes.toc, control: classes.tocControl },
    }),

    Table: Table.extend({
      defaultProps: { horizontalSpacing: 'sm', fz: 'sm' },
      classNames: { table: classes.table, th: classes.th, td: classes.td },
    }),

    TableScrollContainer: TableScrollContainer.extend({
      defaultProps: {
        scrollAreaProps: { offsetScrollbars: false, scrollbarSize: 6 },
      },
    }),

    Alert: Alert.extend({
      classNames: {
        root: classes.alert,
        wrapper: classes.alertWrapper,
        title: classes.alertTitle,
        message: classes.alertMessage,
      },
    }),

    Drawer: Drawer.extend({ defaultProps: { shadow: 'md' } }),

    CodeHighlight: CodeHighlight.extend({
      defaultProps: { withBorder: true, radius: 'md', codeColorScheme: 'dark' },
      classNames: {
        codeHighlight: classes.codeHighlight,
        code: classes.codeContent,
        controls: classes.codeControls,
      },
    }),

    CodeHighlightTabs: CodeHighlightTabs.extend({
      defaultProps: { codeColorScheme: 'dark' },
      classNames: {
        root: classes.codeTabs,
        codeHighlight: classes.codeTabsHighlight,
        filesScrollarea: classes.codeTabsHead,
        files: classes.codeTabsList,
        file: classes.codeTab,
        fileIcon: classes.codeTabIcon,
        pre: classes.codeTabsPre,
        code: classes.codeContent,
        controls: classes.codeControls,
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
      '--mantine-color-text': 'var(--mantine-color-gray-8)',
      '--mantine-color-border': 'var(--mantine-color-gray-2)',
      '--mantine-color-default-border': 'var(--mantine-color-gray-3)',
      '--mantine-color-border-input': 'var(--mantine-color-gray-3)',
      '--mantine-color-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-default-hover': 'var(--mantine-color-gray-0)',
      '--mantine-color-anchor': 'var(--mantine-color-tern-6)',
      '--tern-subtle': 'var(--mantine-color-gray-0)',
      '--tern-subtle-strong': 'var(--mantine-color-gray-1)',
      '--tern-code-bg': '#0f141d',
      '--tern-code-surface': '#171e2a',
      '--tern-code-border': '#263041',
      '--tern-warn-bg': '#fff6e5',
      '--tern-warn-border': '#f0c46a',
      '--tern-warn-ink': '#6b4500',
      '--tern-good': '#1f7a4d',
      '--tern-critical': '#b8352c',
    },
    dark: {
      ...defaults.dark,
      '--mantine-color-bright': '#f1f5f9',
      '--mantine-color-default-border': 'var(--mantine-color-dark-4)',
      '--mantine-color-hover': '#151c26',
      '--mantine-color-default-hover': '#151c26',
      '--mantine-color-anchor': 'var(--mantine-color-tern-4)',
      '--mantine-color-tern-filled-hover': 'var(--mantine-color-tern-3)',
      '--mantine-primary-color-filled-hover': 'var(--mantine-color-tern-3)',
      '--mantine-primary-color-contrast': '#0d0a1f',
      '--tern-subtle': '#151c26',
      '--tern-subtle-strong': 'var(--mantine-color-dark-6)',
      '--tern-code-bg': '#080b10',
      '--tern-code-surface': '#10151d',
      '--tern-code-border': '#1f2833',
      '--tern-warn-bg': '#2a2110',
      '--tern-warn-border': '#7a5a1c',
      '--tern-warn-ink': '#f3d39a',
      '--tern-good': '#5cbb83',
      '--tern-critical': '#ec6b5f',
    },
  };
};
