import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'ActionIcon',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoGroup: Story = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoSize: Story = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const DemoGradient: Story = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoDisabledLink: Story = {
  name: '⭐ Demo: disabledLink',
  render: renderDemo(demos.disabledLink),
};

export const DemoDisabledTooltip: Story = {
  name: '⭐ Demo: disabledTooltip',
  render: renderDemo(demos.disabledTooltip),
};

export const DemoDisabledStyles: Story = {
  name: '⭐ Demo: disabledStyles',
  render: renderDemo(demos.disabledStyles),
};

export const DemoLoading: Story = {
  name: '⭐ Demo: loading',
  render: renderDemo(demos.loading),
};

export const DemoLoaderProps: Story = {
  name: '⭐ Demo: loaderProps',
  render: renderDemo(demos.loaderProps),
};

export const DemoCustomVariant: Story = {
  name: '⭐ Demo: customVariant',
  render: renderDemo(demos.customVariant),
};

export const DemoCustomSize: Story = {
  name: '⭐ Demo: customSize',
  render: renderDemo(demos.customSize),
};
