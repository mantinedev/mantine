import { TreeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <>
      <TreeSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={data}
      />
      <TreeSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid value"
        data={data}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TreeSelect label="Boolean error" placeholder="Boolean error" error data={data} />
      <TreeSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid value"
        data={data}
      />
    </>
  );
}

export const error: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
