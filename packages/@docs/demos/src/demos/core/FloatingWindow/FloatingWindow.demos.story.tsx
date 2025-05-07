import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FloatingWindow' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_axis = {
  name: '⭐ Demo: axis',
  render: renderDemo(demos.axis),
};

export const Demo_constrainToViewport = {
  name: '⭐ Demo: constrainToViewport',
  render: renderDemo(demos.constrainToViewport),
};

export const Demo_constrainOffset = {
  name: '⭐ Demo: constrainOffset',
  render: renderDemo(demos.constrainOffset),
};

export const Demo_dragHandleSelector = {
  name: '⭐ Demo: dragHandleSelector',
  render: renderDemo(demos.dragHandleSelector),
};

export const Demo_enabled = {
  name: '⭐ Demo: enabled',
  render: renderDemo(demos.enabled),
};

export const Demo_setPosition = {
  name: '⭐ Demo: setPosition',
  render: renderDemo(demos.setPosition),
};
