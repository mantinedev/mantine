import { Group, Radio } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}

export const indicator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
