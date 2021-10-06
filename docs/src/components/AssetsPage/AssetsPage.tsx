import React from 'react';
import { Container, Title } from '@mantine/core';
import Head from '../Head/Head';
import { Footer } from '../Footer/Footer';
import { Logos } from './Logos';
import useStyles from './AssetsPage.styles';

export function AssetsPage() {
  const { classes } = useStyles();

  return (
    <>
      <Head title="Getting started" />

      <div className={classes.wrapper}>
        <Container className={classes.container} size={1100}>
          <Title order={2} mb="md">
            Mantine logo
          </Title>
          <Logos />
        </Container>
      </div>

      <Footer withNavbar />
    </>
  );
}
