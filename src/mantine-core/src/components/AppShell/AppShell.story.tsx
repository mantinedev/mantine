import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Burger } from '../Burger';
import { MediaQuery } from '../MediaQuery';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { AppShell } from './AppShell';

function NavbarToggle() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          size={{ width: 300, breakpoints: { sm: { width: '100%' } } }}
        >
          Navbar
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
              />
            </MediaQuery>
          </div>
        </Header>
      }
    >
      My app
    </AppShell>
  );
}

storiesOf('@mantine/core/AppShell/AppShell', module)
  .add('Static', () => (
    <AppShell
      header={<Header height={50}>Header</Header>}
      navbar={<Navbar size={{ width: 300 }}>Navbar</Navbar>}
    >
      App shell
    </AppShell>
  ))
  .add('Static without Header', () => (
    <AppShell navbar={<Navbar size={{ width: 300 }}>Navbar</Navbar>}>App shell</AppShell>
  ))
  .add('Static without Navbar', () => (
    <AppShell header={<Header height={50}>Header</Header>}>App shell</AppShell>
  ))
  .add('Fixed', () => (
    <AppShell
      fixed
      header={<Header height={50}>Header</Header>}
      navbar={<Navbar size={{ width: 300 }}>Navbar</Navbar>}
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
    <AppShell fixed navbar={<Navbar size={{ width: 300 }}>Navbar</Navbar>}>
      App shell
    </AppShell>
  ))
  .add('Fixed with Navbar breakpoints', () => (
    <AppShell
      fixed
      navbar={
        <Navbar size={{ width: 400, breakpoints: { sm: { width: 200 }, md: { width: 300 } } }}>
          Navbar
        </Navbar>
      }
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
          size={{
            width: 300,
            breakpoints: { sm: { width: '100%' }, md: { width: 350 }, lg: { width: 400 } },
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
