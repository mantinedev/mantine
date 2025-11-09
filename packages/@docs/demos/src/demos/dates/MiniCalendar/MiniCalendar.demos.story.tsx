import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'MiniCalendar' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_locale = {
  name: '⭐ Demo: locale',
  render: renderDemo(demos.locale),
};

export const Demo_numberOfDays = {
  name: '⭐ Demo: numberOfDays',
  render: renderDemo(demos.numberOfDays),
};

export const Demo_getDayProps = {
  name: '⭐ Demo: getDayProps',
  render: renderDemo(demos.getDayProps),
};

export const Demo_minMax = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};
