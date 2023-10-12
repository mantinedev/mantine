import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Avatar',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPlaceholders: Story = {
  name: '⭐ Demo: placeholders',
  render: renderDemo(demos.placeholders),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoLink: Story = {
  name: '⭐ Demo: link',
  render: renderDemo(demos.link),
};

export const DemoGroup: Story = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoGroupTooltip: Story = {
  name: '⭐ Demo: groupTooltip',
  render: renderDemo(demos.groupTooltip),
};

export const DemoGradient: Story = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};
