import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { RenderList } from './RenderList/RenderList';

export interface TransferListItem {
  value: string;
  label: string;
  [key: string]: any;
}

export type TransferListData = [TransferListItem[], TransferListItem[]];

export interface TransferListProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  data: TransferListData;
  onChange(value: TransferListData): void;
}

export function TransferList({ data, onChange, ...others }: TransferListProps) {
  return (
    <div {...others}>
      <RenderList />
      <div>Controls</div>
      <RenderList />
    </div>
  );
}
