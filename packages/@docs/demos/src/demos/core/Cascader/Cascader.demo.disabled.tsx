import { Cascader, useMatches } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { Cascader, useMatches } from '@mantine/core';
import { data } from './data';

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      disabled
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}
`;

function Demo() {
  const withColumns = useMatches({ base: false, sm: true });
  return (
    <Cascader
      withColumns={withColumns}
      disabled
      label="Location"
      placeholder="Pick location"
      data={data}
    />
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
};
