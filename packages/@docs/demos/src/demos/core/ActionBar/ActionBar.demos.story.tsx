import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ActionBar' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withActions = {
  name: '⭐ Demo: withActions',
  render: renderDemo(demos.withActions),
};

export const Demo_placement = {
  name: '⭐ Demo: placement',
  render: renderDemo(demos.placement),
};

export const Demo_closeOnEscape = {
  name: '⭐ Demo: closeOnEscape',
  render: renderDemo(demos.closeOnEscape),
};
