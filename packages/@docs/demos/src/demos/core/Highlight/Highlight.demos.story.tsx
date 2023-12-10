import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Highlight' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoStyles = {
  name: '⭐ Demo: styles',
  render: renderDemo(demos.styles),
};

export const DemoProps = {
  name: '⭐ Demo: props',
  render: renderDemo(demos.props),
};
