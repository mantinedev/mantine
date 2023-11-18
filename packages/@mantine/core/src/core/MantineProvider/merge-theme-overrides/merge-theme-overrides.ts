import { MantineThemeOverride } from '../theme.types';
import { deepMerge } from '../../utils';

export function mergeThemeOverrides(...overrides: MantineThemeOverride[]): MantineThemeOverride {
  return overrides.reduce((acc, override) => deepMerge(acc, override), {});
}
