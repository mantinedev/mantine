import { IconXboxX } from '@tabler/icons-react';
import { CloseButton } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconXboxX } from '@tabler/icons-react';
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}
`;

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
