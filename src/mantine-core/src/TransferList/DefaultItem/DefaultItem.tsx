import React from 'react';
import { Checkbox } from '../../Checkbox';
import type { TransferListItemComponent, TransferListItemComponentProps } from '../types';

export const DefaultItem: TransferListItemComponent = React.memo(
  ({ data, selected, radius }: TransferListItemComponentProps) => (
    <Checkbox
      checked={selected}
      onChange={() => {}}
      label={data.label}
      tabIndex={-1}
      radius={radius}
      sx={{ pointerEvents: 'none' }}
    />
  )
);
