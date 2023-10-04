import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'DateTimePicker',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoWithSeconds: Story = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const DemoModal: Story = {
  name: '⭐ Demo: modal',
  render: renderDemo(demos.modal),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoClearable: Story = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoFormat: Story = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
