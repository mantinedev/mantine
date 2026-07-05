import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Timer' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_stopwatch = {
  name: '⭐ Demo: stopwatch',
  render: renderDemo(demos.stopwatch),
};

export const Demo_formats = {
  name: '⭐ Demo: formats',
  render: renderDemo(demos.formats),
};

export const Demo_segments = {
  name: '⭐ Demo: segments',
  render: renderDemo(demos.segments),
};

export const Demo_controller = {
  name: '⭐ Demo: controller',
  render: renderDemo(demos.controller),
};

export const Demo_progress = {
  name: '⭐ Demo: progress',
  render: renderDemo(demos.progress),
};

export const Demo_deadline = {
  name: '⭐ Demo: deadline',
  render: renderDemo(demos.deadline),
};
