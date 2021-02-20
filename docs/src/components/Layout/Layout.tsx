import React from 'react';
import { useMantineTheme, Container } from '@mantine/core';
import AppContainer from '../AppContainer/AppContainer';
import Navbar from '../Navbar/Navbar';
import useStyles from './Layout.styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles({ theme: useMantineTheme() });
  return (
    <AppContainer>
      <main className={classes.layout}>
        <Container className={classes.inner} size="lg">
          <Navbar className={classes.navbar} />
          <div className={classes.main}>{children}</div>
        </Container>
      </main>
    </AppContainer>
  );
}
