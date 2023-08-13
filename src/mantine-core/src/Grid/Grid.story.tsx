import React from 'react';
import { Grid } from './Grid';

export default { title: 'Grid' };

export function Offset0() {
  return (
    <Grid>
      <Grid.Col span={3} offsetMd={3}>
        <div style={{ background: 'silver' }}>Column 1</div>
      </Grid.Col>
      <Grid.Col span={6}>
        <div style={{ background: 'pink' }}>Column 2</div>
      </Grid.Col>
    </Grid>
  );
}

export function ResponsiveGutter() {
  return (
    <Grid gutter="xs" gutterXs={100} gutterSm={50} gutterMd={150} gutterLg={0} gutterXl={200}>
      <Grid.Col span={4}>
        <div style={{ background: 'silver' }}>Column 1</div>
      </Grid.Col>
      <Grid.Col span={8}>
        <div style={{ background: 'pink' }}>Column 2</div>
      </Grid.Col>
    </Grid>
  );
}
