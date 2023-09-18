import type { ComboboxProps, ComboboxStylesNames } from './Combobox';
import type { OptionsFilter } from './OptionsDropdown/OptionsDropdown';

export interface ComboboxItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxItemGroup {
  group: string;
  items: (ComboboxItem | string)[];
}

export interface ComboboxParsedItemGroup {
  group: string;
  items: ComboboxItem[];
}

export type ComboboxData = (string | ComboboxItem | ComboboxItemGroup)[];
export type ComboboxParsedItem = ComboboxItem | ComboboxParsedItemGroup;

export type ComboboxLikeStylesNames = Exclude<ComboboxStylesNames, 'header' | 'footer' | 'search'>;

export interface ComboboxLikeProps {
  /** Data used to generate options */
  data?: ComboboxData;

  /** Controlled dropdown opened state */
  dropdownOpened?: boolean;

  /** Uncontrolled dropdown initial opened state */
  defaultDropdownOpened?: boolean;

  /** Called when dropdown opens */
  onDropdownOpen?(): void;

  /** Called when dropdown closes */
  onDropdownClose?(): void;

  /** Determines whether the first option should be selected when value changes, `false` by default */
  selectFirstOptionOnChange?: boolean;

  /** Called when option is submitted from dropdown with mouse click or `Enter` key */
  onOptionSubmit?(value: string): void;

  /** Props passed down to `Combobox` component */
  comboboxProps?: ComboboxProps;

  /** Function based on which items are filtered and sorted */
  filter?: OptionsFilter;

  /** Maximum number of options displayed at a time, `Infinity` by default */
  limit?: number;

  /** Determines whether the options should be wrapped with `ScrollArea.AutoSize`, `true` by default */
  withScrollArea?: boolean;

  /** `max-height` of the dropdown, only applicable when `withScrollArea` prop is `true`, `250` by default */
  maxDropdownHeight?: number | string;
}
