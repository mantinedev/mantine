import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'EmojiPickerInput' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_clearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const Demo_closeOnSelect = {
  name: '⭐ Demo: closeOnSelect',
  render: renderDemo(demos.closeOnSelect),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_readOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const Demo_pickerProps = {
  name: '⭐ Demo: pickerProps',
  render: renderDemo(demos.pickerProps),
};
