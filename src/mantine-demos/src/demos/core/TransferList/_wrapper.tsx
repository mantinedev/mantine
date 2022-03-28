import React, { useState } from 'react';
import { TransferList, TransferListData, TransferListProps } from '@mantine/core';

const mockdata: TransferListData = [
  [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
    { value: 'gatsby', label: 'Gatsby.js' },
    { value: 'vue', label: 'Vue' },
    { value: 'jq', label: 'jQuery' },
  ],
  [
    { value: 'sv', label: 'Svelte' },
    { value: 'rw', label: 'Redwood' },
    { value: 'np', label: 'NumPy' },
    { value: 'dj', label: 'Django' },
    { value: 'fl', label: 'Flask' },
  ],
];

export function Wrapper(props: Partial<TransferListProps>) {
  const [data, setData] = useState<TransferListData>(mockdata);
  return <TransferList value={data} onChange={setData} {...props} />;
}
