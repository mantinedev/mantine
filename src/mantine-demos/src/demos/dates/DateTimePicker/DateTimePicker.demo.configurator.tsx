import { MantineDemo } from '@mantine/ds';
import { DateTimePicker } from '@mantine/dates';

const codeTemplate = (props: string) => `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DateTimePicker
     ${props}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: DateTimePicker,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Current date and time' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Current date and time',
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
