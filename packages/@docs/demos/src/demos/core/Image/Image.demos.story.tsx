import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Image' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoHeight = {
  name: '⭐ Demo: height',
  render: renderDemo(demos.height),
};

export const DemoContain = {
  name: '⭐ Demo: contain',
  render: renderDemo(demos.contain),
};

export const DemoFallback = {
  name: '⭐ Demo: fallback',
  render: renderDemo(demos.fallback),
};
