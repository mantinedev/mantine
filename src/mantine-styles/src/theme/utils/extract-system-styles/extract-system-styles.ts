import type { MantineStyleSystemProps } from '../../types';

export function extractSystemStyles<T extends Record<string, any>>(
  others: MantineStyleSystemProps & T
) {
  const { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, ...rest } = others;
  const systemStyles = { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr };

  Object.keys(systemStyles).forEach((key) => {
    if (systemStyles[key] === undefined) {
      delete systemStyles[key];
    }
  });

  return { systemStyles, rest };
}
