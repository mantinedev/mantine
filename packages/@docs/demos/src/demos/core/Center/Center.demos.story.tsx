import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Center' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_inline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};
