import React from 'react';
import { Grid } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

const code = `
<Grid id="my-grid">
  <Col span={4}>1</Col>
  <Col span={4}>2</Col>
  <Col span={4}>3</Col>
</Grid>
`;

function Demo() {
  return (
    <Grid id="grid-usage">
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
