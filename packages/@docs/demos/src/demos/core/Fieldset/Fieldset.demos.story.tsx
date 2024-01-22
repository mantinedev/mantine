import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Fieldset' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
