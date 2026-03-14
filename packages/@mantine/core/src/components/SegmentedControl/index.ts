import { Primitive } from '../../core';
import type {
  SegmentedControlCssVariables,
  SegmentedControlFactory,
  SegmentedControlItem,
  SegmentedControlProps,
  SegmentedControlStylesNames,
} from './SegmentedControl';

export { SegmentedControl } from './SegmentedControl';

export type {
  SegmentedControlCssVariables,
  SegmentedControlFactory,
  SegmentedControlItem,
  SegmentedControlProps,
  SegmentedControlStylesNames,
};

export namespace SegmentedControl {
  export type CssVariables = SegmentedControlCssVariables;
  export type Factory = SegmentedControlFactory;
  export type Item<Value extends Primitive = string> = SegmentedControlItem<Value>;
  export type Props<Value extends Primitive = string> = SegmentedControlProps<Value>;
  export type StylesNames = SegmentedControlStylesNames;
}
