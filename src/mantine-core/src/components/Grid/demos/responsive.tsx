import React from 'react';
import { Grid } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

const code = `
import React from 'react';
import { Grid, Col } from '@mantine/core';

function Demo() {
  return (
    <Grid id="my-grid">
      <Col span={12} md={6} lg={3}>1</Col>
      <Col span={12} md={6} lg={3}>2</Col>
      <Col span={12} md={6} lg={3}>3</Col>
      <Col span={12} md={6} lg={3}>4</Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid id="grid-responsive">
      <Col span={12} md={6} lg={3}>
        1
      </Col>
      <Col span={12} md={6} lg={3}>
        2
      </Col>
      <Col span={12} md={6} lg={3}>
        3
      </Col>
      <Col span={12} md={6} lg={3}>
        4
      </Col>
    </Grid>
  );
}

export const responsive: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
