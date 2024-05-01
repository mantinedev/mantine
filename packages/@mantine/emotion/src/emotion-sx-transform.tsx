import { useMantineTheme } from '@mantine/core';
// prettier-ignore
import { useCss } from './use-css';

export function emotionSxTransform(sx: any) {
  const theme = useMantineTheme();
  const { css } = useCss();
  const parsedSx = typeof sx === 'function' ? sx(theme) : sx;
  return !parsedSx ? '' : css(parsedSx);
}
