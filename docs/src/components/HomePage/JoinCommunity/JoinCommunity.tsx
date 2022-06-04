import React from 'react';
import { Container } from '@mantine/core';
import { Community } from '../../Community/Community';
import useStyles from './JoinCommunity.styles';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export function JoinCommunity() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>Join the community</SectionTitle>
        <Community />
      </Container>
    </div>
  );
}
