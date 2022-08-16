import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Col span={3} order={2}>2</Col>
      <Col span={3} order={3}>3</Col>
      <Col span={3}>1</Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={3} order={2}>
        2
      </Col>
      <Col span={3} order={3}>
        3
      </Col>
      <Col span={3}>1</Col>
    </Grid>
  );
}

export const order: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
