import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './ColWrapper';
import Configurator from '../../../../components/Configurator/Configurator';

function GridWrapper(props: React.ComponentProps<typeof Grid>) {
  return (
    <Grid {...props}>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
      <Col span={4}>4</Col>
      <Col span={4}>5</Col>
    </Grid>
  );
}

const codeTemplate = (props: string) => `<Grid${props}>
  <Col span={4}>1</Col>
  <Col span={4}>2</Col>
  <Col span={4}>3</Col>
  <Col span={4}>4</Col>
  <Col span={4}>5</Col>
</Grid>`;

export function GridGrowConfigurator() {
  return (
    <Configurator
      component={GridWrapper}
      codeTemplate={codeTemplate}
      props={[
        {
          name: 'grow',
          type: 'boolean',
          initialValue: true,
          defaultValue: false,
        },
        {
          name: 'gutter',
          type: 'size',
          initialValue: 'md',
          defaultValue: 'md',
        },
      ]}
    />
  );
}
