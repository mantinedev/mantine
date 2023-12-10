import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Center' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoInline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};
