import { CSSObject, useCss } from '../../../tss';
import { MantineTheme } from '../../types';
import { useMantineTheme } from '../../MantineProvider';

interface UseSxClassName {
  sx?: CSSObject | ((theme: MantineTheme) => CSSObject);
  className?: string;
}

export function useSxClassName({ sx, className }: UseSxClassName) {
  const { css, cx } = useCss();
  const theme = useMantineTheme();
  const _sx = typeof sx === 'function' ? sx(theme) : sx;
  return cx(css(_sx), className);
}
