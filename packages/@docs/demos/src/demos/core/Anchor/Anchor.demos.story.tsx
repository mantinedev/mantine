import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Anchor' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoDecoration = {
  name: '⭐ Demo: decoration',
  render: renderDemo(demos.decoration),
};
