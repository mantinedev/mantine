import { Checkbox, CheckboxProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: (props: CheckboxProps) => <Checkbox {...props} defaultChecked />,
  code,
  centered: true,
  controls: [
    {
      prop: 'labelPosition',
      type: 'segmented',
      data: [
        { value: 'right', label: 'Right' },
        { value: 'left', label: 'Left' },
      ],
      initialValue: 'right',
      libraryValue: 'right',
    },
    { prop: 'label', type: 'string', initialValue: 'I agree to sell my privacy', libraryValue: '' },
    { prop: 'description', type: 'string', initialValue: '', libraryValue: '' },
    { prop: 'error', type: 'string', initialValue: '', libraryValue: '' },
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: 'blue' },
    {
      prop: 'variant',
      type: 'segmented',
      data: [
        { value: 'filled', label: 'Filled' },
        { value: 'outline', label: 'Outline' },
      ],
      initialValue: 'filled',
      libraryValue: 'filled',
    },
    { prop: 'radius', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'size', type: 'size', initialValue: 'sm', libraryValue: 'sm' },
    { prop: 'disabled', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'indeterminate', type: 'boolean', initialValue: false, libraryValue: false },
  ],
};
