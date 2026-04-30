import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'OverflowList' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_maxRows = {
  name: '⭐ Demo: maxRows',
  render: renderDemo(demos.maxRows),
};

export const Demo_maxVisibleItems = {
  name: '⭐ Demo: maxVisibleItems',
  render: renderDemo(demos.maxVisibleItems),
};

export const Demo_hoverCard = {
  name: '⭐ Demo: hoverCard',
  render: renderDemo(demos.hoverCard),
};
