import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FloatingIndicator' };

export const Demo_direction = {
  name: '⭐ Demo: direction',
  render: renderDemo(demos.direction),
};

export const Demo_segmented = {
  name: '⭐ Demo: segmented',
  render: renderDemo(demos.segmented),
};

export const Demo_tabs = {
  name: '⭐ Demo: tabs',
  render: renderDemo(demos.tabs),
};
