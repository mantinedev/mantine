import { TimeRangeInput } from '../TimeRangeInput';

const codeTemplate = (props: string) => `<TimeInput
 ${props}
/>`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: TimeRangeInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Pick time',
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
      name: 'format',
      type: 'select',
      data: [
        { label: '24', value: '24' },
        { label: '12', value: '12' },
      ],
      initialValue: '24',
      defaultValue: '24',
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

    {
      name: 'withSeconds',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
