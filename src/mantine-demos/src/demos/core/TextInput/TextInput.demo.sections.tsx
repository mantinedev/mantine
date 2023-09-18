import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

const code = `
import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
`;

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  maxWidth: 340,
  centered: true,
  code,
};
