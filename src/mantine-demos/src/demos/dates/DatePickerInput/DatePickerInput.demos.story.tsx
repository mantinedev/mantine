import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'DatePickerInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoRange = {
  name: '⭐ Demo: range',
  render: renderDemo(demos.range),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoModal = {
  name: '⭐ Demo: modal',
  render: renderDemo(demos.modal),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoClearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoValueFormat = {
  name: '⭐ Demo: valueFormat',
  render: renderDemo(demos.valueFormat),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
