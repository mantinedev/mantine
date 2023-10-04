import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'FileInput',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoError: Story = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoClearable: Story = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoAccept: Story = {
  name: '⭐ Demo: accept',
  render: renderDemo(demos.accept),
};

export const DemoMultiple: Story = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoValueComponent: Story = {
  name: '⭐ Demo: valueComponent',
  render: renderDemo(demos.valueComponent),
};
