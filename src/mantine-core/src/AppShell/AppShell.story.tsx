import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, useMantineTheme } from '@mantine/styles';
import { Burger } from '../Burger';
import { Text } from '../Text';
import { MediaQuery } from '../MediaQuery';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import { Aside } from './Aside/Aside';
import { AppShell } from './AppShell';

const content = Array(30)
  .fill(0)
  .map(() => (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officiis labore alias nam,
      voluptate aperiam non quidem consequuntur enim unde corrupti quaerat possimus facilis. Ipsa
      quos alias doloremque at veniam?
    </div>
  ));

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
      aside={
        <Aside p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, md: 300 }}>
          <Text>Application aside</Text>
        </Aside>
      }
      header={
        <Header height={50} p="md">
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
      {content}
    </AppShell>
  );
}

function WrappedNavbar({ opened }: { opened: boolean }) {
  return (
    <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, md: 300 }}>
      <Text>Application navbar</Text>
    </Navbar>
  );
}

function WrappedHeader({ opened, setOpened }: any) {
  return (
    <Header height={50} p="md">
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
  );
}

function WrappedAppShell() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<WrappedNavbar opened={opened} />}
      header={<WrappedHeader opened={opened} setOpened={setOpened} />}
    >
      {content}
    </AppShell>
  );
}

storiesOf('AppShell/AppShell', module)
  .add('Static', () => (
    <AppShell
      header={<Header height={50}>Header</Header>}
      navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}
      hidden
    >
      {content}
    </AppShell>
  ))
  .add('Static without Header', () => (
    <AppShell navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}>{content}</AppShell>
  ))
  .add('Static without Navbar', () => (
    <AppShell header={<Header height={50}>Header</Header>}>{content}</AppShell>
  ))
  .add('Fixed', () => (
    <AppShell
      fixed
      header={<Header height={50}>Header</Header>}
      footer={<Footer height={50}>Footer</Footer>}
      navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}
    >
      {content}
    </AppShell>
  ))
  .add('Fixed without Navbar', () => (
    <AppShell fixed header={<Header height={50}>Header</Header>}>
      {content}
    </AppShell>
  ))
  .add('Fixed without Header', () => (
    <AppShell fixed navbar={<Navbar width={{ base: 300 }}>Navbar</Navbar>}>
      {content}
    </AppShell>
  ))
  .add('Fixed with Navbar breakpoints', () => (
    <AppShell fixed navbar={<Navbar width={{ base: 100, sm: 200, md: 300 }}>Navbar</Navbar>}>
      {content}
    </AppShell>
  ))
  .add('With offset breakpoint', () => (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      navbar={<Navbar width={{ md: 350, lg: 400 }}>Navbar</Navbar>}
    >
      {content}
    </AppShell>
  ))
  .add('With navbar toggle', () => <NavbarToggle />)
  .add('Layout padding', () => (
    <AppShell
      padding={0}
      fixed
      navbar={
        <Navbar width={{ base: 200 }} height={500} p="xs">
          Navbar
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Header
        </Header>
      }
    >
      <div style={{ background: 'silver', width: '100%', height: '100%' }} />
    </AppShell>
  ))
  .add('Wrapped Navbar and Header', () => <WrappedAppShell />);
