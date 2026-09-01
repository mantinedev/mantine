import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'CandlestickChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_dataKeys = {
  name: '⭐ Demo: dataKeys',
  render: renderDemo(demos.dataKeys),
};

export const Demo_referenceLines = {
  name: '⭐ Demo: referenceLines',
  render: renderDemo(demos.referenceLines),
};

export const Demo_valueFormatter = {
  name: '⭐ Demo: valueFormatter',
  render: renderDemo(demos.valueFormatter),
};

export const Demo_maxCandleWidth = {
  name: '⭐ Demo: maxCandleWidth',
  render: renderDemo(demos.maxCandleWidth),
};

export const Demo_axisLabels = {
  name: '⭐ Demo: axisLabels',
  render: renderDemo(demos.axisLabels),
};
