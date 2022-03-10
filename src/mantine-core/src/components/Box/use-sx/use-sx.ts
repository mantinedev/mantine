import {
  CSSObject,
  MantineStyleSystemProps,
  MantineTheme,
  useCss,
  useMantineTheme,
} from '@mantine/styles';
import { getSystemStyles } from './get-system-styles/get-system-styles';

type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);
export type BoxSx = Sx | Sx[];

function extractSx(sx: Sx, theme: MantineTheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

export function useSx(sx: BoxSx, systemProps: MantineStyleSystemProps, className: string) {
  const theme = useMantineTheme();
  const { css, cx } = useCss();

  if (Array.isArray(sx)) {
    return cx(
      className,
      css(getSystemStyles(systemProps, theme)),
      sx.map((partial) => css(extractSx(partial, theme)))
    );
  }

  return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)));
}
