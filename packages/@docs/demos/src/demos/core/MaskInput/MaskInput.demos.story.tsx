import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'MaskInput' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_dynamic = {
  name: '⭐ Demo: dynamic',
  render: renderDemo(demos.dynamic),
};

export const Demo_customTokens = {
  name: '⭐ Demo: customTokens',
  render: renderDemo(demos.customTokens),
};

export const Demo_regex = {
  name: '⭐ Demo: regex',
  render: renderDemo(demos.regex),
};

export const Demo_transform = {
  name: '⭐ Demo: transform',
  render: renderDemo(demos.transform),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_error = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};
