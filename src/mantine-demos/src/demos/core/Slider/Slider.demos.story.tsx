import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Slider',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoCustomize: Story = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const DemoMarks: Story = {
  name: '⭐ Demo: marks',
  render: renderDemo(demos.marks),
};

export const DemoLabel: Story = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const DemoStep: Story = {
  name: '⭐ Demo: step',
  render: renderDemo(demos.step),
};

export const DemoChangeEnd: Story = {
  name: '⭐ Demo: changeEnd',
  render: renderDemo(demos.changeEnd),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoThumbSize: Story = {
  name: '⭐ Demo: thumbSize',
  render: renderDemo(demos.thumbSize),
};

export const DemoThumbChildren: Story = {
  name: '⭐ Demo: thumbChildren',
  render: renderDemo(demos.thumbChildren),
};

export const DemoScale: Story = {
  name: '⭐ Demo: scale',
  render: renderDemo(demos.scale),
};

export const DemoInverted: Story = {
  name: '⭐ Demo: inverted',
  render: renderDemo(demos.inverted),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
