import { Checkbox, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="light" defaultChecked label="Light checkbox" />
      <Checkbox variant="light" indeterminate label="Light indeterminate checkbox" />
      <Checkbox variant="light" color="teal" defaultChecked label="Teal light checkbox" />
      <Checkbox variant="light" color="grape" defaultChecked label="Grape light checkbox" />
      <Checkbox variant="light" color="#e64980" defaultChecked label="Light checkbox with CSS color" />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="light" defaultChecked label="Light checkbox" />
      <Checkbox variant="light" indeterminate label="Light indeterminate checkbox" />
      <Checkbox variant="light" color="teal" defaultChecked label="Teal light checkbox" />
      <Checkbox variant="light" color="grape" defaultChecked label="Grape light checkbox" />
      <Checkbox
        variant="light"
        color="#e64980"
        defaultChecked
        label="Light checkbox with CSS color"
      />
    </Stack>
  );
}

export const lightVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
