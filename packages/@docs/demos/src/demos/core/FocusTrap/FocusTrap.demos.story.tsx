import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FocusTrap' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoInitial = {
  name: '⭐ Demo: initial',
  render: renderDemo(demos.initial),
};
