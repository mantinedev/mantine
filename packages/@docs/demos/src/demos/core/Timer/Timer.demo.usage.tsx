import { Timer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timer } from '@mantine/core';

function Demo() {
  return <Timer countdown startMs={90 * 1000} withControls />;
}
`;

function Demo() {
  return <Timer countdown startMs={90 * 1000} withControls />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
