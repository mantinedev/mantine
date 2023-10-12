import * as demos from './index';
import { renderDemo } from '../../../render-demo';

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
