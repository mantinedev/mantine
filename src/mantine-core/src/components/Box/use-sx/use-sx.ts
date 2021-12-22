import { CSSObject, MantineTheme, useCss, useMantineTheme } from '@mantine/styles';

type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);
export type BoxSx = Sx | Sx[];

function extractSx(sx: Sx, theme: MantineTheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

export function useSx(sx: BoxSx, className: string) {
  const { css, cx } = useCss();
  const theme = useMantineTheme();
  if (Array.isArray(sx)) {
    return cx(
      className,
      sx.map((partial) => css(extractSx(partial, theme)))
    );
  }
  return cx(className, css(extractSx(sx, theme)));
}
