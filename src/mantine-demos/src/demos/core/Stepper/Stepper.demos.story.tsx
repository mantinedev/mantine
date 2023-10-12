import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Stepper',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoIcons: Story = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoIconSizeConfigurator: Story = {
  name: '⭐ Demo: iconSizeConfigurator',
  render: renderDemo(demos.iconSizeConfigurator),
};

export const DemoIconsOnly: Story = {
  name: '⭐ Demo: iconsOnly',
  render: renderDemo(demos.iconsOnly),
};

export const DemoOrientation: Story = {
  name: '⭐ Demo: orientation',
  render: renderDemo(demos.orientation),
};

export const DemoIconPosition: Story = {
  name: '⭐ Demo: iconPosition',
  render: renderDemo(demos.iconPosition),
};

export const DemoLoading: Story = {
  name: '⭐ Demo: loading',
  render: renderDemo(demos.loading),
};

export const DemoStepColor: Story = {
  name: '⭐ Demo: stepColor',
  render: renderDemo(demos.stepColor),
};

export const DemoStylesApi3: Story = {
  name: '⭐ Demo: stylesApi3',
  render: renderDemo(demos.stylesApi3),
};

export const DemoStylesApi2: Story = {
  name: '⭐ Demo: stylesApi2',
  render: renderDemo(demos.stylesApi2),
};

export const DemoAllowStepSelect: Story = {
  name: '⭐ Demo: allowStepSelect',
  render: renderDemo(demos.allowStepSelect),
};

export const DemoAllowNextStepsSelect: Story = {
  name: '⭐ Demo: allowNextStepsSelect',
  render: renderDemo(demos.allowNextStepsSelect),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
