import { Cascader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Cascader } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ width: 220, position: 'bottom-start' }}
      data={data}
    />
  );
}
`;

function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ width: 220, position: 'bottom-start' }}
      data={data}
    />
  );
}

export const dropdownWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
