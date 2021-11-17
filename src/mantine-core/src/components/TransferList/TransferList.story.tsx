import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TransferList, TransferListProps, TransferListData } from './index';

function Wrapper(props: Partial<TransferListProps>) {
  const [data, setData] = useState<TransferListData>([[], []]);
  return <TransferList data={data} onChange={setData} {...props} />;
}

storiesOf('@mantine/core/TransferList', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <Wrapper />
  </div>
));
