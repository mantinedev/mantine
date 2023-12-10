import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Paper' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
