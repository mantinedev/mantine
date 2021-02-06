/**
 * ts cannot resolve OpenColor without direct import
 * details – https://stackoverflow.com/questions/43335336/error-ts4058-return-type-of-exported-function-has-or-is-using-name-x-from-exter
 * */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type OpenColor from 'open-color';
import { useTheme } from './theme-context';
import { MantineTheme, MantineThemeOverride } from './types';

export function useMantineTheme(themeOverride?: MantineThemeOverride) {
  const theme = useTheme<MantineTheme>();

  if (!theme.__mantine_theme) {
    throw new Error('MantineProvider was not found in tree');
  }

  return { ...theme, ...themeOverride };
}
