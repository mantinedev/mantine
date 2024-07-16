import { SemiCircleProgress } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
`;

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}

export const emptySegmentColor: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
