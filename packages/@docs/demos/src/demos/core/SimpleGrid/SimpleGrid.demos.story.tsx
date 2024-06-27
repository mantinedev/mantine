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
