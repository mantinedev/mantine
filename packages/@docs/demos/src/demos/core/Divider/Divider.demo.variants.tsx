import { Divider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const variants: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
