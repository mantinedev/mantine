import { Radio, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Radio variant="light" defaultChecked label="Light radio" />
      <Radio variant="light" color="teal" defaultChecked label="Teal light radio" />
      <Radio variant="light" color="grape" defaultChecked label="Grape light radio" />
      <Radio variant="light" color="#e64980" defaultChecked label="Light radio with CSS color" />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap={7}>
      <Radio variant="light" defaultChecked label="Light radio" />
      <Radio variant="light" color="teal" defaultChecked label="Teal light radio" />
      <Radio variant="light" color="grape" defaultChecked label="Grape light radio" />
      <Radio variant="light" color="#e64980" defaultChecked label="Light radio with CSS color" />
    </Stack>
  );
}

export const lightVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
