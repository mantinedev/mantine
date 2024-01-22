import React from 'react';
import { IconLock } from '@tabler/icons-react';
import { PasswordInput, rem } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PasswordInput, rem } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
`;

function Demo() {
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <PasswordInput
        leftSection={icon}
        leftSectionPointerEvents="none"
        label="With left section"
        placeholder="With left section"
      />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}

export const sections: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
