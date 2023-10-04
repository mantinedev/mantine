import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Button',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoDisabledStyles: Story = {
  name: '⭐ Demo: disabledStyles',
  render: renderDemo(demos.disabledStyles),
};

export const DemoCompact: Story = {
  name: '⭐ Demo: compact',
  render: renderDemo(demos.compact),
};

export const DemoLoading: Story = {
  name: '⭐ Demo: loading',
  render: renderDemo(demos.loading),
};

export const DemoLoaderProps: Story = {
  name: '⭐ Demo: loaderProps',
  render: renderDemo(demos.loaderProps),
};

export const DemoGradient: Story = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const DemoFullWidth: Story = {
  name: '⭐ Demo: fullWidth',
  render: renderDemo(demos.fullWidth),
};

export const DemoGroup: Story = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoDisabledTooltip: Story = {
  name: '⭐ Demo: disabledTooltip',
  render: renderDemo(demos.disabledTooltip),
};

export const DemoCustomVariant: Story = {
  name: '⭐ Demo: customVariant',
  render: renderDemo(demos.customVariant),
};

export const DemoSections: Story = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const DemoSectionsJustify: Story = {
  name: '⭐ Demo: sectionsJustify',
  render: renderDemo(demos.sectionsJustify),
};

export const DemoDisabledLink: Story = {
  name: '⭐ Demo: disabledLink',
  render: renderDemo(demos.disabledLink),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
