import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Styles',
};
export default meta;

type Story = StoryObj;

export const DemoClassName: Story = {
  name: '⭐ Demo: className',
  render: renderDemo(demos.className),
};

export const DemoGlobalClasses: Story = {
  name: '⭐ Demo: globalClasses',
  render: renderDemo(demos.globalClasses),
};

export const DemoResponsive: Story = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};

export const DemoSizesMedia: Story = {
  name: '⭐ Demo: sizesMedia',
  render: renderDemo(demos.sizesMedia),
};

export const DemoUseMediaQueryHook: Story = {
  name: '⭐ Demo: useMediaQueryHook',
  render: renderDemo(demos.useMediaQueryHook),
};

export const DemoClassNames: Story = {
  name: '⭐ Demo: classNames',
  render: renderDemo(demos.classNames),
};

export const DemoStyles: Story = {
  name: '⭐ Demo: styles',
  render: renderDemo(demos.styles),
};

export const DemoResponsiveStyleProps: Story = {
  name: '⭐ Demo: responsiveStyleProps',
  render: renderDemo(demos.responsiveStyleProps),
};

export const DemoDirectionControl: Story = {
  name: '⭐ Demo: directionControl',
  render: renderDemo(demos.directionControl),
};

export const DemoRtlMixin: Story = {
  name: '⭐ Demo: rtlMixin',
  render: renderDemo(demos.rtlMixin),
};

export const DemoDataAttributes: Story = {
  name: '⭐ Demo: dataAttributes',
  render: renderDemo(demos.dataAttributes),
};

export const DemoUnstyled: Story = {
  name: '⭐ Demo: unstyled',
  render: renderDemo(demos.unstyled),
};

export const DemoVars: Story = {
  name: '⭐ Demo: vars',
  render: renderDemo(demos.vars),
};

export const DemoCustomVariant: Story = {
  name: '⭐ Demo: customVariant',
  render: renderDemo(demos.customVariant),
};

export const DemoDataSize: Story = {
  name: '⭐ Demo: dataSize',
  render: renderDemo(demos.dataSize),
};

export const DemoClassNamesProps: Story = {
  name: '⭐ Demo: classNamesProps',
  render: renderDemo(demos.classNamesProps),
};

export const DemoRemSlider: Story = {
  name: '⭐ Demo: remSlider',
  render: renderDemo(demos.remSlider),
};

export const DemoHiddenVisible: Story = {
  name: '⭐ Demo: hiddenVisible',
  render: renderDemo(demos.hiddenVisible),
};
