import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'NumberInput',
};
export default meta;

type Story = StoryObj;

export const DemoRightSection: Story = {
  name: '⭐ Demo: rightSection',
  render: renderDemo(demos.rightSection),
};

export const DemoHandlers: Story = {
  name: '⭐ Demo: handlers',
  render: renderDemo(demos.handlers),
};

export const DemoAllowNegative: Story = {
  name: '⭐ Demo: allowNegative',
  render: renderDemo(demos.allowNegative),
};

export const DemoDecimalScale: Story = {
  name: '⭐ Demo: decimalScale',
  render: renderDemo(demos.decimalScale),
};

export const DemoAllowDecimal: Story = {
  name: '⭐ Demo: allowDecimal',
  render: renderDemo(demos.allowDecimal),
};

export const DemoThousandsSeparator: Story = {
  name: '⭐ Demo: thousandsSeparator',
  render: renderDemo(demos.thousandsSeparator),
};

export const DemoDecimalSeparator: Story = {
  name: '⭐ Demo: decimalSeparator',
  render: renderDemo(demos.decimalSeparator),
};

export const DemoFixedDecimalScale: Story = {
  name: '⭐ Demo: fixedDecimalScale',
  render: renderDemo(demos.fixedDecimalScale),
};

export const DemoPrefixSuffix: Story = {
  name: '⭐ Demo: prefixSuffix',
  render: renderDemo(demos.prefixSuffix),
};

export const DemoMinMax: Story = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const DemoStrictClamp: Story = {
  name: '⭐ Demo: strictClamp',
  render: renderDemo(demos.strictClamp),
};

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoError: Story = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
