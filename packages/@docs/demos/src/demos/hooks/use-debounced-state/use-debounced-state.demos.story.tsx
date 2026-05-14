import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useDebouncedState' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_leading = {
  name: '⭐ Demo: leading',
  render: renderDemo(demos.leading),
};
