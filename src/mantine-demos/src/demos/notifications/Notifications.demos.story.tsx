import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Notifications',
};
export default meta;

type Story = StoryObj;

export const DemoAutoclose: Story = {
  name: '⭐ Demo: autoclose',
  render: renderDemo(demos.autoclose),
};

export const DemoBase: Story = {
  name: '⭐ Demo: base',
  render: renderDemo(demos.base),
};

export const DemoClean: Story = {
  name: '⭐ Demo: clean',
  render: renderDemo(demos.clean),
};

export const DemoLimit: Story = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const DemoUpdate: Story = {
  name: '⭐ Demo: update',
  render: renderDemo(demos.update),
};

export const DemoCustomize: Story = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};
