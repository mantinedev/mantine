import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'Guides' };

export const DemoPolymorphic = {
  name: '⭐ Demo: polymorphic',
  render: renderDemo(demos.polymorphic),
};

export const DemoCreatePolymorphic = {
  name: '⭐ Demo: createPolymorphic',
  render: renderDemo(demos.createPolymorphic),
};

export const DemoStaticPolymorphic = {
  name: '⭐ Demo: staticPolymorphic',
  render: renderDemo(demos.staticPolymorphic),
};

export const DemoNewPolymorphic = {
  name: '⭐ Demo: newPolymorphic',
  render: renderDemo(demos.newPolymorphic),
};

export const DemoLogo = {
  name: '⭐ Demo: logo',
  render: renderDemo(demos.logo),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoCustomIcon = {
  name: '⭐ Demo: customIcon',
  render: renderDemo(demos.customIcon),
};
