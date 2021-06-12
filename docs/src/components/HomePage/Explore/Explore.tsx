import React from 'react';
import { Container } from '@mantine/core';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './Explore.styles';

export function Explore() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>Explore examples</SectionTitle>
      </Container>
    </div>
  );
}
