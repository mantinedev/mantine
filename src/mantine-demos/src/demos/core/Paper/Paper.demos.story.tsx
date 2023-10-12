import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Paper' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
