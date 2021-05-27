import React from 'react';
import { Grid } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

const code = `
<Grid>
  <Col span={4}>1</Col>
  <Col span={4}>2</Col>
  <Col span={4}>3</Col>
  <Col span={4}>4</Col>
</Grid>
`;

function Demo() {
  return (
    <Grid>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
      <Col span={4}>4</Col>
    </Grid>
  );
}

export const rows: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
