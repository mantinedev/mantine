import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Pagination' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoSiblings = {
  name: '⭐ Demo: siblings',
  render: renderDemo(demos.siblings),
};

export const DemoBoundaries = {
  name: '⭐ Demo: boundaries',
  render: renderDemo(demos.boundaries),
};

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoComposition = {
  name: '⭐ Demo: composition',
  render: renderDemo(demos.composition),
};

export const DemoIcons = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoLinks = {
  name: '⭐ Demo: links',
  render: renderDemo(demos.links),
};
