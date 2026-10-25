import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { SWATCHES_SHADES } from './swatches';

const code = `
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[${SWATCHES_SHADES.map((color) => `'${color}'`).join(', ')}]}
      />

      <Text>{value}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={SWATCHES_SHADES}
      />
      <Text ta="center" mt={5}>
        {value}
      </Text>
    </>
  );
}

export const swatchesOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 220,
};
