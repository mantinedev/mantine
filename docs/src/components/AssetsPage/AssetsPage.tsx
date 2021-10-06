import React from 'react';
import { Container, Title } from '@mantine/core';
import Head from '../Head/Head';
import { Footer } from '../Footer/Footer';
import { Logos } from './Logos';
import { Images } from './Images';
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

          <Title order={2} mb="md" mt={50}>
            Screenshots and social media
          </Title>
          <Images />
        </Container>
      </div>

      <Footer withNavbar />
    </>
  );
}
