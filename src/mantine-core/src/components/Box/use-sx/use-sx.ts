import { CSSObject, MantineMargins, MantineTheme, useCss, useMantineTheme } from '@mantine/styles';
import { getMargins } from './get-margins/get-margins';

type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);
export type BoxSx = Sx | Sx[];

function extractSx(sx: Sx, theme: MantineTheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

export function useSx(sx: BoxSx, margins: MantineMargins, className: string) {
  const theme = useMantineTheme();
  const { css, cx } = useCss();

  if (Array.isArray(sx)) {
    return cx(
      className,
      css(getMargins(margins, theme)),
      sx.map((partial) => css(extractSx(partial, theme)))
    );
  }

  return cx(className, css(extractSx(sx, theme)), css(getMargins(margins, theme)));
}
