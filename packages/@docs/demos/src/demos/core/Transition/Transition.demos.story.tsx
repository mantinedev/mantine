import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Transition' };

export const Demo_custom = {
  name: '⭐ Demo: custom',
  render: renderDemo(demos.custom),
};

export const Demo_delay = {
  name: '⭐ Demo: delay',
  render: renderDemo(demos.delay),
};
