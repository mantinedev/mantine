import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DateTimePicker' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withSeconds = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const Demo_modal = {
  name: '⭐ Demo: modal',
  render: renderDemo(demos.modal),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_clearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const Demo_format = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
