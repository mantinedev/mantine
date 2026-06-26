import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'EmptyState' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_compound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const Demo_variant = {
  name: '⭐ Demo: variant',
  render: renderDemo(demos.variant),
};

export const Demo_indicatorBackground = {
  name: '⭐ Demo: indicatorBackground',
  render: renderDemo(demos.indicatorBackground),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
