import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'EmojiPickerPopover' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_closeOnSelect = {
  name: '⭐ Demo: closeOnSelect',
  render: renderDemo(demos.closeOnSelect),
};

export const Demo_pickerProps = {
  name: '⭐ Demo: pickerProps',
  render: renderDemo(demos.pickerProps),
};
