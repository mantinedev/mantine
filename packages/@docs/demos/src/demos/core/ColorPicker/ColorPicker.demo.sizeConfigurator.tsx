import { ColorPicker, ColorPickerProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { SWATCHES } from './swatches';

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      mx="auto"
      format="rgba"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={SWATCHES}
      {...props}
    />
  );
}

const code = `
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`;

export const sizeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [{ prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' }],
};
