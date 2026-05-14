import { NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Strict clamping between 0 and 100"
      placeholder="Enter a number"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Strict clamping between 0 and 100"
      placeholder="Enter a number"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}

export const strictClamp: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
