import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'AngleSlider' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_marks = {
  name: '⭐ Demo: marks',
  render: renderDemo(demos.marks),
};

export const Demo_formatLabel = {
  name: '⭐ Demo: formatLabel',
  render: renderDemo(demos.formatLabel),
};

export const Demo_onChangeEnd = {
  name: '⭐ Demo: onChangeEnd',
  render: renderDemo(demos.onChangeEnd),
};
