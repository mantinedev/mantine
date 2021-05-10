import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './ColWrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `<Grid>
  <Col span={3}>1</Col>
  <Col span={3}>2</Col>
  <Col span={3} offset={3}>3</Col>
</Grid>`;

export function GridOffsetDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Grid>
        <Col span={3}>1</Col>
        <Col span={3}>2</Col>
        <Col span={3} offset={3}>
          3
        </Col>
      </Grid>
    </CodeDemo>
  );
}
