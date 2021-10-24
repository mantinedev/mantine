import React from 'react';
import { AppShell, Navbar, Header } from '../index';
import { MainLinks } from './_mainLinks';
import { User } from './_user';
import { Brand } from './_brand';

const code = `
import { AppShell, Navbar, Header } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={300} padding="md">Navbar</Navbar>}
      header={<Header height={60} padding="md">Header</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
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
        <Navbar width={{ base: 300 }} height={500} padding="xs">
          <Navbar.Section grow>
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} padding="xs">
          <Brand />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
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
  demoProps: { spacing: false },
  code,
};
