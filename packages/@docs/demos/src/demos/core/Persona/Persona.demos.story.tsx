import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Persona' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_initials = {
  name: '⭐ Demo: initials',
  render: renderDemo(demos.initials),
};

export const Demo_presence = {
  name: '⭐ Demo: presence',
  render: renderDemo(demos.presence),
};

export const Demo_presenceOnly = {
  name: '⭐ Demo: presenceOnly',
  render: renderDemo(demos.presenceOnly),
};

export const Demo_compound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const Demo_people = {
  name: '⭐ Demo: people',
  render: renderDemo(demos.people),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
