import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
<Grid>
  <Grid.Col span={4}>1</Grid.Col>
  <Grid.Col span={4}>2</Grid.Col>
  <Grid.Col span={4}>3</Grid.Col>
</Grid>
`;

function Demo() {
  return (
    <Grid>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
    </Grid>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
