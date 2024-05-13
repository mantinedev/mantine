import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Tree' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_files = {
  name: '⭐ Demo: files',
  render: renderDemo(demos.files),
};
