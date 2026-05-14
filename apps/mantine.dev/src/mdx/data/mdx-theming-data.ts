import { Frontmatter } from '@/types';

export const MDX_THEMING_DATA: Record<string, Frontmatter> = {
  MantineProvider: {
    title: 'MantineProvider',
    slug: '/theming/mantine-provider',
    search: 'Theme context, CSS reset, CSS variables, context classes and styles',
    searchTags: 'MantineProvider, theme provider, cssVariablesResolver, getRootElement',
    hideHeader: true,
  },

  ThemeObject: {
    title: 'Theme object',
    slug: '/theming/theme-object',
    search: 'use-mantine-theme, theme override, MantineTheme',
    searchTags: 'useMantineTheme, mergeThemeOverrides, createTheme, default theme',
    hideHeader: true,
  },

  ColorSchemes: {
    title: 'Color schemes',
    slug: '/theming/color-schemes',
    search: 'use-mantine-color-scheme, color schemes management, data-mantine-color-scheme',
    searchTags:
      'useMantineColorScheme, useComputedColorScheme, use-computed-color-scheme, ColorSchemeScript, MantineColorSchemeManager, lightHidden, darkHidden, dark mode, light mode',
    hideHeader: true,
  },

  Colors: {
    title: 'Colors',
    slug: '/theming/colors',
    search: 'Default colors, primaryColor, primaryShade',
    searchTags:
      'colorsTuple, virtual colors, variantColorResolver, autoContrast, color prop, c prop',
    hideHeader: true,
  },

  ColorFunctions: {
    title: 'Color functions',
    slug: '/styles/color-functions',
    search: 'Functions to manipulate colors, darken, lighten, parse',
    searchTags:
      'darken, lighten, alpha, parseThemeColor, getThemeColor, getGradient, isLightColor, luminance',
    hideHeader: true,
  },

  TypographyTheming: {
    title: 'Typography',
    slug: '/theming/typography',
    search: 'Change fonts, @font-face',
    searchTags: 'font family, font sizes, line heights, headings, h1 h2 h3 h4 h5 h6',
    hideHeader: true,
  },

  DefaultProps: {
    title: 'Default props',
    slug: '/theming/default-props',
    search: 'Default props for components',
    searchTags: 'useProps, use-props, withProps, with-props, theme.components',
    hideHeader: true,
  },

  DefaultTheme: {
    title: 'Default theme',
    slug: '/theming/default-theme',
    hideHeader: true,
  },
};
