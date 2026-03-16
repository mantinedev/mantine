import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useFullscreen' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_ref = {
  name: '⭐ Demo: ref',
  render: renderDemo(demos.ref),
};
