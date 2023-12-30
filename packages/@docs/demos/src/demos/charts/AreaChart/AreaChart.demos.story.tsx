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

export const Demo_legend = {
  name: '⭐ Demo: legend',
  render: renderDemo(demos.legend),
};

export const Demo_legendPosition = {
  name: '⭐ Demo: legendPosition',
  render: renderDemo(demos.legendPosition),
};
