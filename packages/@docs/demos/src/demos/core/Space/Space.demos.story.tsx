import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Space' };

export const Demo_horizontal = {
  name: '⭐ Demo: horizontal',
  render: renderDemo(demos.horizontal),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};
