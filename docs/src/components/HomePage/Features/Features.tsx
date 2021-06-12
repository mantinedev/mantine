import React from 'react';
import { Text, ThemeIcon, Paper, Container, Group } from '@mantine/core';
import data from './data';
import useStyles from './Features.styles';

export function Features() {
  const classes = useStyles();

  const items = data.map((item) => (
    <Paper className={classes.item} padding="lg" shadow="xs" key={item.title}>
      <div className={classes.header}>
        <ThemeIcon size="xl" color={item.color} variant="filled">
          <item.icon style={{ width: 24, height: 24 }} />
        </ThemeIcon>
        <Text className={classes.title} size="xl" weight={500}>
          {item.title}
        </Text>
      </div>
      <Text className={classes.description}>{item.description}</Text>
    </Paper>
  ));

  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.sectionTitle}>Features</h1>
        <Container size={1100}>
          <Group align="stretch">{items}</Group>
        </Container>
      </div>
    </>
  );
}
