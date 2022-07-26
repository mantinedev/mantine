import React from 'react';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <FileInput label="Upload files" placeholder="Upload files" multiple />
    </div>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
