import { Rating } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={3} disabled />;
}
`;

function Demo() {
  return <Rating defaultValue={3} disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
