import React from 'react';
import { RingProgress, Text, SimpleGrid, Paper, Center, Group } from '@mantine/core';
import { ArrowBottomLeftIcon, ArrowTopRightIcon } from '@modulz/radix-icons';

interface StatsRingProps {
  data: {
    label: string;
    stats: string;
    progress: number;
    color: string;
    icon: 'up' | 'down';
  }[];
}

const icons = {
  up: ArrowTopRightIcon,
  down: ArrowBottomLeftIcon,
};

export function StatsRing({ data }: StatsRingProps) {
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" padding="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon width={22} height={22} />
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="sm" weight={500}>
              {stat.label}
            </Text>
            <Text weight={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
}
