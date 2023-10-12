import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'ColorPicker',
};
export default meta;

type Story = StoryObj;

export const DemoFormatsConfigurator: Story = {
  name: '⭐ Demo: formatsConfigurator',
  render: renderDemo(demos.formatsConfigurator),
};

export const DemoSizeConfigurator: Story = {
  name: '⭐ Demo: sizeConfigurator',
  render: renderDemo(demos.sizeConfigurator),
};

export const DemoSwatchesConfigurator: Story = {
  name: '⭐ Demo: swatchesConfigurator',
  render: renderDemo(demos.swatchesConfigurator),
};

export const DemoSwatches: Story = {
  name: '⭐ Demo: swatches',
  render: renderDemo(demos.swatches),
};

export const DemoSwatchesOnly: Story = {
  name: '⭐ Demo: swatchesOnly',
  render: renderDemo(demos.swatchesOnly),
};

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoFullWidth: Story = {
  name: '⭐ Demo: fullWidth',
  render: renderDemo(demos.fullWidth),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
