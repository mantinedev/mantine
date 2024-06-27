import { Checkbox, Radio, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="outline" label="Outline Checkbox" defaultChecked />
      <Checkbox variant="outline" label="Outline indeterminate Checkbox" indeterminate />
      <Radio variant="outline" label="Outline Radio" defaultChecked />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="outline" label="Outline Checkbox" defaultChecked />
      <Checkbox variant="outline" label="Outline indeterminate Checkbox" indeterminate />
      <Radio variant="outline" label="Outline Radio" defaultChecked />
    </Stack>
  );
}

export const checkboxRadioVariant: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
