export interface TransferListItem {
  value: string;
  label: string;
  group?: string;
  [key: string]: any;
}

export type TransferListData = [TransferListItem[], TransferListItem[]];

export interface TransferListItemComponentProps {
  data: TransferListItem;
  selected: boolean;
}

export type TransferListItemComponent = React.FC<TransferListItemComponentProps>;
