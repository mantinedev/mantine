import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/ResourcesSchedule' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_dragDrop = {
  name: '⭐ Demo: dragDrop',
  render: renderDemo(demos.dragDrop),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};
