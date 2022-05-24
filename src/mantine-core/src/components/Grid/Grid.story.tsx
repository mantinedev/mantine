import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from './Grid';

storiesOf('Grid', module).add('Without span', () => (
  <Grid gutter="xs" columns={2}>
    <Grid.Col sm={1} sx={{ backgroundColor: 'red' }}>
      Col 1
    </Grid.Col>
    <Grid.Col sm={1} sx={{ backgroundColor: 'blue' }}>
      Col 2
    </Grid.Col>
  </Grid>
));
