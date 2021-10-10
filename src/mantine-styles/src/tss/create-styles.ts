import type { MantineTheme } from '../theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/from-entries/from-entries';
import { useCss } from './use-css';
import { useMantineTheme } from '../theme/MantineProvider';
import { mergeClassNames } from './utils/merge-class-names/merge-class-names';

export function createStyles<Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((
        theme: MantineTheme,
        params: Params,
        createRef: (refName: string) => string
      ) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) {
  const getCssObject =
    typeof getCssObjectOrCssObject === 'function'
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

  function useStyles(params: Params, classNames?: Partial<Record<Key, string>>, name?: string) {
    const theme = useMantineTheme();
    const { css, cx } = useCss();

    let count = 0;

    function createRef(refName: string) {
      count += 1;
      return `mantine-ref_${refName || ''}_${count}`;
    }

    const cssObject = getCssObject(theme, params, createRef);

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => [key, css(cssObject[key])])
    ) as Record<Key, string>;

    return { classes: mergeClassNames(cx, classes, classNames, name), cx };
  }

  return useStyles;
}
