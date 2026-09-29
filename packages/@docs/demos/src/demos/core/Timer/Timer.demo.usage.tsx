import { Timer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timer } from '@mantine/core';

function Demo() {
  return <Timer countdown startMs={90 * 1000} autoStart />;
}
`;

function Demo() {
  return <Timer countdown startMs={90 * 1000} autoStart />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
