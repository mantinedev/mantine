import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'YearPickerInput',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple: Story = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoRange: Story = {
  name: '⭐ Demo: range',
  render: renderDemo(demos.range),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoModal: Story = {
  name: '⭐ Demo: modal',
  render: renderDemo(demos.modal),
};

export const DemoIcon: Story = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoClearable: Story = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoValueFormat: Story = {
  name: '⭐ Demo: valueFormat',
  render: renderDemo(demos.valueFormat),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
