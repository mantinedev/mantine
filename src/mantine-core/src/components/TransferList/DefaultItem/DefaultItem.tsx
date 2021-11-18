import React from 'react';
import { Checkbox } from '../../Checkbox';
import type { TransferListItemComponent, TransferListItemComponentProps } from '../types';

export const DefaultItem: TransferListItemComponent = ({
  data,
  selected,
  onSelect,
}: TransferListItemComponentProps) => (
  <Checkbox checked={selected} onChange={onSelect} label={data.label} />
);
