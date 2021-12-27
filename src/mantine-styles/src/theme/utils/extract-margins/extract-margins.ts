import type { MantineMargins } from '../../types';

export function extractMargins(others: MantineMargins & { [key: string]: any }) {
  const { m, mx, my, mt, mb, ml, mr, ...rest } = others;
  const margins = { m, mx, my, mt, mb, ml, mr };

  Object.keys(margins).forEach((key) => {
    if (margins[key] === undefined) {
      delete margins[key];
    }
  });

  return { margins, rest };
}
