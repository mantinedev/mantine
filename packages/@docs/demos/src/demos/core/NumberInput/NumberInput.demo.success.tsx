import { NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput label="Number Input" placeholder="Number Input" success="Looks good!" />;
}
`;

function Demo() {
  return <NumberInput label="Number Input" placeholder="Number Input" success="Looks good!" />;
}

export const success: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
