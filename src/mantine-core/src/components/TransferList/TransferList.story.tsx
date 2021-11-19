import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Scrollbars } from 'react-custom-scrollbars';
import { TransferList, TransferListProps, TransferListData } from './index';

const mockdata: TransferListData = [
  [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'next', label: 'Next.js' },
  ],
  [
    { value: 'sv', label: 'Svelte' },
    { value: 'rw', label: 'Redwood' },
  ],
];

function Wrapper(props: Partial<TransferListProps>) {
  const [data, setData] = useState<TransferListData>(mockdata);
  return <TransferList value={data} onChange={setData} {...props} />;
}

storiesOf('@mantine/core/TransferList', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 800 }}>
      <Wrapper
        searchPlaceholder="Search..."
        nothingFound="Nothing here"
        titles={['Frameworks', 'Libraries']}
      />
    </div>
  ))
  .add('With custom scrollbars', () => (
    <div style={{ padding: 40, maxWidth: 800 }}>
      <Wrapper
        searchPlaceholder="Search..."
        nothingFound="Nothing here"
        titles={['Frameworks', 'Libraries']}
        height={100}
        listComponent={(props) => (
          <Scrollbars style={{ height: 100 }}>
            <div {...props} />
          </Scrollbars>
        )}
      />
    </div>
  ));
