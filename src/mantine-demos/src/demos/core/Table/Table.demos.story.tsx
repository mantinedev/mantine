import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Table',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoCaptions: Story = {
  name: '⭐ Demo: captions',
  render: renderDemo(demos.captions),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoSpacingConfigurator: Story = {
  name: '⭐ Demo: spacingConfigurator',
  render: renderDemo(demos.spacingConfigurator),
};

export const DemoScrollContainer: Story = {
  name: '⭐ Demo: scrollContainer',
  render: renderDemo(demos.scrollContainer),
};

export const DemoScrollContainerNative: Story = {
  name: '⭐ Demo: scrollContainerNative',
  render: renderDemo(demos.scrollContainerNative),
};
