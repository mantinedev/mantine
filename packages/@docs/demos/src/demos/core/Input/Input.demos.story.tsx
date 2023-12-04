import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Input' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoComponent = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const DemoMask = {
  name: '⭐ Demo: mask',
  render: renderDemo(demos.mask),
};

export const DemoSections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const DemoWrapper = {
  name: '⭐ Demo: wrapper',
  render: renderDemo(demos.wrapper),
};

export const DemoInputContainer = {
  name: '⭐ Demo: inputContainer',
  render: renderDemo(demos.inputContainer),
};

export const DemoInputWrapperOrder = {
  name: '⭐ Demo: inputWrapperOrder',
  render: renderDemo(demos.inputWrapperOrder),
};

export const DemoInputBase = {
  name: '⭐ Demo: inputBase',
  render: renderDemo(demos.inputBase),
};

export const DemoCompound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const DemoPlaceholder = {
  name: '⭐ Demo: placeholder',
  render: renderDemo(demos.placeholder),
};

export const DemoDefaultProps = {
  name: '⭐ Demo: defaultProps',
  render: renderDemo(demos.defaultProps),
};

export const DemoSharedStyles = {
  name: '⭐ Demo: sharedStyles',
  render: renderDemo(demos.sharedStyles),
};

export const DemoFocusStyles = {
  name: '⭐ Demo: focusStyles',
  render: renderDemo(demos.focusStyles),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoWrapperStylesApi = {
  name: '⭐ Demo: wrapperStylesApi',
  render: renderDemo(demos.wrapperStylesApi),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};
