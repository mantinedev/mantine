import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Anchor' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoDecoration = {
  name: '⭐ Demo: decoration',
  render: renderDemo(demos.decoration),
};
