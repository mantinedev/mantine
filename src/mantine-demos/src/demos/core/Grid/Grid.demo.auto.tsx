import React from 'react';
import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">span=auto</Grid.Col>
      <Grid.Col span={6}>span=6</Grid.Col>
      <Grid.Col span="auto">span=auto</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span="auto">1</Col>
      <Col span={6}>2</Col>
      <Col span="auto">3</Col>
    </Grid>
  );
}

export const auto: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
