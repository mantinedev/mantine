import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Progress' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_compound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const Demo_tooltips = {
  name: '⭐ Demo: tooltips',
  render: renderDemo(demos.tooltips),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_transition = {
  name: '⭐ Demo: transition',
  render: renderDemo(demos.transition),
};

export const Demo_segments = {
  name: '⭐ Demo: segments',
  render: renderDemo(demos.segments),
};
