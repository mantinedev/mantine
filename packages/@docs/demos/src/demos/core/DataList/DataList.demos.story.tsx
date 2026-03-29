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

export const Demo_horizontal = {
  name: '⭐ Demo: horizontal',
  render: renderDemo(demos.horizontal),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
