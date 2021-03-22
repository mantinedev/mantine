import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Text } from '../Text/Text';
import { Paper } from './Paper';

const getShadows = (props?: any) =>
  ([null, 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((shadow) => (
    <Paper style={{ width: 260, margin: 50 }} key={shadow} shadow={shadow} padding="md" {...props}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, temporibus excepturi,
        placeat quam eius quisquam ad nostrum magnam molestias voluptates minima minus natus
        dignissimos reiciendis quasi repellat quos voluptas ullam.
      </Text>
    </Paper>
  ));

storiesOf('@mantine/core/Paper', module)
  .add('Shadows', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], paddingBottom: 40 }}>
      {getShadows()}
    </div>
  ))
  .add('Custom padding', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], paddingBottom: 40 }}>
      {getShadows({ padding: 'lg' })}
    </div>
  ));
