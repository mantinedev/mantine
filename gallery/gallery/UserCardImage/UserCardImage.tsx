import React from 'react';
import { createStyles, Card, Avatar, Text, Group, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserCardImage({ image, avatar, name, job, stats }: UserCardImageProps) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar src={avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Follow
      </Button>
    </Card>
  );
}
