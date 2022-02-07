import React from 'react';
import { MultiSelect } from '@mantine/core';
import { data } from './_data';

const code = `
<MultiSelect
  transitionDuration={150}
  transition="pop-top-left"
  transitionTimingFunction="ease"
/>
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        transitionDuration={150}
        transition="pop-top-left"
        transitionTimingFunction="ease"
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
    </div>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
