import React from 'react';
import { Title, Text } from '@mantine/core';
import useStyles from './Contribute.styles';

export function Contribute() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Title className={classes.title}>Contribute to Mantine</Title>
      <Text style={{ maxWidth: 600 }}>
        First of all, thank you for showing interest in contributing to Mantine, all your
        contributions are extremely valuable to the project.
      </Text>

      <Title order={2} className={classes.subtitle}>
        Ways to contribute
      </Title>

      <Title order={2} className={classes.subtitle}>
        Become a maintainer
      </Title>
    </div>
  );
}
