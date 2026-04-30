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

export const Demo_nestedDataDemo = {
  name: '⭐ Demo: nestedDataDemo',
  render: renderDemo(demos.nestedDataDemo),
};

export const Demo_noTooltip = {
  name: '⭐ Demo: noTooltip',
  render: renderDemo(demos.noTooltip),
};

export const Demo_strokeColor = {
  name: '⭐ Demo: strokeColor',
  render: renderDemo(demos.strokeColor),
};
