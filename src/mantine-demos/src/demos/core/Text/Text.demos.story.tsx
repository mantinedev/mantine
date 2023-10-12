import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Text' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLinesConfigurator = {
  name: '⭐ Demo: linesConfigurator',
  render: renderDemo(demos.linesConfigurator),
};

export const DemoLineClamp = {
  name: '⭐ Demo: lineClamp',
  render: renderDemo(demos.lineClamp),
};

export const DemoGradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const DemoInherit = {
  name: '⭐ Demo: inherit',
  render: renderDemo(demos.inherit),
};

export const DemoTruncate = {
  name: '⭐ Demo: truncate',
  render: renderDemo(demos.truncate),
};
