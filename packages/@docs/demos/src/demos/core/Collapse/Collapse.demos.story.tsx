import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Collapse' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_transition = {
  name: '⭐ Demo: transition',
  render: renderDemo(demos.transition),
};

export const Demo_nested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
