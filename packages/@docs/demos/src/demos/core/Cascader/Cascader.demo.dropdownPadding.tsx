import { Cascader } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Cascader } from '@mantine/core';
import { data } from './data';

// Dropdown padding is only applied to the flat list (withColumns={false});
// in columns mode each column manages its own padding.
function Demo() {
  return (
    <Cascader
      withColumns={false}
      label="Location"
      placeholder="Pick location"
      comboboxProps={{ dropdownPadding: 12 }}
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
      comboboxProps={{ dropdownPadding: 12 }}
      data={data}
    />
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
