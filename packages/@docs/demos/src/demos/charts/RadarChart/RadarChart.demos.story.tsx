import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'RadarChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_color = {
  name: '⭐ Demo: color',
  render: renderDemo(demos.color),
};

export const Demo_multiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const Demo_parts = {
  name: '⭐ Demo: parts',
  render: renderDemo(demos.parts),
};

export const Demo_rechartsProps = {
  name: '⭐ Demo: rechartsProps',
  render: renderDemo(demos.rechartsProps),
};

export const Demo_legend = {
  name: '⭐ Demo: legend',
  render: renderDemo(demos.legend),
};
