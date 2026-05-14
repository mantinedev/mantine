import { Grid } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid align="stretch">
      <Grid.Col span={4} align="flex-start">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-start
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="center">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          center
        </div>
      </Grid.Col>
      <Grid.Col span={4} align="flex-end">
        <div style={{ height: '100px', background: 'var(--mantine-color-blue-light)' }}>
          flex-end
        </div>
      </Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid align="stretch">
      <Col span={4} align="flex-start" style={{ minHeight: '150px' }}>
        flex-start
      </Col>
      <Col span={4} align="center" style={{ minHeight: '150px' }}>
        center
      </Col>
      <Col span={4} align="flex-end" style={{ minHeight: '150px' }}>
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
