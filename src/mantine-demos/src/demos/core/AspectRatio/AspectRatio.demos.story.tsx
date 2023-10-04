import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'AspectRatio',
};
export default meta;

type Story = StoryObj;

export const DemoImage: Story = {
  name: '⭐ Demo: image',
  render: renderDemo(demos.image),
};

export const DemoMap: Story = {
  name: '⭐ Demo: map',
  render: renderDemo(demos.map),
};

export const DemoVideo: Story = {
  name: '⭐ Demo: video',
  render: renderDemo(demos.video),
};
