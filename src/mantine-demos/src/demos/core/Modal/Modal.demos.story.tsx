import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Modal',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoHeader: Story = {
  name: '⭐ Demo: header',
  render: renderDemo(demos.header),
};

export const DemoSizes: Story = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoOverlay: Story = {
  name: '⭐ Demo: overlay',
  render: renderDemo(demos.overlay),
};

export const DemoOverflow: Story = {
  name: '⭐ Demo: overflow',
  render: renderDemo(demos.overflow),
};

export const DemoTransitions: Story = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoCentered: Story = {
  name: '⭐ Demo: centered',
  render: renderDemo(demos.centered),
};

export const DemoFullScreen: Story = {
  name: '⭐ Demo: fullScreen',
  render: renderDemo(demos.fullScreen),
};

export const DemoSizeAuto: Story = {
  name: '⭐ Demo: sizeAuto',
  render: renderDemo(demos.sizeAuto),
};

export const DemoScrollarea: Story = {
  name: '⭐ Demo: scrollarea',
  render: renderDemo(demos.scrollarea),
};

export const DemoComposition: Story = {
  name: '⭐ Demo: composition',
  render: renderDemo(demos.composition),
};

export const DemoOffset: Story = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoInitialFocus: Story = {
  name: '⭐ Demo: initialFocus',
  render: renderDemo(demos.initialFocus),
};

export const DemoFullScreenMobile: Story = {
  name: '⭐ Demo: fullScreenMobile',
  render: renderDemo(demos.fullScreenMobile),
};
