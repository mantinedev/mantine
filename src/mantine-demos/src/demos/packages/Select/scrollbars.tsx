import React from 'react';
import { Select } from '@mantine/core';

const code = `
<Select
  data={data}
  label="Select with native scrollbars"
  placeholder="Dropdown with native scrollbars"
  dropdownComponent="div"
/>
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        data={data}
        label="Select with native scrollbars"
        placeholder="Dropdown with native scrollbars"
        dropdownComponent="div"
      />
    </div>
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
