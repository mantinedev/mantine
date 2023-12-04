import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Space' };

export const DemoHorizontal = {
  name: '⭐ Demo: horizontal',
  render: renderDemo(demos.horizontal),
};

export const DemoVertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};
