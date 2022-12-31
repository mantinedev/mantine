import type { MantineTheme, ContextStylesParams } from '../theme';
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
    | ((
        theme: MantineTheme,
        params: any,
        context: ContextStylesParams
      ) => Partial<Record<Key, CSSObject>>);
  name: string | string[];
  unstyled?: boolean;
  variant?: string;
  size?: number | string;
}

function assignAccStyles(acc: Record<string, CSSObject>, styles: Record<string, CSSObject>) {
  if (styles) {
    Object.keys(styles).forEach((key) => {
      if (!acc[key]) {
        acc[key] = { ...styles[key] };
      } else {
        acc[key] = { ...acc[key], ...styles[key] };
      }
    });
  }

  return acc;
}

function getStyles<Key extends string>(
  styles: UseStylesOptions<Key>['styles'] | ContextStyles,
  theme: MantineTheme,
  params: Record<string, any>,
  contextParams: ContextStylesParams
): CSSObject {
  const extractStyles = (stylesPartial: UseStylesOptions<Key>['styles']) =>
    typeof stylesPartial === 'function'
      ? stylesPartial(theme, params || {}, contextParams)
      : stylesPartial || {};

  if (Array.isArray(styles)) {
    return styles
      .map((item) => extractStyles(item.styles))
      .reduce<Record<string, CSSObject>>((acc, item) => assignAccStyles(acc, item), {});
  }

  return extractStyles(styles);
}

interface GetContextVariations {
  ctx: ContextStyles;
  theme: MantineTheme;
  params: Record<string, any>;
  variant: string;
  size: number | string;
}

function getContextVariation({ ctx, theme, params, variant, size }: GetContextVariations) {
  return ctx.reduce<Record<string, CSSObject>>((acc, item) => {
    if (item.variants && variant in item.variants) {
      assignAccStyles(acc, item.variants[variant](theme, params, { variant, size }));
    }

    if (item.sizes && size in item.sizes) {
      assignAccStyles(acc, item.sizes[size](theme, params, { variant, size }));
    }

    return acc;
  }, {});
}

interface Variations {
  variant?: string;
  size: string | number;
}

export function createStyles<
  Key extends string = string,
  Params = void,
  Input extends Record<Key, CSSObject> = Record<Key, CSSObject>
>(input: ((theme: MantineTheme, params: Params, variations: Variations) => Input) | Input) {
  const getCssObject = typeof input === 'function' ? input : () => input;

  function useStyles(params: Params, options?: UseStylesOptions<Key>) {
    const theme = useMantineTheme();
    const context = useMantineProviderStyles(options?.name);
    const cache = useMantineEmotionCache();

    const contextParams = { variant: options?.variant, size: options?.size };
    const { css, cx } = useCss();
    const cssObject = getCssObject(theme, params, contextParams);
    const componentStyles = getStyles(options?.styles, theme, params, contextParams);
    const providerStyles = getStyles(context, theme, params, contextParams);
    const contextVariations = getContextVariation({
      ctx: context,
      theme,
      params,
      variant: options?.variant,
      size: options?.size,
    });

    const classes = Object.fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(
          { [css(cssObject[key])]: !options?.unstyled },
          css(contextVariations[key]),
          css(providerStyles[key]),
          css(componentStyles[key])
        );
        return [key, mergedStyles];
      })
    ) as {
      [key in keyof Input]: string;
    };

    return {
      classes: mergeClassNames<{ [key in keyof Input]: string }>({
        cx,
        classes,
        context,
        classNames: options?.classNames as {
          [key in keyof Input]: string;
        },
        name: options?.name,
        cache,
      }),
      cx,
      theme,
    };
  }

  return useStyles;
}
