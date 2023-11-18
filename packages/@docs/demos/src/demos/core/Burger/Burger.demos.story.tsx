import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Burger' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
