import React from 'react';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { useMantineColorScheme } from '@mantine/styles';
import { AppShell, Navbar, Header } from '../index';
import { Group, ActionIcon } from '../../../index';
import { MainLinks } from './_mainLinks';
import { User } from './_user';
import logo from './logo.svg';
import logoWhite from './logo-white.svg';

const code = `
import { AppShell, Navbar, Header } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={500} padding="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} padding="xs">{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
    </AppShell>
  );
}
`;

function Demo() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} padding="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group
            style={{
              height: '100%',
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 20,
              paddingRight: 20,
            }}
            position="apart"
          >
            <img alt="" src={colorScheme === 'dark' ? logoWhite : logo} width={100} />
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </ActionIcon>
          </Group>
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
