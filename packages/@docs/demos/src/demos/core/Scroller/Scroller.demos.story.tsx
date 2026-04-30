import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Scroller' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_scrollAmount = {
  name: '⭐ Demo: scrollAmount',
  render: renderDemo(demos.scrollAmount),
};

export const Demo_controlSize = {
  name: '⭐ Demo: controlSize',
  render: renderDemo(demos.controlSize),
};

export const Demo_customIcons = {
  name: '⭐ Demo: customIcons',
  render: renderDemo(demos.customIcons),
};

export const Demo_draggable = {
  name: '⭐ Demo: draggable',
  render: renderDemo(demos.draggable),
};
