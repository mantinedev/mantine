import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@mantine/tests';
import { YearPicker, YearPickerProps } from './YearPicker';

const defaultProps: YearPickerProps = {};

describe('@mantine/dates/YearPicker', () => {
  itSupportsInputProps(YearPicker, defaultProps, 'YearPicker');
  itSupportsFocusEvents(YearPicker, defaultProps, 'input');
  itSupportsSystemProps({
    component: YearPicker,
    props: defaultProps,
    displayName: '@mantine/dates/YearPicker',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
