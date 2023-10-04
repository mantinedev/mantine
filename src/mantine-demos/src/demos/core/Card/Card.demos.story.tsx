import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Card',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLink: Story = {
  name: '⭐ Demo: link',
  render: renderDemo(demos.link),
};

export const DemoLinkSection: Story = {
  name: '⭐ Demo: linkSection',
  render: renderDemo(demos.linkSection),
};

export const DemoSection: Story = {
  name: '⭐ Demo: section',
  render: renderDemo(demos.section),
};
