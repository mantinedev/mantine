import { Radio } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="lime.9"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`;

function Demo() {
  return (
    <Radio
      iconColor="lime.9"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}

export const iconColor: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
