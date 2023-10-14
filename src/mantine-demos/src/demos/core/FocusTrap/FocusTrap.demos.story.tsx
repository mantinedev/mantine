import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'FocusTrap' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoInitial = {
  name: '⭐ Demo: initial',
  render: renderDemo(demos.initial),
};
