import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'SemiCircleProgress' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_emptySegmentColor = {
  name: '⭐ Demo: emptySegmentColor',
  render: renderDemo(demos.emptySegmentColor),
};

export const Demo_labelPosition = {
  name: '⭐ Demo: labelPosition',
  render: renderDemo(demos.labelPosition),
};

export const Demo_transitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};
