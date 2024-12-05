import { Grid, GridProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ColWrapper as Col } from './_col-wrapper';

function Wrapper(props: GridProps) {
  return (
    <Grid {...props} id="grid-configurator">
      <Col span={3} h={80}>
        1
      </Col>
      <Col span={3} h={120}>
        2
      </Col>
      <Col span={3} h={100}>
        3
      </Col>
    </Grid>
  );
}

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} h={80}>1</Grid.Col>
      <Grid.Col span={3} h={120}>2</Grid.Col>
      <Grid.Col span={3} h={100}>3</Grid.Col>
    </Grid>
  );
}
`;

export const flexConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      prop: 'justify',
      type: 'select',
      initialValue: 'flex-start',
      libraryValue: '__',
      data: [
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'center', value: 'center' },
        { label: 'space-between', value: 'space-between' },
        { label: 'space-around', value: 'space-around' },
      ],
    },
    {
      prop: 'align',
      type: 'select',
      initialValue: 'flex-start',
      libraryValue: '__',
      data: [
        { label: 'flex-start', value: 'flex-start' },
        { label: 'flex-end', value: 'flex-end' },
        { label: 'center', value: 'center' },
      ],
    },
  ],
};
