import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Anchor' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_decoration = {
  name: '⭐ Demo: decoration',
  render: renderDemo(demos.decoration),
};

export const Demo_textProps = {
  name: '⭐ Demo: textProps',
  render: renderDemo(demos.textProps),
};
