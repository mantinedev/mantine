import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'BulletChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_label = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_barColor = {
  name: '⭐ Demo: barColor',
  render: renderDemo(demos.barColor),
};

export const Demo_barSize = {
  name: '⭐ Demo: barSize',
  render: renderDemo(demos.barSize),
};

export const Demo_valueFormatter = {
  name: '⭐ Demo: valueFormatter',
  render: renderDemo(demos.valueFormatter),
};

export const Demo_noTarget = {
  name: '⭐ Demo: noTarget',
  render: renderDemo(demos.noTarget),
};
