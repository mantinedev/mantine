import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

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
      <IconExternalLink />
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
      <IconExternalLink />
    </ActionIcon>
  );
}

export const disabledLink: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
