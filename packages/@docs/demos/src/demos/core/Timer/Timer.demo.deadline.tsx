import { useState } from 'react';
import { Timer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Timer } from '@mantine/core';

function Demo() {
  const [remaining] = useState(() => Timer.parse('2030-01-01T00:00:00'));
  return <Timer countdown startMs={remaining} format="DD:HH:mm:ss" autoStart />;
}
`;

function Demo() {
  const [remaining] = useState(() => Timer.parse('2030-01-01T00:00:00'));
  return <Timer countdown startMs={remaining} format="DD:HH:mm:ss" autoStart />;
}

export const deadline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
