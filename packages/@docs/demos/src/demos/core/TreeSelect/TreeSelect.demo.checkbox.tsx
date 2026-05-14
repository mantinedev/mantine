import { TreeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <TreeSelect
      label="Select categories"
      placeholder="Pick values"
      data={data}
      mode="checkbox"
      defaultExpandAll
    />
  );
}
`;

function Demo() {
  return (
    <TreeSelect
      label="Select categories"
      placeholder="Pick values"
      data={data}
      mode="checkbox"
      defaultExpandAll
    />
  );
}

export const checkbox: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
