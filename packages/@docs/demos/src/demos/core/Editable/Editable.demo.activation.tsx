import { Editable, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Editable, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack maw={320}>
      <Editable defaultValue="Focus to edit (Tab or click)" activationMode="focus" />
      <Editable defaultValue="Click to edit" activationMode="click" />
      <Editable defaultValue="Double click to edit" activationMode="dblclick" />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack maw={320}>
      <Editable defaultValue="Focus to edit (Tab or click)" activationMode="focus" />
      <Editable defaultValue="Click to edit" activationMode="click" />
      <Editable defaultValue="Double click to edit" activationMode="dblclick" />
    </Stack>
  );
}

export const activation: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
