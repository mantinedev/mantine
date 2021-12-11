import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TransferList, TransferListData, TransferListProps } from '../index';

function Wrapper(props: Partial<TransferListProps>) {
  const [data, setData] = useState<TransferListData>([
    Array.from(Array(1000), (_, i) => ({
      value: i.toString(),
      label: i.toString(),
    })),
    [],
  ]);
  return <TransferList value={data} onChange={setData} {...props} />;
}

storiesOf('@mantine/core/TransferList/stories', module).add('Large data set', () => (
  <div style={{ padding: 40 }}>
    <Wrapper />
  </div>
));
