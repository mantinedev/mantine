import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useHeadroom' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_callbacks = {
  name: '⭐ Demo: callbacks',
  render: renderDemo(demos.callbacks),
};

export const Demo_scrollProgress = {
  name: '⭐ Demo: scrollProgress',
  render: renderDemo(demos.scrollProgress),
};
