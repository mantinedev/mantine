import React, { useState } from 'react';
import { TagInput } from '@mantine/labs';

const code = `
<TagInput
  label="Technologies that you're interested in"
  placeholder="Add as many as you like"
  clearButtonLabel="Clear selection"
  clearable
  value={value}
  onChange={(item) => setValue(item)}
/>
`;

function Demo() {
  const [value, setValue] = useState(['React']);
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <TagInput
        label="Technologies that you're interested in"
        placeholder="Add as many as you like"
        clearButtonLabel="Clear selection"
        value={value}
        onChange={(item) => setValue(item)}
      />
    </div>
  );
}

export const controlable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
