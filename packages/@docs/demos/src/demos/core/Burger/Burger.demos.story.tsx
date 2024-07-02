import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Burger' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_lineWidth = {
  name: '⭐ Demo: lineWidth',
  render: renderDemo(demos.lineWidth),
};
