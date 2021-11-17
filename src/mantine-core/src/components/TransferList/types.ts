export interface TransferListItem {
  value: string;
  label: string;
  [key: string]: any;
}

export type TransferListData = [TransferListItem[], TransferListItem[]];
