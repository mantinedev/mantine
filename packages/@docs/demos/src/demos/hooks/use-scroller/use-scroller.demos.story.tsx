import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useScroller' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_scrollAmount = {
  name: '⭐ Demo: scrollAmount',
  render: renderDemo(demos.scrollAmount),
};

export const Demo_draggable = {
  name: '⭐ Demo: draggable',
  render: renderDemo(demos.draggable),
};
