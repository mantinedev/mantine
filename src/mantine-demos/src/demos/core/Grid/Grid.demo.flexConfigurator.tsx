import React from 'react';
import { Grid, GridProps, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { ColWrapper as Col } from './_col-wrapper';

function Wrapper(props: GridProps) {
  return (
    <Grid {...props} id="grid-configurator">
      <Col span={3} style={{ minHeight: rem(80) }}>
        1
      </Col>
      <Col span={3} style={{ minHeight: rem(120) }}>
        2
      </Col>
      <Col span={3}>3</Col>
    </Grid>
  );
}

const codeTemplate = (props: string) => `
import { Grid, rem } from '@mantine/core';

function Demo() {
  return (
    <Grid${props}>
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
}
`;

export const flexConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'justify',
      type: 'select',
      initialValue: 'flex-start',
      defaultValue: 'flex-start',
      data: [
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'center', value: 'center' },
        { label: 'space-between', value: 'space-between' },
        { label: 'space-around', value: 'space-around' },
      ],
    },
    {
      name: 'align',
      type: 'select',
      initialValue: 'stretch',
      defaultValue: 'stretch',
      data: [
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'center', value: 'center' },
        { label: 'stretch', value: 'stretch' },
      ],
    },
  ],
};
