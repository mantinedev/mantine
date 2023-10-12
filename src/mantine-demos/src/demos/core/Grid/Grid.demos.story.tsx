import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Grid',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoGrowConfigurator: Story = {
  name: '⭐ Demo: growConfigurator',
  render: renderDemo(demos.growConfigurator),
};

export const DemoOffset: Story = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoOrder: Story = {
  name: '⭐ Demo: order',
  render: renderDemo(demos.order),
};

export const DemoRows: Story = {
  name: '⭐ Demo: rows',
  render: renderDemo(demos.rows),
};

export const DemoFlexConfigurator: Story = {
  name: '⭐ Demo: flexConfigurator',
  render: renderDemo(demos.flexConfigurator),
};

export const DemoResponsive: Story = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};

export const DemoColumns: Story = {
  name: '⭐ Demo: columns',
  render: renderDemo(demos.columns),
};

export const DemoAuto: Story = {
  name: '⭐ Demo: auto',
  render: renderDemo(demos.auto),
};

export const DemoContent: Story = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};

export const DemoGutter: Story = {
  name: '⭐ Demo: gutter',
  render: renderDemo(demos.gutter),
};
