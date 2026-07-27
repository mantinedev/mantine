import { Cascader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      label="Location"
      placeholder="Pick location"
      loading
      data={data}
    />
  );
}
`;

function Demo() {
  return <Cascader label="Location" placeholder="Pick location" loading data={data} />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
