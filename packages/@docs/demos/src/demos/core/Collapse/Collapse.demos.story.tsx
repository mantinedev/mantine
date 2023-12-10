import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Collapse' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTransition = {
  name: '⭐ Demo: transition',
  render: renderDemo(demos.transition),
};

export const DemoNested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
