import React from 'react';
import { Container, Title } from '@mantine/core';
import { Footer } from '../Footer/Footer';
import useStyles from './ThemeBuilder.styles';

export function ThemeBuilder() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Container className={classes.container} size={1100}>
          <Title className={classes.title}>Mantine theme builder</Title>
        </Container>
      </div>
      <Footer withNavbar />
    </>
  );
}
