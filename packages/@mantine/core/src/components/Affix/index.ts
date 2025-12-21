import type {
  AffixBaseProps,
  AffixCssVariables,
  AffixFactory,
  AffixPosition,
  AffixProps,
  AffixStylesNames,
} from './Affix';

export { Affix } from './Affix';

export type {
  AffixCssVariables,
  AffixFactory,
  AffixProps,
  AffixStylesNames,
  AffixBaseProps,
  AffixPosition,
};

export namespace Affix {
  export type Props = AffixProps;
  export type StylesNames = AffixStylesNames;
  export type CssVariables = AffixCssVariables;
  export type Factory = AffixFactory;
}
