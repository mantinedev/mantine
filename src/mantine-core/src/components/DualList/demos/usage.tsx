import React from 'react';
import { DualList, DualListProps } from '../DualList';

const codeTemplate = (props: string) => `
<DualList
    available={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
    selected={[]}
    size="sm"

   ${props}
/>`;

function Wrapper(props: DualListProps) {
  return (
    <DualList
      available={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
      selected={[]}
      size="sm"
      {...props}
    />
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  // @ts-ignore - Suppress `{ children?: ReactNode } missing` warning since DualList does not support children
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'leftLabel',
      type: 'string',
      initialValue: 'Available',
    },
    { name: 'emptyPlaceholder', type: 'string', initialValue: 'No items found...' },
    { name: 'checkboxes', type: 'boolean', initialValue: false },
    { name: 'showLeftSearchBar', type: 'boolean', initialValue: true },
  ],
};
