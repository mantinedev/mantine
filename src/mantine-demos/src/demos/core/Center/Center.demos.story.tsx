import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Center' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoInline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};
