import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Text } from '../Text/Text';
import { Paper } from './Paper';

const getShadows = (props?: any) =>
  ([null, 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((shadow) => (
    <Paper style={{ width: 260, margin: 30 }} key={shadow} shadow={shadow} padding="md" {...props}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
        placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
        dignissimos reiciendis quasi repellat quos voluptas ullam.
      </Text>
    </Paper>
  ));

storiesOf('@mantine/core/Paper', module)
  .add('Shadows', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], padding: 40 }}>{getShadows()}</div>
  ))
  .add('Custom shadow', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], padding: 40 }}>
      <Paper
        shadow="13px 18px 25px #e5e5e5, 1px 3px 3px #e5e5e5, -1px 3px 3px #e5e5e5"
        style={{ width: 260 }}
        padding="md"
      >
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
          placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
          dignissimos reiciendis quasi repellat quos voluptas ullam.
        </Text>
      </Paper>
    </div>
  ))
  .add('Custom padding', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], padding: 40 }}>
      {getShadows({ padding: 'lg' })}
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40 }}>
      {getShadows({ themeOverride: { colorScheme: 'dark' } })}
    </div>
  ));
