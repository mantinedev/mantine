import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'PasswordInput',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoStrengthMeter: Story = {
  name: '⭐ Demo: strengthMeter',
  render: renderDemo(demos.strengthMeter),
};

export const DemoError: Story = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoVisibilityIcon: Story = {
  name: '⭐ Demo: visibilityIcon',
  render: renderDemo(demos.visibilityIcon),
};

export const DemoControlledVisibility: Story = {
  name: '⭐ Demo: controlledVisibility',
  render: renderDemo(demos.controlledVisibility),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
