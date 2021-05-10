import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './ColWrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Grid, Col } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
    </Grid>
  );
}`;

export function GridRootDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Grid>
        <Col span={4}>1</Col>
        <Col span={4}>2</Col>
        <Col span={4}>3</Col>
      </Grid>
    </CodeDemo>
  );
}
