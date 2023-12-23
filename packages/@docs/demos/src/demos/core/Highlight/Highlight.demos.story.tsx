import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Highlight' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_multiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const Demo_styles = {
  name: '⭐ Demo: styles',
  render: renderDemo(demos.styles),
};

export const Demo_props = {
  name: '⭐ Demo: props',
  render: renderDemo(demos.props),
};
