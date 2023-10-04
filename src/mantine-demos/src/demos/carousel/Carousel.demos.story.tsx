import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Carousel',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoVertical: Story = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const DemoIcons: Story = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoImages: Story = {
  name: '⭐ Demo: images',
  render: renderDemo(demos.images),
};

export const DemoMultiple: Story = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoBreakpoints: Story = {
  name: '⭐ Demo: breakpoints',
  render: renderDemo(demos.breakpoints),
};

export const DemoAutoplay: Story = {
  name: '⭐ Demo: autoplay',
  render: renderDemo(demos.autoplay),
};

export const DemoDragFree: Story = {
  name: '⭐ Demo: dragFree',
  render: renderDemo(demos.dragFree),
};

export const DemoIndicatorStyles: Story = {
  name: '⭐ Demo: indicatorStyles',
  render: renderDemo(demos.indicatorStyles),
};

export const DemoControlsStyles: Story = {
  name: '⭐ Demo: controlsStyles',
  render: renderDemo(demos.controlsStyles),
};

export const DemoControlsHover: Story = {
  name: '⭐ Demo: controlsHover',
  render: renderDemo(demos.controlsHover),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoProgress: Story = {
  name: '⭐ Demo: progress',
  render: renderDemo(demos.progress),
};

export const DemoCards: Story = {
  name: '⭐ Demo: cards',
  render: renderDemo(demos.cards),
};

export const DemoAnimationOffset: Story = {
  name: '⭐ Demo: animationOffset',
  render: renderDemo(demos.animationOffset),
};

export const DemoBrokenAnimation: Story = {
  name: '⭐ Demo: brokenAnimation',
  render: renderDemo(demos.brokenAnimation),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
