import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Text',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLinesConfigurator: Story = {
  name: '⭐ Demo: linesConfigurator',
  render: renderDemo(demos.linesConfigurator),
};

export const DemoLineClamp: Story = {
  name: '⭐ Demo: lineClamp',
  render: renderDemo(demos.lineClamp),
};

export const DemoGradient: Story = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const DemoInherit: Story = {
  name: '⭐ Demo: inherit',
  render: renderDemo(demos.inherit),
};

export const DemoTruncate: Story = {
  name: '⭐ Demo: truncate',
  render: renderDemo(demos.truncate),
};
