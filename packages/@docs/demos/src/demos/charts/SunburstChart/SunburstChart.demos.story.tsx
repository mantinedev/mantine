import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'SunburstChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_color = {
  name: '⭐ Demo: color',
  render: renderDemo(demos.color),
};

export const Demo_noTooltip = {
  name: '⭐ Demo: noTooltip',
  render: renderDemo(demos.noTooltip),
};

export const Demo_strokeColor = {
  name: '⭐ Demo: strokeColor',
  render: renderDemo(demos.strokeColor),
};

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const Demo_gap = {
  name: '⭐ Demo: gap',
  render: renderDemo(demos.gap),
};

export const Demo_withLabels = {
  name: '⭐ Demo: withLabels',
  render: renderDemo(demos.withLabels),
};

export const Demo_innerRadius = {
  name: '⭐ Demo: innerRadius',
  render: renderDemo(demos.innerRadius),
};

export const Demo_angles = {
  name: '⭐ Demo: angles',
  render: renderDemo(demos.angles),
};

export const Demo_valueFormatter = {
  name: '⭐ Demo: valueFormatter',
  render: renderDemo(demos.valueFormatter),
};
