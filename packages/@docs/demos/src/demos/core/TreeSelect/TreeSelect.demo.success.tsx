import { TreeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <TreeSelect label="Tree Select" placeholder="Tree Select" data={data} success="Looks good!" />;
}
`;

function Demo() {
  return (
    <TreeSelect label="Tree Select" placeholder="Tree Select" data={data} success="Looks good!" />
  );
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
