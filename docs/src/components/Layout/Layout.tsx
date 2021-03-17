import 'normalize.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/700.css';

import React from 'react';
import { Container } from '@mantine/core';
import MdxProvider from '../MdxProvider/MdxProvider';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import useStyles from './Layout.styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Header />
      <Navbar />

      <main className={classes.main}>
        <Container size="sm">
          <MdxProvider>{children}</MdxProvider>
        </Container>
      </main>
    </div>
  );
}
