import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FunnelChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withLabels = {
  name: '⭐ Demo: withLabels',
  render: renderDemo(demos.withLabels),
};

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const Demo_color = {
  name: '⭐ Demo: color',
  render: renderDemo(demos.color),
};

export const Demo_tooltipDataSource = {
  name: '⭐ Demo: tooltipDataSource',
  render: renderDemo(demos.tooltipDataSource),
};

export const Demo_strokeWidth = {
  name: '⭐ Demo: strokeWidth',
  render: renderDemo(demos.strokeWidth),
};

export const Demo_noTooltip = {
  name: '⭐ Demo: noTooltip',
  render: renderDemo(demos.noTooltip),
};

export const Demo_strokeColor = {
  name: '⭐ Demo: strokeColor',
  render: renderDemo(demos.strokeColor),
};
