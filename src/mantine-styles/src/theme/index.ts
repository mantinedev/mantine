export * from './types';
export * from './utils';

export { DEFAULT_THEME, MANTINE_COLORS, MANTINE_SIZES } from './default-theme';

export { MantineProvider, useMantineTheme, useComponentDefaultProps } from './MantineProvider';
export { ColorSchemeProvider, useMantineColorScheme } from './ColorSchemeProvider';
export { GlobalStyles } from './GlobalStyles';
export { NormalizeCSS } from './NormalizeCSS';

export { getBreakpointValue } from './functions/fns/breakpoints/breakpoints';

export type { MantineProviderProps } from './MantineProvider';
