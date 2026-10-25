import { ColorPicker, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { SWATCHES } from './swatches';

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${SWATCHES.map((color) => `'${color}'`).join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <ColorPicker format="hex" defaultValue="rgba(50, 151, 194, 1)" swatches={SWATCHES} />
    </Stack>
  );
}

export const swatches: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
