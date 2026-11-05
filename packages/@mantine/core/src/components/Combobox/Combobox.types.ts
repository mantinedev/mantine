import { Primitive } from '../../core';
import type { ComboboxProps, ComboboxStylesNames } from './Combobox';
import type { OptionsFilter } from './OptionsDropdown/OptionsDropdown';
import type { PillReorderProps } from './use-pills-reorder/use-pills-reorder';

export interface ComboboxGenericItem<Value extends Primitive = string> {
  value: Value;
  disabled?: boolean | undefined;
}

export interface ComboboxItem<Value extends Primitive = string> extends ComboboxGenericItem<Value> {
  label: string;
}

export interface ComboboxItemGroup<T, Group extends React.ReactNode = React.ReactNode> {
  group: Group;
  items: T[];
}

export interface ComboboxParsedItemGroup<Value extends Primitive = string> {
  group: React.ReactNode;
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

export type ComboboxStringGroupData<Value extends Primitive = string> =
  | Array<
      | Value
      | ComboboxItem<Value>
      | ComboboxItemGroup<Value | ComboboxGenericItem<Value> | ComboboxItem<Value>, string>
    >
  | ReadonlyArray<
      | Value
      | ComboboxItem<Value>
      | ComboboxItemGroup<Value | ComboboxGenericItem<Value> | ComboboxItem<Value>, string>
    >;

export type ComboboxParsedItem<Value extends Primitive = string> =
  | ComboboxItem<Value>
  | ComboboxParsedItemGroup<Value>;

export type ComboboxLikeStylesNames = Exclude<ComboboxStylesNames, 'header' | 'footer' | 'search'>;

export interface ComboboxLikeProps<Value extends Primitive = string> {
  /** Data used to generate options. Values must be unique, otherwise an error will be thrown and component will not render. */
  data?: ComboboxData<Value> | undefined;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean | undefined;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean | undefined;

  /** Called when dropdown opens */
  onDropdownOpen?: (() => void) | undefined;

  /** Called when dropdown closes */
  onDropdownClose?: (() => void) | undefined;

  /** If set, the first option is selected when value changes, `false` by default */
  selectFirstOptionOnChange?: boolean | undefined;

  /** If set, the first option is selected when dropdown opens, `false` by default */
  selectFirstOptionOnDropdownOpen?: boolean | undefined;

  /** Called when option is submitted from dropdown with mouse click or `Enter` key */
  onOptionSubmit?: ((value: Value) => void) | undefined;

  /** Props passed down to `Combobox` component */
  comboboxProps?: ComboboxProps | undefined;

  /** Function based on which items are filtered and sorted */
  filter?: OptionsFilter<Value> | undefined;

  /** Maximum number of options displayed at a time, `Infinity` by default */
  limit?: number | undefined;

  /** Determines whether the options should be wrapped with `ScrollArea.AutoSize`, `true` by default */
  withScrollArea?: boolean | undefined;

  /** `max-height` of the dropdown, only applicable when `withScrollArea` prop is `true`, `220` by default */
  maxDropdownHeight?: number | string | undefined;

  /** If set to `'viewport'`, the dropdown grows to fill the available vertical space in the viewport. Disables the `flip` middleware. */
  floatingHeight?: 'viewport' | undefined;
}

export interface ComboboxLikeRenderOptionInput<T> {
  option: T;
  checked?: boolean | undefined;
}

export interface ComboboxRenderPillInput<Value extends Primitive = string> {
  option: ComboboxItem<Primitive>;
  value?: Value | undefined;
  onRemove?: (() => void) | undefined;
  disabled?: boolean | undefined;

  /** Props to spread into the pill element to enable drag-and-drop reordering. Defined only when `withPillsReorder` is set. */
  reorderProps?: PillReorderProps | undefined;
}
