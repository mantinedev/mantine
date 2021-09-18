import type { MantineTheme } from '@mantine/theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/from-entries';
import { useCss } from './use-css';
import { useMantineTheme } from './MantineProvider/use-mantine-theme';

export function createStyles<Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((theme: MantineTheme, params: Params, createRef: () => string) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) {
  const getCssObject =
    typeof getCssObjectOrCssObject === 'function'
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

  function useStyles(params: Params) {
    const theme = useMantineTheme();
    const css = useCss();

    let count = 0;

    function createRef() {
      count += 1;
      return `tss-react-ref_${count}`;
    }

    const cssObject = getCssObject(theme, params, createRef);

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => [key, css(cssObject[key])])
    ) as Record<Key, string>;

    return classes;
  }

  return useStyles;
}
