import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ColorWheel' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_onChangeEnd = {
  name: '⭐ Demo: onChangeEnd',
  render: renderDemo(demos.onChangeEnd),
};

export const Demo_ringColors = {
  name: '⭐ Demo: ringColors',
  render: renderDemo(demos.ringColors),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
