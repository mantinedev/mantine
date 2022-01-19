import React from 'react';
import { Container } from '@mantine/core';
import useStyles from './Footer.styles';

export function Footer() {
  const { classes } = useStyles();
  return (
    <Container size="xl">
      <footer className={classes.footer}>Footer</footer>
    </Container>
  );
}
