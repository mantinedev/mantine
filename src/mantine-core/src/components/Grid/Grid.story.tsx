import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Grid } from './Grid';

storiesOf('@mantine/core/Grid/stories', module).add('Default props on MantineProvider', () => (
  <MantineProvider defaultProps={{ Grid: { columns: 24 } }}>
    <Grid>
      <Grid.Col span={12} sx={{ background: 'blue' }}>
        12 col
      </Grid.Col>
      <Grid.Col span={6} sx={{ background: 'red' }}>
        6 col
      </Grid.Col>
      <Grid.Col span={6} sx={{ background: 'green' }}>
        6 col
      </Grid.Col>
    </Grid>
  </MantineProvider>
));
