export type {
  MantineTheme,
  MantineThemeOverride,
  MantineSize,
  MantineNumberSize,
  DefaultProps,
} from './types';

export { getThemeColor } from './utils/get-theme-color/get-theme-color';
export { getFocusStyles } from './utils/get-focus-styles/get-focus-styles';
export { getFontStyles } from './utils/get-font-styles/get-font-styles';
export { getSizeValue } from './utils/get-size-value/get-size-value';

export { MantineProvider } from './MantineProvider/MantineProvider';
export { useMantineTheme } from './use-mantine-theme/use-mantine-theme';
export { theming } from './MantineProvider/theme-context';
export { DEFAULT_THEME } from './default-theme';
