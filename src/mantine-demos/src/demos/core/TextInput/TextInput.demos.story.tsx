import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'TextInput',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoType: Story = {
  name: '⭐ Demo: type',
  render: renderDemo(demos.type),
};

export const DemoSections: Story = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
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
