import { Editable } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Editable } from '@mantine/core';

function Demo() {
  return <Editable defaultValue="Click to edit this text" activationMode="click" />;
}
`;

function Demo() {
  return <Editable defaultValue="Click to edit this text" activationMode="click" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
