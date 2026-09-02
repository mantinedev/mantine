import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Surface' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_autoDepth = {
  name: '⭐ Demo: autoDepth',
  render: renderDemo(demos.autoDepth),
};

export const Demo_level = {
  name: '⭐ Demo: level',
  render: renderDemo(demos.level),
};
