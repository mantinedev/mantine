import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ImageCropper' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_circle = {
  name: '⭐ Demo: circle',
  render: renderDemo(demos.circle),
};

export const Demo_aspectRatio = {
  name: '⭐ Demo: aspectRatio',
  render: renderDemo(demos.aspectRatio),
};

export const Demo_exportImage = {
  name: '⭐ Demo: exportImage',
  render: renderDemo(demos.exportImage),
};

export const Demo_controller = {
  name: '⭐ Demo: controller',
  render: renderDemo(demos.controller),
};

export const Demo_customLayout = {
  name: '⭐ Demo: customLayout',
  render: renderDemo(demos.customLayout),
};
