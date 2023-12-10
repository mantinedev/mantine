import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'CopyButton' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTimeout = {
  name: '⭐ Demo: timeout',
  render: renderDemo(demos.timeout),
};
