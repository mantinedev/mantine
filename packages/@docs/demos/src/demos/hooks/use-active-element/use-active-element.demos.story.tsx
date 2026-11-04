import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useActiveElement' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_hotkey = {
  name: '⭐ Demo: hotkey',
  render: renderDemo(demos.hotkey),
};
