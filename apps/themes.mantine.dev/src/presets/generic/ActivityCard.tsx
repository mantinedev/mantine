import { Paper, Text, Timeline, Title } from '@mantine/core';
import { activity } from './data';

export function ActivityCard() {
  return (
    <Paper withBorder p="md" h="100%">
      <Title order={3} size="h4" mb="md">
        Recent activity
      </Title>
      <Timeline active={1} bulletSize={16} lineWidth={2}>
        {activity.map((item) => (
          <Timeline.Item key={item.title} title={item.title}>
            <Text size="sm">{item.description}</Text>
            <Text size="xs" mt={4}>
              {item.time}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </Paper>
  );
}
