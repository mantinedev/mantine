import * as demos from './index';
import { renderDemo } from '../../../render-demo';

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
