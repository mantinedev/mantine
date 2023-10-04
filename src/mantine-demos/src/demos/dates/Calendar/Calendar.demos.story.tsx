import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Calendar',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoIsStatic: Story = {
  name: '⭐ Demo: isStatic',
  render: renderDemo(demos.isStatic),
};

export const DemoPicker: Story = {
  name: '⭐ Demo: picker',
  render: renderDemo(demos.picker),
};

export const DemoWeekPicker: Story = {
  name: '⭐ Demo: weekPicker',
  render: renderDemo(demos.weekPicker),
};
