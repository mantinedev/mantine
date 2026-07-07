import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useClipboard' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_image = {
  name: '⭐ Demo: image',
  render: renderDemo(demos.image),
};
