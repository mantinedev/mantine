import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Pill' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withinInput = {
  name: '⭐ Demo: withinInput',
  render: renderDemo(demos.withinInput),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
