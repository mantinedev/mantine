import { AreaChart } from '@mantine/charts';
import { Group, Paper, SegmentedControl, Text, Title } from '@mantine/core';
import { throughput } from './data';

export function ThroughputCard() {
  return (
    <Paper withBorder p="md" h="100%">
      <Group justify="space-between" align="flex-start" mb="lg">
        <div>
          <Title order={3} size="h4">
            Throughput
          </Title>
          <Text size="sm">Tasks opened and closed per week</Text>
        </div>
        <SegmentedControl size="xs" data={['7 weeks', 'Quarter', 'Year']} aria-label="Period" />
      </Group>
      <AreaChart
        h={220}
        data={throughput}
        dataKey="week"
        withLegend
        curveType="monotone"
        series={[
          { name: 'closed', label: 'Closed', color: 'var(--mantine-primary-color-filled)' },
          { name: 'opened', label: 'Opened', color: 'gray.5' },
        ]}
      />
    </Paper>
  );
}
