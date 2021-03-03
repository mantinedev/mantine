import React from 'react';
import { Container } from '@mantine/core';
import AppContainer from '../AppContainer/AppContainer';
import MdxProvider from '../MdxProvider/MdxProvider';
import Navbar from '../Navbar/Navbar';
import useStyles from './Layout.styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <AppContainer>
      <main className={classes.layout}>
        <div className={classes.inner}>
          <Navbar />
          <div className={classes.main}>
            <Container size="sm">
              <MdxProvider>{children}</MdxProvider>
            </Container>
          </div>
        </div>
      </main>
    </AppContainer>
  );
}
