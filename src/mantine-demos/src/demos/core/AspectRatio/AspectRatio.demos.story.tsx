import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'AspectRatio' };

export const DemoImage = {
  name: '⭐ Demo: image',
  render: renderDemo(demos.image),
};

export const DemoMap = {
  name: '⭐ Demo: map',
  render: renderDemo(demos.map),
};

export const DemoVideo = {
  name: '⭐ Demo: video',
  render: renderDemo(demos.video),
};

export const DemoFlex = {
  name: '⭐ Demo: flex',
  render: renderDemo(demos.flex),
};
