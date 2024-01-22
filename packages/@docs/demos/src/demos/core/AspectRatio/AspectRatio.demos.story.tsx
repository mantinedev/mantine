import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'AspectRatio' };

export const Demo_image = {
  name: '⭐ Demo: image',
  render: renderDemo(demos.image),
};

export const Demo_map = {
  name: '⭐ Demo: map',
  render: renderDemo(demos.map),
};

export const Demo_video = {
  name: '⭐ Demo: video',
  render: renderDemo(demos.video),
};

export const Demo_flex = {
  name: '⭐ Demo: flex',
  render: renderDemo(demos.flex),
};
