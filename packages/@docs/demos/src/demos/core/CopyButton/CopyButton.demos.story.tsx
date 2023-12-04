import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'CopyButton' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTimeout = {
  name: '⭐ Demo: timeout',
  render: renderDemo(demos.timeout),
};
