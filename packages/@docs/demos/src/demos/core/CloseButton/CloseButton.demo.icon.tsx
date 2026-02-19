import { XCircleIcon } from '@phosphor-icons/react';
import { CloseButton } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { XCircleIcon } from '@phosphor-icons/react';
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton icon={<XCircleIcon size={18} />} />;
}
`;

function Demo() {
  return <CloseButton icon={<XCircleIcon size={18} />} />;
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
