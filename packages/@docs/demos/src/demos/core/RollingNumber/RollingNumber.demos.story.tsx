import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'RollingNumber' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_prefix = {
  name: '⭐ Demo: prefix',
  render: renderDemo(demos.prefix),
};

export const Demo_duration = {
  name: '⭐ Demo: duration',
  render: renderDemo(demos.duration),
};
