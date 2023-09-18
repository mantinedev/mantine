import { CssVariable } from '../../../../Box';
import { filterProps } from '../../../../utils';

export type ResolvedVars = Partial<Record<string, Record<CssVariable, string | undefined>>>;

export function mergeVars(vars: (ResolvedVars | undefined)[]) {
  return vars.reduce<ResolvedVars>((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...filterProps(current[key]!) };
      });
    }

    return acc;
  }, {});
}
