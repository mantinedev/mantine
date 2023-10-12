import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Collapse',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTransition: Story = {
  name: '⭐ Demo: transition',
  render: renderDemo(demos.transition),
};

export const DemoNested: Story = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
