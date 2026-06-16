import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DataList' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_divider = {
  name: '⭐ Demo: divider',
  render: renderDemo(demos.divider),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
