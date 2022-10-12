import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { BaseDemo } from './_base';

const code = `
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading>
      {/* children */}
    </Dropzone>
  );
}
`;

function Demo() {
  return <BaseDemo loading />;
}

export const loading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
