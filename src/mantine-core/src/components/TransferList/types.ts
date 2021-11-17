export interface TransferListItem {
  value: string;
  label: string;
  [key: string]: any;
}

export type TransferListData = [TransferListItem[], TransferListItem[]];

export interface TransferListItemComponentProps {
  data: TransferListItem;
  selected: boolean;
  onSelect(): void;
}

export type TransferListItemComponent = React.FC<TransferListItemComponentProps>;
