import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'SimpleGrid' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_responsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};

export const Demo_container = {
  name: '⭐ Demo: container',
  render: renderDemo(demos.container),
};

export const Demo_minColWidth = {
  name: '⭐ Demo: minColWidth',
  render: renderDemo(demos.minColWidth),
};

export const Demo_autoFlow = {
  name: '⭐ Demo: autoFlow',
  render: renderDemo(demos.autoFlow),
};

export const Demo_autoRows = {
  name: '⭐ Demo: autoRows',
  render: renderDemo(demos.autoRows),
};
