import { createTheme } from './create-theme/create-theme';
import { V9_DEFAULT_COLORS } from './default-colors.v9';

/**
 * A theme preset that restores Mantine v9 color defaults.
 *
 * Use together with `v9CssVariablesResolver` on `MantineProvider` to opt back into the
 * full v9 appearance after upgrading to v10:
 *
 * ```tsx
 * import { MantineProvider } from '@mantine/core';
 * import { v9Theme, v9CssVariablesResolver } from '@mantine/core';
 *
 * <MantineProvider theme={v9Theme} cssVariablesResolver={v9CssVariablesResolver}>
 *   {children}
 * </MantineProvider>
 * ```
 *
 * `cssVariablesResolver` is a `MantineProvider` prop, not a theme field — both parts are
 * required for a complete v9 compatibility layer.
 */
export const v9Theme = createTheme({
  colors: V9_DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  autoContrast: false,
});
