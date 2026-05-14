import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useMask' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_complete = {
  name: '⭐ Demo: complete',
  render: renderDemo(demos.complete),
};

export const Demo_dynamic = {
  name: '⭐ Demo: dynamic',
  render: renderDemo(demos.dynamic),
};

export const Demo_customTokens = {
  name: '⭐ Demo: customTokens',
  render: renderDemo(demos.customTokens),
};

export const Demo_escape = {
  name: '⭐ Demo: escape',
  render: renderDemo(demos.escape),
};

export const Demo_regex = {
  name: '⭐ Demo: regex',
  render: renderDemo(demos.regex),
};

export const Demo_reset = {
  name: '⭐ Demo: reset',
  render: renderDemo(demos.reset),
};
