import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'BubbleChart' };

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

export const Demo_gridColor = {
  name: '⭐ Demo: gridColor',
  render: renderDemo(demos.gridColor),
};

export const Demo_colorSchemeColor = {
  name: '⭐ Demo: colorSchemeColor',
  render: renderDemo(demos.colorSchemeColor),
};

export const Demo_valueFormatter = {
  name: '⭐ Demo: valueFormatter',
  render: renderDemo(demos.valueFormatter),
};
