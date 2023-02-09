import { TransferListData } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import React, { useState } from 'react';
import { Wrapper } from './_wrapper';

const code = `
import { useState } from 'react';
import { TransferList, TransferListData } from '@mantine/core';

const mockdata: TransferListData = [
  [
    { value: 'react', label: 'React', disabled: true },
    { value: 'ng', label: 'Angular' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
    { value: 'gatsby', label: 'Gatsby.js' },
    { value: 'vue', label: 'Vue' },
    { value: 'jq', label: 'jQuery', disabled: true },
  ],
  [
    { value: 'sv', label: 'Svelte', disabled: true },
    { value: 'rw', label: 'Redwood' },
    { value: 'np', label: 'NumPy' },
    { value: 'dj', label: 'Django' },
    { value: 'fl', label: 'Flask', disabled: true },
  ],
];

<TransferList
 transferAllTransfersDisabled={false}
 filter={(query, item) => {
  if (query === '') return true;
  if (item.disabled) return false;
    return (
      item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
      item.value.toLowerCase().includes(query.toLowerCase().trim())
    );
  }}
 />
`;

const mockdata: TransferListData = [
  [
    { value: 'react', label: 'React', disabled: true },
    { value: 'ng', label: 'Angular' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
    { value: 'gatsby', label: 'Gatsby.js' },
    { value: 'vue', label: 'Vue' },
    { value: 'jq', label: 'jQuery', disabled: true },
  ],
  [
    { value: 'sv', label: 'Svelte', disabled: true },
    { value: 'rw', label: 'Redwood' },
    { value: 'np', label: 'NumPy' },
    { value: 'dj', label: 'Django' },
    { value: 'fl', label: 'Flask', disabled: true },
  ],
];

function Demo() {
  const [data, setData] = useState<TransferListData>(mockdata);
  return (
    <Wrapper
      value={data}
      onChange={setData}
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
      transferAllTransfersDisabled={false}
      transferAllMatchingFilter
      filter={(query, item) => {
        if (query === '') return true;
        if (item.disabled) return false;
        return (
          item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
          item.value.toLowerCase().includes(query.toLowerCase().trim())
        );
      }}
    />
  );
}

export const disabledItems: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
