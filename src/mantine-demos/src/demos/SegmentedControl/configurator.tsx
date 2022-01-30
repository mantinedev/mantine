import { SegmentedControlWrapper } from './Wrapper';

const codeTemplate = (props: string) => `<SegmentedControl${props} />`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: SegmentedControlWrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'blue', defaultValue: null }],
};
