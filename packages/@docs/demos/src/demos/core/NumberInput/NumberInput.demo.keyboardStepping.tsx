import { NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Amount"
      description="Arrow = 1, Shift + Arrow or PageUp/PageDown = 10, Alt + Arrow = 0.5"
      defaultValue={100}
      step={1}
      largeStep={10}
      smallStep={0.5}
    />
  );
}
`;

function Demo() {
  return (
    <NumberInput
      label="Amount"
      description="Arrow = 1, Shift + Arrow or PageUp/PageDown = 10, Alt + Arrow = 0.5"
      defaultValue={100}
      step={1}
      largeStep={10}
      smallStep={0.5}
    />
  );
}

export const keyboardStepping: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 360,
};
