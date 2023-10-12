import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Title' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoSize = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};
