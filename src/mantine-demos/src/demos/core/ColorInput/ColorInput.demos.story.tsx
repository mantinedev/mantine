import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'ColorInput',
};
export default meta;

type Story = StoryObj;

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

export const DemoFormatsConfigurator: Story = {
  name: '⭐ Demo: formatsConfigurator',
  render: renderDemo(demos.formatsConfigurator),
};

export const DemoReadOnly: Story = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const DemoRightSection: Story = {
  name: '⭐ Demo: rightSection',
  render: renderDemo(demos.rightSection),
};

export const DemoSwatches: Story = {
  name: '⭐ Demo: swatches',
  render: renderDemo(demos.swatches),
};

export const DemoSwatchesOnly: Story = {
  name: '⭐ Demo: swatchesOnly',
  render: renderDemo(demos.swatchesOnly),
};
