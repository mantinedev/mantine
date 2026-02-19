import { ArrowSquareOutIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@mantine/core';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <ArrowSquareOutIcon />
    </ActionIcon>
  );
}
`;

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <ArrowSquareOutIcon />
    </ActionIcon>
  );
}

export const disabledLink: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
