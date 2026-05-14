import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'SankeyChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_color = {
  name: '⭐ Demo: color',
  render: renderDemo(demos.color),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_linkOpacity = {
  name: '⭐ Demo: linkOpacity',
  render: renderDemo(demos.linkOpacity),
};

export const Demo_nodeWidth = {
  name: '⭐ Demo: nodeWidth',
  render: renderDemo(demos.nodeWidth),
};

export const Demo_noTooltip = {
  name: '⭐ Demo: noTooltip',
  render: renderDemo(demos.noTooltip),
};
