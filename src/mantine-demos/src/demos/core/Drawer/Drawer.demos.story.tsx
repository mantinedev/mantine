import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Drawer',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPositions: Story = {
  name: '⭐ Demo: positions',
  render: renderDemo(demos.positions),
};

export const DemoSizes: Story = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoTransitions: Story = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoOverlay: Story = {
  name: '⭐ Demo: overlay',
  render: renderDemo(demos.overlay),
};

export const DemoComposition: Story = {
  name: '⭐ Demo: composition',
  render: renderDemo(demos.composition),
};

export const DemoHeader: Story = {
  name: '⭐ Demo: header',
  render: renderDemo(demos.header),
};

export const DemoInitialFocus: Story = {
  name: '⭐ Demo: initialFocus',
  render: renderDemo(demos.initialFocus),
};

export const DemoScrollarea: Story = {
  name: '⭐ Demo: scrollarea',
  render: renderDemo(demos.scrollarea),
};

export const DemoOverflow: Story = {
  name: '⭐ Demo: overflow',
  render: renderDemo(demos.overflow),
};
