import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'MatrixChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_cellSize = {
  name: '⭐ Demo: cellSize',
  render: renderDemo(demos.cellSize),
};

export const Demo_getCellProps = {
  name: '⭐ Demo: getCellProps',
  render: renderDemo(demos.getCellProps),
};

export const Demo_legend = {
  name: '⭐ Demo: legend',
  render: renderDemo(demos.legend),
};

export const Demo_domain = {
  name: '⭐ Demo: domain',
  render: renderDemo(demos.domain),
};

export const Demo_xLabelsRotation = {
  name: '⭐ Demo: xLabelsRotation',
  render: renderDemo(demos.xLabelsRotation),
};
