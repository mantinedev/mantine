import React from 'react';
import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={{ base: 12, md: 6, lg: 3 }}>1</Col>
      <Col span={{ base: 12, md: 6, lg: 3 }}>2</Col>
      <Col span={{ base: 12, md: 6, lg: 3 }}>3</Col>
      <Col span={{ base: 12, md: 6, lg: 3 }}>4</Col>
    </Grid>
  );
}

export const responsive: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
