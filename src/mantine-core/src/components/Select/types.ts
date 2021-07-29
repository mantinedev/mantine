export interface SelectItem {
  value: string;
  label: string;
  [key: string]: any;
}

export type SelectDataItem = string | SelectItem;
