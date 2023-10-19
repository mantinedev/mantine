import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DateTimePicker' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoWithSeconds = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const DemoModal = {
  name: '⭐ Demo: modal',
  render: renderDemo(demos.modal),
};

export const DemoRange = {
  name: '⭐ Demo: range',
  render: renderDemo(demos.range),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoClearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoFormat = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
