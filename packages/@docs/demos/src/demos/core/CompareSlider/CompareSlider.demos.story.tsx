import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'CompareSlider' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_content = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};

export const Demo_customHandle = {
  name: '⭐ Demo: customHandle',
  render: renderDemo(demos.customHandle),
};

export const Demo_hover = {
  name: '⭐ Demo: hover',
  render: renderDemo(demos.hover),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
