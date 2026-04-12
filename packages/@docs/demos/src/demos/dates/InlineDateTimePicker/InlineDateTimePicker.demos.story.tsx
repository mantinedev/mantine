import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'InlineDateTimePicker' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_range = {
  name: '⭐ Demo: range',
  render: renderDemo(demos.range),
};

export const Demo_withSeconds = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const Demo_rangeControlled = {
  name: '⭐ Demo: rangeControlled',
  render: renderDemo(demos.rangeControlled),
};

export const Demo_format = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};
