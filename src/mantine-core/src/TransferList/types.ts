import { MantineNumberSize } from '@mantine/styles';

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
  radius: MantineNumberSize;
}

export type TransferListItemComponent = React.FC<TransferListItemComponentProps>;
