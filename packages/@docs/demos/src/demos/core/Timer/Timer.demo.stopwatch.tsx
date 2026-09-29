import { Timer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timer } from '@mantine/core';

function Demo() {
  return <Timer format="mm:ss:SS" interval={10} autoStart />;
}
`;

function Demo() {
  return <Timer format="mm:ss:SS" interval={10} autoStart />;
}

export const stopwatch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
