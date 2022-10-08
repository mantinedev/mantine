import type { MantineStyleSystemProps } from '../../types';
import { filterProps } from '../filter-props/filter-props';

export function extractSystemStyles<T extends Record<string, any>>(
  others: MantineStyleSystemProps & T
) {
  const { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, ...rest } = others;
  const systemStyles = filterProps({ m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr });

  return { systemStyles, rest };
}
