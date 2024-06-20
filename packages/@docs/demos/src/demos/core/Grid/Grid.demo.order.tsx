import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>
        2
      </Col>
      <Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>
        3
      </Col>
      <Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>
        1
      </Col>
    </Grid>
  );
}

export const order: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
