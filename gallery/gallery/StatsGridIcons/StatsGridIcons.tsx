import React from 'react';
import { createStyles, Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { ArrowUpRight, ArrowDownRight } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface StatsGridIconsProps {
  data: { title: string; value: string; diff: number }[];
}

export function StatsGridIcons({ data }: StatsGridIconsProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const DiffIcon = stat.diff > 0 ? ArrowUpRight : ArrowDownRight;

    return (
      <Paper withBorder padding="md" radius="md" key={stat.title}>
        <Group position="apart">
          <div>
            <Text
              color="dimmed"
              transform="uppercase"
              weight={700}
              size="xs"
              className={classes.label}
            >
              {stat.title}
            </Text>
            <Text weight={700} size="xl">
              {stat.value}
            </Text>
          </div>
          <ThemeIcon
            color="gray"
            variant="light"
            sx={(theme) => ({ color: stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6] })}
            size={38}
            radius="md"
          >
            <DiffIcon size={28} />
          </ThemeIcon>
        </Group>
        <Text color="dimmed" size="sm" mt="md">
          <Text component="span" color={stat.diff > 0 ? 'teal' : 'red'} weight={700}>
            {stat.diff}%
          </Text>{' '}
          {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
        </Text>
      </Paper>
    );
  });

  return (
    <div className={classes.root}>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {stats}
      </SimpleGrid>
    </div>
  );
}
