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
        label="Zero padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TreeSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TreeSelect
        label="Zero padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TreeSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={data}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}

export const dropdownPadding: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
