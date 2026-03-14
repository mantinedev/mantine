import { ClockIcon } from '@phosphor-icons/react';
import { TimeInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ClockIcon } from '@phosphor-icons/react';
import { TimeInput } from '@mantine/dates';

function Demo() {
  return <TimeInput leftSection={<ClockIcon size={16} />} />;
}
`;

function Demo() {
  return <TimeInput leftSection={<ClockIcon size={16} />} />;
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
