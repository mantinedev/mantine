import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'AreaChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_stacked = {
  name: '⭐ Demo: stacked',
  render: renderDemo(demos.stacked),
};

export const Demo_percent = {
  name: '⭐ Demo: percent',
  render: renderDemo(demos.percent),
};
