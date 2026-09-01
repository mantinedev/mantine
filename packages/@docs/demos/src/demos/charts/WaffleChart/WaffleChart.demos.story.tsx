import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'WaffleChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const Demo_legend = {
  name: '⭐ Demo: legend',
  render: renderDemo(demos.legend),
};

export const Demo_gap = {
  name: '⭐ Demo: gap',
  render: renderDemo(demos.gap),
};

export const Demo_fillDirection = {
  name: '⭐ Demo: fillDirection',
  render: renderDemo(demos.fillDirection),
};

export const Demo_emptyColor = {
  name: '⭐ Demo: emptyColor',
  render: renderDemo(demos.emptyColor),
};
