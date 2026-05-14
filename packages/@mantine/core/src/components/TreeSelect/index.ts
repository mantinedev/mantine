import type {
  TreeSelectFactory,
  TreeSelectMode,
  TreeSelectProps,
  TreeSelectStylesNames,
  TreeSelectValue,
} from './TreeSelect';

export { TreeSelect } from './TreeSelect';
export { TreeSelectOption } from './TreeSelectOption';
export type { TreeSelectChevronAriaLabels, TreeSelectRenderNodePayload } from './TreeSelectOption';
export type { CheckedStrategy } from './get-checked-values-by-strategy';
export type {
  TreeSelectProps,
  TreeSelectStylesNames,
  TreeSelectFactory,
  TreeSelectMode,
  TreeSelectValue,
};

export namespace TreeSelect {
  export type Props = TreeSelectProps;
  export type StylesNames = TreeSelectStylesNames;
  export type Factory = TreeSelectFactory;
  export type Mode = TreeSelectMode;
  export type Value<Mode extends TreeSelectMode> = TreeSelectValue<Mode>;
}
