import type { MantineTheme } from '../theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/from-entries/from-entries';
import { useCss } from './use-css';
import { useMantineTheme, useMantineProviderStyles } from '../theme/MantineProvider';
import { mergeClassNames } from './utils/merge-class-names/merge-class-names';

export interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
  styles?:
    | Partial<Record<Key, CSSObject>>
    | ((theme: MantineTheme, params: Record<string, any>) => Partial<Record<Key, CSSObject>>);
  name: string;
  unstyled?: boolean;
}

function createRef(refName: string) {
  return `__mantine-ref-${refName || ''}`;
}

function getStyles<Key extends string>(
  styles: UseStylesOptions<Key>['styles'],
  theme: MantineTheme,
  params: Record<string, any>
): UseStylesOptions<Key>['styles'] {
  return typeof styles === 'function' ? styles(theme, params || {}) : styles || {};
}

export function createStyles<Key extends string = string, Params = void>(
  input:
    | ((
        theme: MantineTheme,
        params: Params,
        createRef: (refName: string) => string
      ) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) {
  const getCssObject = typeof input === 'function' ? input : () => input;

  function useStyles(params: Params, options?: UseStylesOptions<Key>) {
    const theme = useMantineTheme();
    const { providerStyles, providerClassNames } = useMantineProviderStyles(options?.name);

    const { css, cx } = useCss();
    const cssObject = getCssObject(theme, params, createRef);

    const _styles = getStyles(options?.styles, theme, params);
    const _providerStyles = getStyles(providerStyles, theme, params);

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(
          { [css(cssObject[key])]: !options?.unstyled },
          css(_providerStyles[key]),
          css(_styles[key])
        );
        return [key, mergedStyles];
      })
    ) as Record<Key, string>;

    return {
      classes: mergeClassNames(cx, classes, providerClassNames, options?.classNames, options?.name),
      cx,
      theme,
    };
  }

  return useStyles;
}
