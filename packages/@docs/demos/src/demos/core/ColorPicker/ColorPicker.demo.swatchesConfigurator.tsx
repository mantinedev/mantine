import { ColorPicker, ColorPickerProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { SWATCHES } from './swatches';

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      mx="auto"
      format="hex"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={SWATCHES}
      {...props}
    />
  );
}

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${SWATCHES.map((color) => `'${color}'`).join(', ')}]} />
  );
}
`;

export const swatchesConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'swatchesPerRow', type: 'number', initialValue: 10, libraryValue: 10, min: 5, max: 14 },
  ],
};
