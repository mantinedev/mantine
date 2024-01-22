import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'CopyButton' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_timeout = {
  name: '⭐ Demo: timeout',
  render: renderDemo(demos.timeout),
};
