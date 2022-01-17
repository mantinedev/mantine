import React from 'react';
import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import { Swimming } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export function StatsCard() {
  const { classes } = useStyles();

  return (
    <Paper radius="md" withBorder padding="xl" className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <Swimming size={34} />
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title}>
        Swimming challenge
      </Text>
      <Text color="dimmed" align="center" size="sm">
        32 km / week
      </Text>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group position="apart" mt="md">
        <Text size="sm">20 / 36 km</Text>
        <Badge size="sm">4 days left</Badge>
      </Group>
    </Paper>
  );
}
