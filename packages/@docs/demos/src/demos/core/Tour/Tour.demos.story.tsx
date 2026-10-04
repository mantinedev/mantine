import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Tour' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_beacon = {
  name: '⭐ Demo: beacon',
  render: renderDemo(demos.beacon),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_overlay = {
  name: '⭐ Demo: overlay',
  render: renderDemo(demos.overlay),
};

export const Demo_centered = {
  name: '⭐ Demo: centered',
  render: renderDemo(demos.centered),
};

export const Demo_compound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_position = {
  name: '⭐ Demo: position',
  render: renderDemo(demos.position),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_complex = {
  name: '⭐ Demo: complex',
  render: renderDemo(demos.complex),
};
