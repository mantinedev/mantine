import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Text from '../Text/Text';
import Paper from './Paper';

storiesOf('@mantine/core', module).add('Paper', () => (
  <MantineProvider>
    <ElementsGroup grow style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], padding: 80 }}>
      <Paper style={{ width: 260 }}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>

      <Paper style={{ width: 260 }} padding="xs" shadow="xs">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>

      <Paper style={{ width: 260 }} padding="sm" shadow="sm">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>

      <Paper style={{ width: 260 }} padding="md" shadow="md">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>

      <Paper style={{ width: 260 }} padding="lg" shadow="lg">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>

      <Paper style={{ width: 260 }} padding="xl" shadow="xl">
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>
    </ElementsGroup>
  </MantineProvider>
));
