import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'NProgress' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
