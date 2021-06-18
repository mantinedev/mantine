import React from 'react';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Title, Text, ThemeIcon, Group, Button } from '@mantine/core';
import { CONTRIBUTE_DATA } from './data';
import useStyles from './Contribute.styles';

export function Contribute() {
  const classes = useStyles();
  const items = CONTRIBUTE_DATA.map((item) => (
    <div className={classes.card} key={item.title}>
      <div className={classes.header}>
        <ThemeIcon color={item.color} size="lg">
          <item.icon width={20} height={20} />
        </ThemeIcon>
        <Text weight={500} style={{ marginLeft: 15 }}>
          {item.title}
        </Text>
      </div>
      <Text size="sm" className={classes.description}>
        {item.description}
      </Text>
      <Button
        className={classes.control}
        component="a"
        data-size="large"
        href={item.link}
        variant="outline"
        color="gray"
        size="sm"
        rightIcon={<ArrowRightIcon width={10} height={10} />}
      >
        {item.linkLabel}
      </Button>
    </div>
  ));
  return (
    <div className={classes.wrapper}>
      <Title className={classes.title}>Contribute to Mantine</Title>
      <Text style={{ maxWidth: 600 }}>
        First of all, thank you for showing interest in contributing to Mantine, all your
        contributions are extremely valuable to the project!
      </Text>

      <Title order={2} className={classes.subtitle}>
        Ways to contribute
      </Title>

      <Group className={classes.cards} align="stretch">
        {items}
      </Group>

      <Title order={2} className={classes.subtitle}>
        Become a maintainer
      </Title>
    </div>
  );
}
