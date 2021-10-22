import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { AppShell } from './AppShell';

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
  ));
