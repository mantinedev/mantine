import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, useMantineTheme } from '@mantine/styles';
import { Burger } from '../Burger';
import { Text } from '../Text';
import { MediaQuery } from '../MediaQuery';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { AppShell } from './AppShell';

function NavbarToggle() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={
        <Header height={50} padding="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={DEFAULT_THEME.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>My app content</Text>
    </AppShell>
  );
}

storiesOf('@mantine/core/AppShell/stories/AppShell', module)
  .add('Static', () => (
    <AppShell
      header={<Header height={50}>Header</Header>}
      navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}
    >
      App shell
    </AppShell>
  ))
  .add('Static without Header', () => (
    <AppShell navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}>App shell</AppShell>
  ))
  .add('Static without Navbar', () => (
    <AppShell header={<Header height={50}>Header</Header>}>App shell</AppShell>
  ))
  .add('Fixed', () => (
    <AppShell
      fixed
      header={<Header height={50}>Header</Header>}
      navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}
    >
      App shell
    </AppShell>
  ))
  .add('Fixed without Navbar', () => (
    <AppShell fixed header={<Header height={50}>Header</Header>}>
      App shell
    </AppShell>
  ))
  .add('Fixed without Header', () => (
    <AppShell fixed navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}>
      App shell
    </AppShell>
  ))
  .add('Fixed with Navbar breakpoints', () => (
    <AppShell fixed navbar={<Navbar width={{ base: 100, sm: 200, md: 300 }}>Navbar</Navbar>}>
      App shell
    </AppShell>
  ))
  .add('With offset breakpoint', () => (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={<Navbar width={{ md: 350, lg: 400 }}>Navbar</Navbar>}
    >
      App shell
    </AppShell>
  ))
  .add('With navbar toggle', () => <NavbarToggle />)
  .add('Layout padding', () => (
    <AppShell
      padding={0}
      fixed
      navbar={
        <Navbar width={{ base: 200 }} height={500} padding="xs">
          Navbar
        </Navbar>
      }
      header={
        <Header height={60} padding="xs">
          Header
        </Header>
      }
    >
      <div style={{ background: 'silver', width: '100%', height: '100%' }} />
    </AppShell>
  ));
