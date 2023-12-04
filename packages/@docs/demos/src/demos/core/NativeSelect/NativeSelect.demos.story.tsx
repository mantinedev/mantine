import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'NativeSelect' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoOptions = {
  name: '⭐ Demo: options',
  render: renderDemo(demos.options),
};

export const DemoData = {
  name: '⭐ Demo: data',
  render: renderDemo(demos.data),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoSections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
