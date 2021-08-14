import React from 'react';
import { Container, Group, Text } from '@mantine/core';
import { SocialButton } from '../../SocialButton/SocialButton';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import useStyles from './Community.styles';

export function Community() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={1100}>
        <SectionTitle>Join the community</SectionTitle>
        <Text style={{ maxWidth: 600 }}>
          Mantine is a new React components and hooks library, join Mantine Discord server to ask
          questions and discuss new features or follow Mantine on Twitter to learn about new
          features and releases
        </Text>
        <Group style={{ marginTop: 30 }}>
          <SocialButton service="discord" />
          <SocialButton service="twitter" />
          <SocialButton service="email" />
        </Group>
      </Container>
    </div>
  );
}
