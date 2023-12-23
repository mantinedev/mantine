import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Spoiler' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_transitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};
