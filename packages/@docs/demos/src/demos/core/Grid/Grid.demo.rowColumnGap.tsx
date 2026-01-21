import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gap="md" rowGap="xl" columnGap="sm">
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
      <Grid.Col span={3}>4</Grid.Col>
      <Grid.Col span={3}>5</Grid.Col>
      <Grid.Col span={3}>6</Grid.Col>
      <Grid.Col span={3}>7</Grid.Col>
      <Grid.Col span={3}>8</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid gap="md" rowGap="xl" columnGap="sm">
      <Col span={3}>1</Col>
      <Col span={3}>2</Col>
      <Col span={3}>3</Col>
      <Col span={3}>4</Col>
      <Col span={3}>5</Col>
      <Col span={3}>6</Col>
      <Col span={3}>7</Col>
      <Col span={3}>8</Col>
    </Grid>
  );
}

export const rowColumnGap: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
