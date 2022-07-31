import React from 'react';
import { Grid } from './Grid';

export default { title: 'Grid' };

export function UnexpectedRowBreak() {
  return (
    <Grid columns={24}>
      <Grid.Col sx={{ backgroundColor: 'pink' }} span={6}>
        Column 1
      </Grid.Col>
      <Grid.Col sx={{ backgroundColor: 'silver' }} span={18}>
        Column 2
      </Grid.Col>
    </Grid>
  );
}
