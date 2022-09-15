import type { MantineTheme } from '../theme';
import type { CSSObject } from './types';
import { useCss } from './use-css';
import {
  useMantineTheme,
  useMantineProviderStyles,
  useMantineEmotionCache,
} from '../theme/MantineProvider';
import { mergeClassNames } from './utils/merge-class-names/merge-class-names';

type ContextStyles = ReturnType<typeof useMantineProviderStyles>;

export interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
  styles?:
    | Partial<Record<Key, CSSObject>>
    | ((theme: MantineTheme, params: Record<string, any>) => Partial<Record<Key, CSSObject>>);
  name: string | string[];
  unstyled?: boolean;
}

function createRef(refName: string) {
  return `__mantine-ref-${refName || ''}`;
}

function getStyles<Key extends string>(
  styles: UseStylesOptions<Key>['styles'] | ContextStyles,
  theme: MantineTheme,
  params: Record<string, any>
): CSSObject {
  const extractStyles = (stylesPartial: UseStylesOptions<Key>['styles']) =>
    typeof stylesPartial === 'function' ? stylesPartial(theme, params || {}) : stylesPartial || {};

  if (Array.isArray(styles)) {
    return styles
      .map((item) => extractStyles(item.styles))
      .reduce<Record<string, CSSObject>>((acc, item) => {
        Object.keys(item).forEach((key) => {
          if (!acc[key]) {
            acc[key] = { ...item[key] };
          } else {
            acc[key] = { ...acc[key], ...item[key] };
          }
        });
        return acc;
      }, {});
  }

  return extractStyles(styles);
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
    const context = useMantineProviderStyles(options?.name);
    const cache = useMantineEmotionCache();

    const { css, cx } = useCss();
    const cssObject = getCssObject(theme, params, createRef);

    const componentStyles = getStyles(options?.styles, theme, params);
    const providerStyles = getStyles(context, theme, params);

    const classes = Object.fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(
          { [css(cssObject[key])]: !options?.unstyled },
          css(providerStyles[key]),
          css(componentStyles[key])
        );
        return [key, mergedStyles];
      })
    ) as Record<Key, string>;

    return {
      classes: mergeClassNames({
        cx,
        classes,
        context,
        classNames: options?.classNames,
        name: options?.name,
        cache,
      }),
      cx,
      theme,
    };
  }

  return useStyles;
}
