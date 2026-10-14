import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} h={160}>tall</Grid.Col>
      <Grid.Col span={3} h={70} align="flex-start">flex-start</Grid.Col>
      <Grid.Col span={3} h={70} align="center">center</Grid.Col>
      <Grid.Col span={3} h={70} align="flex-end">flex-end</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={3} h={160}>
        tall
      </Col>
      <Col span={3} h={70} align="flex-start">
        flex-start
      </Col>
      <Col span={3} h={70} align="center">
        center
      </Col>
      <Col span={3} h={70} align="flex-end">
        flex-end
      </Col>
    </Grid>
  );
}

export const columnAlign: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
