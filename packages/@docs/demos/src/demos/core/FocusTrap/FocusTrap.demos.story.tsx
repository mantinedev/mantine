import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FocusTrap' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_initial = {
  name: '⭐ Demo: initial',
  render: renderDemo(demos.initial),
};
