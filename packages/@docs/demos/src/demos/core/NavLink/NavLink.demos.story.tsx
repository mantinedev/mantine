import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'NavLink' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_active = {
  name: '⭐ Demo: active',
  render: renderDemo(demos.active),
};

export const Demo_nested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};
