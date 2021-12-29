import { SegmentedControlWrapper } from './Wrapper';

const codeTemplate = (props: string) => `<SegmentedControl${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: SegmentedControlWrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    {
      name: 'fullWidth',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
  ],
};
