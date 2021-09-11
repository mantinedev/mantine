import React from 'react';
import { FontBoldIcon } from '@modulz/radix-icons';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';

// <NativeSelect
//   onChange={(event) => event.persist()}
//   classNames={{ input: 'ql-header' }}
//   data={[
//     { label: 'Text', value: '' },
//     { label: 'Heading 1', value: '1' },
//     { label: 'Heading 2', value: '2' },
//     { label: 'Heading 3', value: '3' },
//   ]}
//   />

export function Toolbar() {
  return (
    <div id="toolbar">
      <ToolbarButton controls="bold">
        <FontBoldIcon />
      </ToolbarButton>
    </div>
  );
}
