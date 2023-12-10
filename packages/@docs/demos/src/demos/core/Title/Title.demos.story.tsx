import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Title' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoSize = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const DemoLineClamp = {
  name: '⭐ Demo: lineClamp',
  render: renderDemo(demos.lineClamp),
};
