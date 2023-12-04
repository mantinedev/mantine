import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'SimpleGrid' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoResponsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};
