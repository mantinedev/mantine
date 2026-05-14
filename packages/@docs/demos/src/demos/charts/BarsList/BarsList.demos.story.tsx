import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'BarsList' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_valueFormatter = {
  name: '⭐ Demo: valueFormatter',
  render: renderDemo(demos.valueFormatter),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_barGap = {
  name: '⭐ Demo: barGap',
  render: renderDemo(demos.barGap),
};

export const Demo_minBarSize = {
  name: '⭐ Demo: minBarSize',
  render: renderDemo(demos.minBarSize),
};

export const Demo_barHeight = {
  name: '⭐ Demo: barHeight',
  render: renderDemo(demos.barHeight),
};

export const Demo_barColor = {
  name: '⭐ Demo: barColor',
  render: renderDemo(demos.barColor),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};

export const Demo_customColors = {
  name: '⭐ Demo: customColors',
  render: renderDemo(demos.customColors),
};

export const Demo_getBarProps = {
  name: '⭐ Demo: getBarProps',
  render: renderDemo(demos.getBarProps),
};

export const Demo_renderBar = {
  name: '⭐ Demo: renderBar',
  render: renderDemo(demos.renderBar),
};
