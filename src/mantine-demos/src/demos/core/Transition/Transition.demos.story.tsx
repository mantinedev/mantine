import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Transition',
};
export default meta;

type Story = StoryObj;

export const DemoCustom: Story = {
  name: '⭐ Demo: custom',
  render: renderDemo(demos.custom),
};
