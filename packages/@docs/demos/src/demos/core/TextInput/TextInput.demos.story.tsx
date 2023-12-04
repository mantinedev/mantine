import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'TextInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoType = {
  name: '⭐ Demo: type',
  render: renderDemo(demos.type),
};

export const DemoSections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
