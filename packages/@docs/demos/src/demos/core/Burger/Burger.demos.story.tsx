import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Burger' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
