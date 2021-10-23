import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Burger } from '../Burger';
import { Text } from '../Text';
import { MediaQuery } from '../MediaQuery';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { AppShell } from './AppShell';

function NavbarToggle() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{ main: { background: '#e5e5e5' } }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ base: 400, breakpoints: { sm: '100%', lg: 300 } }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={
        <Header height={50} padding="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
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

storiesOf('@mantine/core/AppShell/AppShell', module)
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
    <AppShell
      fixed
      navbar={<Navbar width={{ base: 400, breakpoints: { sm: 200, md: 300 } }}>Navbar</Navbar>}
    >
      App shell
    </AppShell>
  ))
  .add('With offset breakpoint', () => (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          width={{
            base: 300,
            breakpoints: { sm: '100%', md: 350, lg: 400 },
          }}
        >
          Navbar
        </Navbar>
      }
    >
      App shell
    </AppShell>
  ))
  .add('With navbar toggle', () => <NavbarToggle />);
