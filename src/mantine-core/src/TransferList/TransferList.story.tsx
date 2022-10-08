import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TransferList, TransferListData, TransferListProps } from './index';

function Wrapper({ count = 1000, ...props }: Partial<TransferListProps> & { count?: number }) {
  const [data, setData] = useState<TransferListData>([
    Array.from(Array(count), (_, i) => ({
      value: i.toString(),
      label: i.toString(),
    })),
    [],
  ]);
  return <TransferList value={data} onChange={setData} {...props} />;
}

storiesOf('TransferList', module)
  .add('Large data set', () => (
    <div style={{ padding: 40 }}>
      <Wrapper count={500} limit={100} />
    </div>
  ))
  .add('Show transfer all: false', () => (
    <div style={{ padding: 40 }}>
      <Wrapper count={10} showTransferAll={false} />
    </div>
  ));
