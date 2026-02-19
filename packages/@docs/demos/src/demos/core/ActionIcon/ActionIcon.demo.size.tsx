import { HeartIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <HeartIcon size={24} />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <HeartIcon size={24} />
    </ActionIcon>
  );
}

export const size: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
