import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Splitter' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_collapsible = {
  name: '⭐ Demo: collapsible',
  render: renderDemo(demos.collapsible),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_multiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const Demo_nested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};

export const Demo_redistribute = {
  name: '⭐ Demo: redistribute',
  render: renderDemo(demos.redistribute),
};

export const Demo_lineSize = {
  name: '⭐ Demo: lineSize',
  render: renderDemo(demos.lineSize),
};

export const Demo_withHandle = {
  name: '⭐ Demo: withHandle',
  render: renderDemo(demos.withHandle),
};
