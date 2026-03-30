import type {
  OverflowListCssVariables,
  OverflowListFactory,
  OverflowListProps,
  OverflowListStylesNames,
} from './OverflowList';

export { OverflowList } from './OverflowList';

export type {
  OverflowListProps,
  OverflowListFactory,
  OverflowListStylesNames,
  OverflowListCssVariables,
};

export namespace OverflowList {
  export type Props = OverflowListProps;
  export type Factory = OverflowListFactory;
  export type StylesNames = OverflowListStylesNames;
  export type CssVariables = OverflowListCssVariables;
}
