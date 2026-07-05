import { Timer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timer } from '@mantine/core';

function Demo() {
  // interval={10} updates the readout every 10ms, format token SS shows centiseconds
  return <Timer withControls format="mm:ss:SS" interval={10} />;
}
`;

function Demo() {
  return <Timer withControls format="mm:ss:SS" interval={10} />;
}

export const stopwatch: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
