import React from 'react';
import { Checkbox } from '../../Checkbox';
import { UnstyledButton } from '../../Button';
import type { TransferListItemComponent, TransferListItemComponentProps } from '../types';

export const DefaultItem: TransferListItemComponent = ({
  data,
  selected,
  onSelect,
}: TransferListItemComponentProps) => (
  <UnstyledButton onClick={onSelect}>
    <Checkbox checked={selected} onChange={() => {}} label={data.label} />
  </UnstyledButton>
);
