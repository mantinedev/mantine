import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Theming',
};
export default meta;

type Story = StoryObj;

export const DemoFocusRing: Story = {
  name: '⭐ Demo: focusRing',
  render: renderDemo(demos.focusRing),
};

export const DemoFocusClassName: Story = {
  name: '⭐ Demo: focusClassName',
  render: renderDemo(demos.focusClassName),
};

export const DemoActiveClassName: Story = {
  name: '⭐ Demo: activeClassName',
  render: renderDemo(demos.activeClassName),
};

export const DemoActiveClassNameEmpty: Story = {
  name: '⭐ Demo: activeClassNameEmpty',
  render: renderDemo(demos.activeClassNameEmpty),
};

export const DemoDefaultRadiusConfigurator: Story = {
  name: '⭐ Demo: defaultRadiusConfigurator',
  render: renderDemo(demos.defaultRadiusConfigurator),
};

export const DemoPrimaryShadeConfigurator: Story = {
  name: '⭐ Demo: primaryShadeConfigurator',
  render: renderDemo(demos.primaryShadeConfigurator),
};

export const DemoPrimaryColor: Story = {
  name: '⭐ Demo: primaryColor',
  render: renderDemo(demos.primaryColor),
};

export const DemoColorsOverride: Story = {
  name: '⭐ Demo: colorsOverride',
  render: renderDemo(demos.colorsOverride),
};

export const DemoColorsIndexConfigurator: Story = {
  name: '⭐ Demo: colorsIndexConfigurator',
  render: renderDemo(demos.colorsIndexConfigurator),
};

export const DemoColorProp: Story = {
  name: '⭐ Demo: colorProp',
  render: renderDemo(demos.colorProp),
};

export const DemoColorAndCProps: Story = {
  name: '⭐ Demo: colorAndCProps',
  render: renderDemo(demos.colorAndCProps),
};

export const DemoVariantColorsResolver: Story = {
  name: '⭐ Demo: variantColorsResolver',
  render: renderDemo(demos.variantColorsResolver),
};

export const DemoDefaultProps: Story = {
  name: '⭐ Demo: defaultProps',
  render: renderDemo(demos.defaultProps),
};

export const DemoUsePropsHook: Story = {
  name: '⭐ Demo: usePropsHook',
  render: renderDemo(demos.usePropsHook),
};

export const DemoFonts: Story = {
  name: '⭐ Demo: fonts',
  render: renderDemo(demos.fonts),
};

export const DemoHeadingsStyles: Story = {
  name: '⭐ Demo: headingsStyles',
  render: renderDemo(demos.headingsStyles),
};

export const DemoFontSizeConfigurator: Story = {
  name: '⭐ Demo: fontSizeConfigurator',
  render: renderDemo(demos.fontSizeConfigurator),
};

export const DemoColorScheme: Story = {
  name: '⭐ Demo: colorScheme',
  render: renderDemo(demos.colorScheme),
};

export const DemoColorSchemeControl: Story = {
  name: '⭐ Demo: colorSchemeControl',
  render: renderDemo(demos.colorSchemeControl),
};

export const DemoDefaultGradient: Story = {
  name: '⭐ Demo: defaultGradient',
  render: renderDemo(demos.defaultGradient),
};

export const DemoCursorType: Story = {
  name: '⭐ Demo: cursorType',
  render: renderDemo(demos.cursorType),
};
