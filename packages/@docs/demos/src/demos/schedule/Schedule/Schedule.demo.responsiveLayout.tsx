import { Box } from '@mantine/core';
import { Schedule } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { events } from './_data';

const code = `
import { Box } from '@mantine/core';
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule events={events} layout="responsive" />
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box style={{ resize: 'horizontal', overflow: 'auto', minWidth: 300, maxWidth: '100%' }}>
      <Schedule events={events} layout="responsive" />
    </Box>
  );
}

export const responsiveLayout: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
