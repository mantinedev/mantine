import React from 'react';
import { IconUpload } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';

function Demo() {
  return <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={14} />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={14} />} />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
