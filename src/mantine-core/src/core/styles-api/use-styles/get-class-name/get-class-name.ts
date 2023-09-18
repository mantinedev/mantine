import cx from 'clsx';
import { MantineTheme } from '../../../MantineProvider';
import { GetStylesApiOptions } from '../../styles-api.types';
import { getStaticClassNames } from './get-static-class-names/get-static-class-names';
import { getThemeClassNames } from './get-theme-class-names/get-theme-class-names';
import { getGlobalClassNames } from './get-global-class-names/get-global-class-names';
import { getVariantClassName } from './get-variant-class-name/get-variant-class-name';
import { getRootClassName } from './get-root-class-name/get-root-class-name';
import { getSelectorClassName } from './get-selector-class-name/get-selector-class-name';
import { getResolvedClassNames } from './get-resolved-class-names/get-resolved-class-names';
import { getOptionsClassNames } from './get-options-class-names/get-options-class-names';

type __ClassNames =
  | undefined
  | Partial<Record<string, string>>
  | ((
      theme: MantineTheme,
      props: Record<string, any>,
      ctx: Record<string, any> | undefined
    ) => Partial<Record<string, string>>);

export type _ClassNames = __ClassNames | __ClassNames[];

export interface GetClassNameOptions {
  /** Theme object, resolved by hook */
  theme: MantineTheme;

  /** Options for specified selector, may include `classNames` or `className` */
  options: GetStylesApiOptions | undefined;

  /** Name of the component which is used to get `classNames` from `theme.components` */
  themeName: string[];

  /** Class part specified in `getStyles` */
  selector: string;

  /** Prefix for all class names, resolved by hook, `mantine` by default */
  classNamesPrefix: string;

  /** `classNames` specified in the hook, only resolved `classNames[selector]` is added to the list */
  classNames: _ClassNames;

  /** Classes object, usually imported from `*.module.css` */
  classes: Record<string, string>;

  /** Determines whether classes from `classes` should be added to the list */
  unstyled: boolean | undefined;

  /** `className` specified in the hook, added to the list if `selector` is `rootSelector` */
  className: string | undefined;

  /** `rootSelector` specified in the hook, determines whether `className` should be added to the list */
  rootSelector: string;

  /** Component props, used as context for `classNames` and `options.classNames` */
  props: Record<string, any>;

  /** Component styles context, used as context for `classNames` and `options.classNames` */
  stylesCtx?: Record<string, any> | undefined;
}

export function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx,
}: GetClassNameOptions) {
  return cx(
    getGlobalClassNames({ theme, options, unstyled }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes, unstyled }),
    getStaticClassNames({ themeName, classNamesPrefix, selector }),
    options?.className
  );
}
