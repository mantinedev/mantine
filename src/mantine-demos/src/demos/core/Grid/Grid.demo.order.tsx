import React from 'react';
import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={2} orderSm={1} orderLg={3}>2</Grid.Col>
      <Grid.Col span={3} order={3} orderSm={1} orderLg={2}>3</Grid.Col>
      <Grid.Col span={3} order={1} orderSm={3} orderLg={1}>1</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={3} order={2} orderSm={1} orderLg={3}>
        2
      </Col>
      <Col span={3} order={3} orderSm={1} orderLg={2}>
        3
      </Col>
      <Col span={3} order={1} orderSm={3} orderLg={1}>
        1
      </Col>
    </Grid>
  );
}

export const order: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
