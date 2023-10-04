import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Highlight',
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

export const DemoStyles: Story = {
  name: '⭐ Demo: styles',
  render: renderDemo(demos.styles),
};

export const DemoProps: Story = {
  name: '⭐ Demo: props',
  render: renderDemo(demos.props),
};
