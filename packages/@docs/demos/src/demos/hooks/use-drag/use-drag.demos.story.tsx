import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useDrag' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_axis = {
  name: '⭐ Demo: axis',
  render: renderDemo(demos.axis),
};

export const Demo_swipe = {
  name: '⭐ Demo: swipe',
  render: renderDemo(demos.swipe),
};

export const Demo_scroll = {
  name: '⭐ Demo: scroll',
  render: renderDemo(demos.scroll),
};

export const Demo_filterTaps = {
  name: '⭐ Demo: filterTaps',
  render: renderDemo(demos.filterTaps),
};
