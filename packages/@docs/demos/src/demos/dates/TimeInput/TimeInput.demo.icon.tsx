import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<IconClock size={16} stroke={1.5} />} />;
}
`;

function Demo() {
  return <TimeInput leftSection={<IconClock size={16} stroke={1.5} />} />;
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
