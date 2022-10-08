import { MantineDemo } from '@mantine/ds';
import { ColorInput } from '@mantine/core';

const codeTemplate = (props: string) => `
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
     ${props}
    />
  );
}
`;

export const inputConfigurator: MantineDemo = {
  type: 'configurator',
  component: ColorInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick color' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Your favorite color',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'withAsterisk',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
