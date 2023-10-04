import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Input',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoComponent: Story = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const DemoMask: Story = {
  name: '⭐ Demo: mask',
  render: renderDemo(demos.mask),
};

export const DemoSections: Story = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const DemoWrapper: Story = {
  name: '⭐ Demo: wrapper',
  render: renderDemo(demos.wrapper),
};

export const DemoInputContainer: Story = {
  name: '⭐ Demo: inputContainer',
  render: renderDemo(demos.inputContainer),
};

export const DemoInputWrapperOrder: Story = {
  name: '⭐ Demo: inputWrapperOrder',
  render: renderDemo(demos.inputWrapperOrder),
};

export const DemoInputBase: Story = {
  name: '⭐ Demo: inputBase',
  render: renderDemo(demos.inputBase),
};

export const DemoCompound: Story = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const DemoPlaceholder: Story = {
  name: '⭐ Demo: placeholder',
  render: renderDemo(demos.placeholder),
};

export const DemoDefaultProps: Story = {
  name: '⭐ Demo: defaultProps',
  render: renderDemo(demos.defaultProps),
};

export const DemoSharedStyles: Story = {
  name: '⭐ Demo: sharedStyles',
  render: renderDemo(demos.sharedStyles),
};

export const DemoFocusStyles: Story = {
  name: '⭐ Demo: focusStyles',
  render: renderDemo(demos.focusStyles),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoWrapperStylesApi: Story = {
  name: '⭐ Demo: wrapperStylesApi',
  render: renderDemo(demos.wrapperStylesApi),
};

export const DemoError: Story = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};
