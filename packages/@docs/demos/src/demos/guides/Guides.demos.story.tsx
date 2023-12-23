import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Guides' };

export const Demo_polymorphic = {
  name: '⭐ Demo: polymorphic',
  render: renderDemo(demos.polymorphic),
};

export const Demo_createPolymorphic = {
  name: '⭐ Demo: createPolymorphic',
  render: renderDemo(demos.createPolymorphic),
};

export const Demo_staticPolymorphic = {
  name: '⭐ Demo: staticPolymorphic',
  render: renderDemo(demos.staticPolymorphic),
};

export const Demo_newPolymorphic = {
  name: '⭐ Demo: newPolymorphic',
  render: renderDemo(demos.newPolymorphic),
};

export const Demo_logo = {
  name: '⭐ Demo: logo',
  render: renderDemo(demos.logo),
};

export const Demo_icon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const Demo_customIcon = {
  name: '⭐ Demo: customIcon',
  render: renderDemo(demos.customIcon),
};
