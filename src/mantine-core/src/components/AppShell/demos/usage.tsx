import React from 'react';
import { AppShell, Navbar, Header } from '../index';

const code = `
import { AppShell, Navbar, Header } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={300} padding="md">Navbar</Navbar>}
      header={<Header height={60} padding="md">Header</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0] },
      })}
    >
      Your application goes here
    </AppShell>
  );
}
`;

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={300} padding="md">
          Navbar
        </Navbar>
      }
      header={
        <Header height={60} padding="md">
          Header
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      Your application goes here
    </AppShell>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
