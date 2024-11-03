import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'TimeValue' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withSeconds = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const Demo_amPmLabels = {
  name: '⭐ Demo: amPmLabels',
  render: renderDemo(demos.amPmLabels),
};

export const Demo_dateObject = {
  name: '⭐ Demo: dateObject',
  render: renderDemo(demos.dateObject),
};
