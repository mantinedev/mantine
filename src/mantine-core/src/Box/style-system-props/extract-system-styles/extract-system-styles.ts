import { MantineStyleSystemProps, filterProps } from '@mantine/styles';

export function extractSystemStyles<T extends Record<string, any>>(
  others: MantineStyleSystemProps & T
) {
  const { m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, bg, c, ...rest } = others;
  const systemStyles = filterProps({ m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, bg, c });

  return { systemStyles, rest };
}
