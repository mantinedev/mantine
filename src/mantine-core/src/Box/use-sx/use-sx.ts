import {
  MantineStyleSystemProps,
  MantineTheme,
  Sx,
  useCss,
  useMantineTheme,
} from '@mantine/styles';
import { getSystemStyles } from '../style-system-props/get-system-styles/get-system-styles';

function extractSx(sx: Sx, theme: MantineTheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

export function useSx(sx: Sx | Sx[], systemProps: MantineStyleSystemProps, className: string) {
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
