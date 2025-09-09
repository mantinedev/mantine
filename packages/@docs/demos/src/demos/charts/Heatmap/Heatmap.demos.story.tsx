import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Heatmap' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_labelsText = {
  name: '⭐ Demo: labelsText',
  render: renderDemo(demos.labelsText),
};

export const Demo_rectSize = {
  name: '⭐ Demo: rectSize',
  render: renderDemo(demos.rectSize),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const Demo_withOutsideDates = {
  name: '⭐ Demo: withOutsideDates',
  render: renderDemo(demos.withOutsideDates),
};

export const Demo_firstDayOfWeek = {
  name: '⭐ Demo: firstDayOfWeek',
  render: renderDemo(demos.firstDayOfWeek),
};

export const Demo_getRectProps = {
  name: '⭐ Demo: getRectProps',
  render: renderDemo(demos.getRectProps),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_cssColors = {
  name: '⭐ Demo: cssColors',
  render: renderDemo(demos.cssColors),
};

export const Demo_splitMonths = {
  name: '⭐ Demo: splitMonths',
  render: renderDemo(demos.splitMonths),
};
