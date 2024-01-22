import { deepMerge } from '../../utils';
import { MantineThemeOverride } from '../theme.types';

export function mergeThemeOverrides(...overrides: MantineThemeOverride[]): MantineThemeOverride {
  return overrides.reduce((acc, override) => deepMerge(acc, override), {});
}
