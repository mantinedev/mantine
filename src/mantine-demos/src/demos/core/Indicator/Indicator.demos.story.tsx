import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Indicator',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoInline: Story = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const DemoOffset: Story = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoProcessing: Story = {
  name: '⭐ Demo: processing',
  render: renderDemo(demos.processing),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
