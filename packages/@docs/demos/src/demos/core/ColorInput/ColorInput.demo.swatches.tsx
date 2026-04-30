import { ColorInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      maw={320}
      mx="auto"
      placeholder="Pick color"
      label="Your favorite color"
      swatches={[
        '#2e2e2e',
        '#868e96',
        '#fa5252',
        '#e64980',
        '#be4bdb',
        '#7950f2',
        '#4c6ef5',
        '#228be6',
        '#15aabf',
        '#12b886',
        '#40c057',
        '#82c91e',
        '#fab005',
        '#fd7e14',
      ]}
    />
  );
}

export const swatches: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
