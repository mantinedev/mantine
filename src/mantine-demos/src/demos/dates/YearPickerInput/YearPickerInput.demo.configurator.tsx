import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';

const codeTemplate = (props: string) => `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <YearPickerInput
     ${props}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: YearPickerInput,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick year' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Pick year',
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
