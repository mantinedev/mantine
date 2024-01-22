import { deepMerge } from '../../utils';
import { ConvertCSSVariablesInput } from '../convert-css-variables';
import { MantineTheme } from '../theme.types';
import { defaultCssVariablesResolver } from './default-css-variables-resolver';

interface GetMergedVariablesInput {
  theme: MantineTheme;
  generator?: (theme: MantineTheme) => ConvertCSSVariablesInput;
}

export function getMergedVariables({ theme, generator }: GetMergedVariablesInput) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator ? deepMerge(defaultResolver, providerGenerator) : defaultResolver;
}
