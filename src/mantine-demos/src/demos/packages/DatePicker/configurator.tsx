import { DatePicker } from '@mantine/dates';

const codeTemplate = (props: string) => `<DatePicker
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: DatePicker,
  codeTemplate,
  configuratorProps: { multiline: true, center: false },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Event date' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Pick date',
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
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
