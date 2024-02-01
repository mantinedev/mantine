export type FocusBehaviour =
  | 'VerticalList'
  | 'HorizontalList'
  | 'LayoutGrid'
  | 'DataGrid'
  | 'Tree'
  | 'TreeGrid';

export interface FocusOptions {
  pageSize?: number;
  behaviour?: FocusBehaviour;
  loop?: boolean;
  moveToNextRow?: boolean;
  moveToNextColumn?: boolean;
}

export interface FocusObject {
  element: HTMLElement | undefined;
  index: number;
  row: number;
  col: number;
}
