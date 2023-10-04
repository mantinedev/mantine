import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Spotlight',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoCompound: Story = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const DemoScrollable: Story = {
  name: '⭐ Demo: scrollable',
  render: renderDemo(demos.scrollable),
};

export const DemoLimit: Story = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const DemoCustomAction: Story = {
  name: '⭐ Demo: customAction',
  render: renderDemo(demos.customAction),
};

export const DemoGroups: Story = {
  name: '⭐ Demo: groups',
  render: renderDemo(demos.groups),
};
