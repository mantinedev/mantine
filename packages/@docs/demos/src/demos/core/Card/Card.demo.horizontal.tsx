import { Box, Card, Group, RingProgress, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Card, Group, RingProgress, Text } from '@mantine/core';

const completed = 1887;
const total = 2334;
const stats = [
  { value: 447, label: 'Remaining' },
  { value: 76, label: 'In progress' },
];

function Demo() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card padding="sm" radius="md" withBorder orientation="horizontal">
      <Card.Section inheritPadding px="xs" withBorder>
        <RingProgress
          roundCaps
          thickness={6}
          size={150}
          sections={[{ value: (completed / total) * 100, color: 'blue' }]}
          label={
            <div>
              <Text ta="center" fz="lg">
                {((completed / total) * 100).toFixed(0)}%
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Completed
              </Text>
            </div>
          }
        />
      </Card.Section>

      <Card.Section inheritPadding px="md">
        <Text fz="xl">Project tasks</Text>
        <Box mt="xs">
          <Text>1887</Text>
          <Text fz="xs" c="dimmed">
            Completed
          </Text>
        </Box>

        <Group mt="sm">{items}</Group>
      </Card.Section>
    </Card>
  );
}
`;

const completed = 1887;
const total = 2334;
const stats = [
  { value: 447, label: 'Remaining' },
  { value: 76, label: 'In progress' },
];

function Demo() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card padding="sm" radius="md" withBorder orientation="horizontal">
      <Card.Section inheritPadding px="xs" withBorder>
        <RingProgress
          roundCaps
          thickness={6}
          size={150}
          sections={[{ value: (completed / total) * 100, color: 'blue' }]}
          label={
            <div>
              <Text ta="center" fz="lg">
                {((completed / total) * 100).toFixed(0)}%
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Completed
              </Text>
            </div>
          }
        />
      </Card.Section>

      <Card.Section inheritPadding px="md">
        <Text fz="xl">Project tasks</Text>
        <Box mt="xs">
          <Text>1887</Text>
          <Text fz="xs" c="dimmed">
            Completed
          </Text>
        </Box>

        <Group mt="sm">{items}</Group>
      </Card.Section>
    </Card>
  );
}

export const horizontal: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  maxWidth: 400,
  centered: true,
  dimmed: true,
};
