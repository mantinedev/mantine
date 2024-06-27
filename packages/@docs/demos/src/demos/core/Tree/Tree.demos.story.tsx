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

export const Demo_renderNode = {
  name: '⭐ Demo: renderNode',
  render: renderDemo(demos.renderNode),
};

export const Demo_controller = {
  name: '⭐ Demo: controller',
  render: renderDemo(demos.controller),
};
