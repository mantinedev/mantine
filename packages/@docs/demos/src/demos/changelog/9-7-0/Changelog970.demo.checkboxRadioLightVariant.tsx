import { Checkbox, Radio, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="light" label="Light Checkbox" defaultChecked />
      <Checkbox variant="light" label="Light indeterminate Checkbox" indeterminate />
      <Radio variant="light" label="Light Radio" defaultChecked />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="light" label="Light Checkbox" defaultChecked />
      <Checkbox variant="light" label="Light indeterminate Checkbox" indeterminate />
      <Radio variant="light" label="Light Radio" defaultChecked />
    </Stack>
  );
}

export const checkboxRadioLightVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
