import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'DateInput',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoClearable: Story = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoFormat: Story = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};

export const DemoParser: Story = {
  name: '⭐ Demo: parser',
  render: renderDemo(demos.parser),
};

export const DemoMinMax: Story = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const DemoDeselect: Story = {
  name: '⭐ Demo: deselect',
  render: renderDemo(demos.deselect),
};

export const DemoTime: Story = {
  name: '⭐ Demo: time',
  render: renderDemo(demos.time),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
