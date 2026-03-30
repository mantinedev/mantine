import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useDebouncedValue' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_cancel = {
  name: '⭐ Demo: cancel',
  render: renderDemo(demos.cancel),
};

export const Demo_leading = {
  name: '⭐ Demo: leading',
  render: renderDemo(demos.leading),
};
