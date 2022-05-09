export interface ComboboxItemData {
  value: string;
  label?: string;
  group?: string;
  disabled?: boolean;
}

export type ComboboxItem = string | ComboboxItemData;
