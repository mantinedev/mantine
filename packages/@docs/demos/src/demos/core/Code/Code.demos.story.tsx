import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Code' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoColors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const DemoBlock = {
  name: '⭐ Demo: block',
  render: renderDemo(demos.block),
};
