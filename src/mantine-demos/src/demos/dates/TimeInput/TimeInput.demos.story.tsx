import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'TimeInput',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoWithSeconds: Story = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const DemoIcon: Story = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoPicker: Story = {
  name: '⭐ Demo: picker',
  render: renderDemo(demos.picker),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
