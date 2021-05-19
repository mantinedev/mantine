import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './ColWrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `<Grid columns={24}>
  <Col span={12}>1</Col>
  <Col span={6}>2</Col>
  <Col span={6}>3</Col>
</Grid>`;

export function GridColumnsDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Grid columns={24}>
        <Col span={12}>1</Col>
        <Col span={6}>2</Col>
        <Col span={6}>3</Col>
      </Grid>
    </CodeDemo>
  );
}
