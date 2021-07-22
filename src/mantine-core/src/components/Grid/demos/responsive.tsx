import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Grid } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

const code = `
import React from 'react';
import { Grid, Col } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery('(max-width: 755px)');
  const span = isMobile ? 12 : 4;

  return (
    <Grid>
      <Col span={span}>1</Col>
      <Col span={span}>2</Col>
      <Col span={span}>3</Col>
    </Grid>
  );
}
`;

function Demo() {
  const isMobile = useMediaQuery('(max-width: 755px)');
  const span = isMobile ? 12 : 4;

  return (
    <Grid>
      <Col span={span}>1</Col>
      <Col span={span}>2</Col>
      <Col span={span}>3</Col>
    </Grid>
  );
}

export const responsive: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
