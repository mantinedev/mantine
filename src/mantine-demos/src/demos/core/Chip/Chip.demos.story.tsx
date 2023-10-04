import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Chip',
};
export default meta;

type Story = StoryObj;

export const DemoStates: Story = {
  name: '⭐ Demo: states',
  render: renderDemo(demos.states),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoGroup: Story = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoIcon: Story = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};
