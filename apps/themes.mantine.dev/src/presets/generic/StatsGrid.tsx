import { Paper, SimpleGrid, Stat } from '@mantine/core';

const STATS = [
  { label: 'Open tasks', value: 48, diff: -8.2 },
  { label: 'Closed this week', value: 26, diff: 12.4 },
  { label: 'Average cycle time', value: '3.8 days', diff: -4.1 },
  { label: 'Sprint completion', value: '72%', diff: 6 },
];

export function StatsGrid() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
      {STATS.map((stat) => (
        <Paper key={stat.label} withBorder p="md">
          <Stat>
            <Stat.Label>{stat.label}</Stat.Label>
            <Stat.Value>{stat.value}</Stat.Value>
            <Stat.Diff value={stat.diff} />
          </Stat>
        </Paper>
      ))}
    </SimpleGrid>
  );
}
