import React, { useState } from 'react';
import { AppShell, Navbar, Header, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import Head from '../components/Head/Head';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head title="AppShell demo" />
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 400 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
        header={
          <Header height={70} padding="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
    </>
  );
}
