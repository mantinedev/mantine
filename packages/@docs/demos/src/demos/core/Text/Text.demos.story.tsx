import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Text' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_linesConfigurator = {
  name: '⭐ Demo: linesConfigurator',
  render: renderDemo(demos.linesConfigurator),
};

export const Demo_lineClamp = {
  name: '⭐ Demo: lineClamp',
  render: renderDemo(demos.lineClamp),
};

export const Demo_gradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const Demo_inherit = {
  name: '⭐ Demo: inherit',
  render: renderDemo(demos.inherit),
};

export const Demo_truncate = {
  name: '⭐ Demo: truncate',
  render: renderDemo(demos.truncate),
};
