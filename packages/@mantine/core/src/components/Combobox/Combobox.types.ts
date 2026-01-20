import { Primitive } from '../../core';
import type { ComboboxProps, ComboboxStylesNames } from './Combobox';
import type { OptionsFilter } from './OptionsDropdown/OptionsDropdown';

export interface ComboboxGenericItem<Value extends Primitive = string> {
  value: Value;
  disabled?: boolean;
}

export interface ComboboxItem<Value extends Primitive = string> extends ComboboxGenericItem<Value> {
  label: string;
}

export interface ComboboxItemGroup<T> {
  group: string;
  items: T[];
}

export interface ComboboxParsedItemGroup<Value extends Primitive = string> {
  group: string;
  items: ComboboxItem<Value>[];
}

export type ComboboxGenericData<Value extends Primitive = string> =
  | Array<
      Value | ComboboxGenericItem<Value> | ComboboxItemGroup<Value | ComboboxGenericItem<Value>>
    >
  | ReadonlyArray<
      Value | ComboboxGenericItem<Value> | ComboboxItemGroup<Value | ComboboxGenericItem<Value>>
    >;

export type ComboboxData<Value extends Primitive = string> =
  | Array<
      | Value
      | ComboboxItem<Value>
      | ComboboxItemGroup<Value | ComboboxGenericItem<Value> | ComboboxItem<Value>>
    >
  | ReadonlyArray<
      | Value
      | ComboboxItem<Value>
      | ComboboxItemGroup<Value | ComboboxGenericItem<Value> | ComboboxItem<Value>>
    >;

export type ComboboxParsedItem<Value extends Primitive = string> =
  | ComboboxItem<Value>
  | ComboboxParsedItemGroup<Value>;

export type ComboboxLikeStylesNames = Exclude<ComboboxStylesNames, 'header' | 'footer' | 'search'>;

export interface ComboboxLikeProps<Value extends Primitive = string> {
  /** Data used to generate options. Values must be unique, otherwise an error will be thrown and component will not render. */
  data?: ComboboxData<Value>;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?: () => void;

  /** Called when dropdown closes */
  onDropdownClose?: () => void;

  /** If set, the first option is selected when value changes, `false` by default */
  selectFirstOptionOnChange?: boolean;

  /** If set, the first option is selected when dropdown opens, `false` by default */
  selectFirstOptionOnDropdownOpen?: boolean;

  /** Called when option is submitted from dropdown with mouse click or `Enter` key */
  onOptionSubmit?: (value: Value) => void;

  /** Props passed down to `Combobox` component */
  comboboxProps?: ComboboxProps;

  /** Function based on which items are filtered and sorted */
  filter?: OptionsFilter<Value>;

  /** Maximum number of options displayed at a time, `Infinity` by default */
  limit?: number;

  /** Determines whether the options should be wrapped with `ScrollArea.AutoSize`, `true` by default */
  withScrollArea?: boolean;

  /** `max-height` of the dropdown, only applicable when `withScrollArea` prop is `true`, `250` by default */
  maxDropdownHeight?: number | string;
}

export interface ComboboxLikeRenderOptionInput<T> {
  option: T;
  checked?: boolean;
}
