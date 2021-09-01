import React from 'react';
import { Grid, GridProps } from '../Grid';
import { ColWrapper as Col } from './ColWrapper';

function Wrapper(props: GridProps) {
  return (
    <Grid {...props} id="grid-grow">
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
      <Col span={4}>4</Col>
      <Col span={4}>5</Col>
    </Grid>
  );
}

const codeTemplate = (props: string) => `<Grid${props} id="my-grid">
  <Col span={4}>1</Col>
  <Col span={4}>2</Col>
  <Col span={4}>3</Col>
  <Col span={4}>4</Col>
  <Col span={4}>5</Col>
</Grid>`;

export const growConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
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
  ],
};
