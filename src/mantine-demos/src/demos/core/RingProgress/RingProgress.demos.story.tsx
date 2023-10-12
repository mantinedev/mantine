import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'RingProgress' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoLabel = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const DemoTooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const DemoSectionsProps = {
  name: '⭐ Demo: sectionsProps',
  render: renderDemo(demos.sectionsProps),
};

export const DemoRootColor = {
  name: '⭐ Demo: rootColor',
  render: renderDemo(demos.rootColor),
};
