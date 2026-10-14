import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Treemap' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};

export const Demo_color = {
  name: '⭐ Demo: color',
  render: renderDemo(demos.color),
};

export const Demo_nestedData = {
  name: '⭐ Demo: nestedData',
  render: renderDemo(demos.nestedData),
};

export const Demo_noTooltip = {
  name: '⭐ Demo: noTooltip',
  render: renderDemo(demos.noTooltip),
};

export const Demo_strokeColor = {
  name: '⭐ Demo: strokeColor',
  render: renderDemo(demos.strokeColor),
};

export const Demo_textColor = {
  name: '⭐ Demo: textColor',
  render: renderDemo(demos.textColor),
};

export const Demo_valueFormatter = {
  name: '⭐ Demo: valueFormatter',
  render: renderDemo(demos.valueFormatter),
};
