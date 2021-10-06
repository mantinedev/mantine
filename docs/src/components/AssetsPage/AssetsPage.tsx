import React from 'react';
import { Container } from '@mantine/core';
import Head from '../Head/Head';
import { Footer } from '../Footer/Footer';
import useStyles from './AssetsPage.styles';

export function AssetsPage() {
  const { classes } = useStyles();

  return (
    <>
      <Head title="Getting started" />

      <div className={classes.wrapper}>
        <Container className={classes.container} size={1100}>
          Assets
        </Container>
      </div>

      <Footer withNavbar />
    </>
  );
}
