import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Group } from '../Group';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Aside } from './Aside/Aside';
import { AppShell } from './AppShell';

export default { title: 'AppShell' };

export function DefaultLayout() {
  return (
    <AppShell
      header={
        <Header height={60}>
          <Group position="apart">
            <div>Section 1</div>
            <div>Section 2</div>
          </Group>
        </Header>
      }
      footer={<Footer height={40}>Footer</Footer>}
      navbar={<Navbar width={{ base: 250 }}>Navbar</Navbar>}
      aside={<Aside width={{ base: 150 }}>Aside</Aside>}
    >
      Content
    </AppShell>
  );
}

export function AltLayout() {
  return (
    <AppShell
      layout="alt"
      zIndex={342}
      header={
        <Header height={60}>
          <Group position="apart">
            <div>Section 1</div>
            <div>Section 2</div>
          </Group>
        </Header>
      }
      footer={<Footer height={40}>Footer</Footer>}
      navbar={
        <Navbar width={{ base: 250 }} zIndex={412}>
          Navbar
        </Navbar>
      }
      aside={<Aside width={{ base: 150 }}>Aside</Aside>}
    >
      Content
    </AppShell>
  );
}

export function ProviderVariant() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Navbar: {
            variants: (theme, variant) => {
              if (variant === 'provider') {
                return { root: { backgroundColor: theme.colors.blue[6], color: theme.white } };
              }

              return null;
            },
          },
        },
      }}
    >
      <Navbar height={500} width={{ base: 300 }} withBorder variant="provider">
        Navbar
      </Navbar>
    </MantineProvider>
  );
}
