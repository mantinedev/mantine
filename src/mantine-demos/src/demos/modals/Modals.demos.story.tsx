import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Modals',
};
export default meta;

type Story = StoryObj;

export const DemoConfirm: Story = {
  name: '⭐ Demo: confirm',
  render: renderDemo(demos.confirm),
};

export const DemoContext: Story = {
  name: '⭐ Demo: context',
  render: renderDemo(demos.context),
};

export const DemoConfirmCustomize: Story = {
  name: '⭐ Demo: confirmCustomize',
  render: renderDemo(demos.confirmCustomize),
};

export const DemoMultipleSteps: Story = {
  name: '⭐ Demo: multipleSteps',
  render: renderDemo(demos.multipleSteps),
};

export const DemoContent: Story = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};
