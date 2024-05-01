import { CSSObject } from '@emotion/serialize';
import { MantineTheme, useMantineTheme } from '@mantine/core';
// prettier-ignore
import { useCss } from './use-css';

export function createStyles<
  Key extends string = string,
  Params = void,
  Input extends Record<Key, CSSObject> = Record<Key, CSSObject>,
>(input: ((theme: MantineTheme, params: Params) => Input) | Input) {
  const getCssObject = typeof input === 'function' ? input : () => input;

  return function useStyles(params: Params) {
    const theme = useMantineTheme();
    const cssObject: Record<string, any> = getCssObject(theme, params);
    const { css, cx } = useCss();
    const classes = Object.keys(cssObject).reduce<Record<string, string>>((acc, key) => {
      acc[key] = css(cssObject[key]);
      return acc;
    }, {});

    return { classes, cx, theme };
  };
}
