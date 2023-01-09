import React from 'react';
import { IconUpload } from '@tabler/icons';
import { MantineDemo } from '@mantine/ds';
import { FileInput } from '@mantine/core';

const code = `
import { FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons';

function Demo() {
  return <FileInput label="Your resume" placeholder="Your resume" icon={<IconUpload size={14} />} />;
}
`;

function Demo() {
  return (
    <FileInput
      maw={320}
      mx="auto"
      label="Your resume"
      placeholder="Your resume"
      icon={<IconUpload size={14} />}
    />
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
