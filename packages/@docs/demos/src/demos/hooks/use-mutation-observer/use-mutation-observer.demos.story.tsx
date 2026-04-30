import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useMutationObserver' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_target = {
  name: '⭐ Demo: target',
  render: renderDemo(demos.target),
};
