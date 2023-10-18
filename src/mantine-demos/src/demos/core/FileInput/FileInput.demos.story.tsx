import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'FileInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
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

export const DemoClearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoAccept = {
  name: '⭐ Demo: accept',
  render: renderDemo(demos.accept),
};

export const DemoMultiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoValueComponent = {
  name: '⭐ Demo: valueComponent',
  render: renderDemo(demos.valueComponent),
};

export const DemoSections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};
