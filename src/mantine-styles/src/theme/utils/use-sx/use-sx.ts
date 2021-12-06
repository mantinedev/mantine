import { CSSObject, useCss } from '../../../tss';
import { MantineTheme } from '../../types';
import { useMantineTheme } from '../../MantineProvider';

interface UseSx {
  sx?: CSSObject | ((theme: MantineTheme) => CSSObject);
  className?: string;
}

export function useSx({ sx, className }: UseSx) {
  const { css, cx } = useCss();
  const theme = useMantineTheme();
  const _sx = typeof sx === 'function' ? sx(theme) : sx;
  return { sxClassName: cx(css(_sx), className), css, cx, theme };
}
