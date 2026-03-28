import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useDebouncedCallback' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_unmount = {
  name: '⭐ Demo: unmount',
  render: renderDemo(demos.unmount),
};
