import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'PieChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_angle = {
  name: '⭐ Demo: angle',
  render: renderDemo(demos.angle),
};

export const Demo_color = {
  name: '⭐ Demo: color',
  render: renderDemo(demos.color),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const Demo_strokeColor = {
  name: '⭐ Demo: strokeColor',
  render: renderDemo(demos.strokeColor),
};

export const Demo_strokeWidth = {
  name: '⭐ Demo: strokeWidth',
  render: renderDemo(demos.strokeWidth),
};

export const Demo_tooltipDataSource = {
  name: '⭐ Demo: tooltipDataSource',
  render: renderDemo(demos.tooltipDataSource),
};

export const Demo_withLabels = {
  name: '⭐ Demo: withLabels',
  render: renderDemo(demos.withLabels),
};
