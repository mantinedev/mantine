import React from 'react';
import { ToolbarButton } from './ToolbarButton/ToolbarButton';
import { controls } from './controls';

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
  const buttons = Object.keys(controls).map((control) => {
    const Icon = controls[control].icon;
    return (
      <ToolbarButton controls={controls[control].controls} key={control}>
        <Icon />
      </ToolbarButton>
    );
  });

  return <div id="toolbar">{buttons}</div>;
}
