import { XIcon } from '@phosphor-icons/react';
import { Chip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Chip } from '@mantine/core';
import { XIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Chip
      icon={<XIcon size={16} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
`;

function Demo() {
  return (
    <Chip icon={<XIcon size={16} />} color="red" variant="filled" defaultChecked>
      Forbidden
    </Chip>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
