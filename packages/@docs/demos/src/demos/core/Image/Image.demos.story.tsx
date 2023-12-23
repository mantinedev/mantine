import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Image' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_height = {
  name: '⭐ Demo: height',
  render: renderDemo(demos.height),
};

export const Demo_contain = {
  name: '⭐ Demo: contain',
  render: renderDemo(demos.contain),
};

export const Demo_fallback = {
  name: '⭐ Demo: fallback',
  render: renderDemo(demos.fallback),
};
