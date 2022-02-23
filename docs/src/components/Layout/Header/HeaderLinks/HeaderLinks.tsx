import React from 'react';
import { Group } from '@mantine/core';
import { HeaderLink } from './HeaderLink';

export function HeaderLinks() {
  return (
    <Group
      ml={45}
      mt={3}
      spacing={0}
      sx={(theme) => ({
        [theme.fn.smallerThan('md')]: {
          display: 'none',
        },
      })}
    >
      <HeaderLink link="https://mantine.dev/">Documentation</HeaderLink>
      <HeaderLink link="https://gallery.mantine.dev/">Gallery</HeaderLink>
      <HeaderLink link="https://faq.mantine.dev/">FAQ</HeaderLink>
    </Group>
  );
}
