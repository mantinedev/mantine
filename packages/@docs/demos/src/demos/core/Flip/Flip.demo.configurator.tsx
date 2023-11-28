import { Badge, Button, Card, Center, Flip, Group, Image, Paper, Stack, Switch, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import React from 'react';

function Wrapper(props: any) {
  return (
    <Center>
      <Flip h={200} w={400} {...props}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Group justify="right">
            <Flip.Target>
              <Button color="blue" mt="md" radius="md">
                Edit Widget
              </Button>
            </Flip.Target>
          </Group>
        </Card>

        <Paper bg="dark" radius="md" withBorder p="lg">
          <Stack>
            <Title order={4} c="white">Edit Widget</Title>
            <Text c="gray" size="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </Text>
            <Switch c="white" defaultChecked label="Display image" />
            <Switch c="white" label="Auto play" />
            <Group justify="right">
              <Flip.Target>
                <Button>Close</Button>
              </Flip.Target>
            </Group>
          </Stack>
        </Paper>
      </Flip>
    </Center>
  );
}

const code = `
import { Flip } from '@mantine/core';

function Demo() {
  return (
    <Flip h={200} w={400} {{props}}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Group justify='right'>
          <Flip.Target>
            <Button color="blue" mt="md" radius="md">
              Edit Widget
            </Button>
          </Flip.Target>
        </Group>
      </Card>

      <Paper bg="dark" radius="md" withBorder p="lg">
        <Stack>
          <Title order={4} c="white">Edit Widget</Title>
          <Text c="gray" size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </Text>
          <Switch
              c="white"
              defaultChecked
              label="Display image"
          />
          <Switch c="white" label="Auto play" />
          <Group justify='right'>
            <Flip.Target>
              <Button>Close</Button>
            </Flip.Target>
          </Group>
        </Stack>
      </Paper>
    </Flip>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'direction',
      type: 'select',
      data: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
      ],
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
    },
    {
      prop: 'directionFlipIn',
      type: 'select',
      data: [
        { label: 'Negative', value: 'negative' },
        { label: 'Positive', value: 'positive' },
      ],
      initialValue: 'negative',
      libraryValue: 'negative',
    },
    {
      prop: 'directionFlipOut',
      type: 'select',
      data: [
        { label: 'Positive', value: 'positive' },
        { label: 'Negative', value: 'negative' },
      ],
      initialValue: 'positive',
      libraryValue: 'positive',
    },
    {
      prop: 'easing',
      type: 'select',
      data: [
        { label: 'Ease', value: 'ease' },
        { label: 'Ease-in', value: 'ease-in' },
        { label: 'Ease-out', value: 'ease-out' },
        { label: 'Ease-in-out', value: 'ease-in-out' },
        { label: 'Linear', value: 'linear' },
      ],
      initialValue: 'ease-in-out',
      libraryValue: 'ease-in-out',
    },
    { prop: 'perspective', type: 'string', initialValue: '1000px', libraryValue: '1000px' },
    { prop: 'duration', type: 'number', initialValue: 0.8, libraryValue: 0.8, step: 0.1, min: 0, max: 10 },
  ],
};
