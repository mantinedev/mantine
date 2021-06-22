import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { DatePicker } from './DatePicker';
import { DatePicker as DatePickerStylesApi } from './styles.api';

const defaultProps = {
  icon: '$',
  rightSection: '$',
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
  required: true,
  initiallyOpened: true,
  placeholder: 'test-placeholder',
  value: new Date(),
  withSelect: true,
};

describe('@mantine/dates/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});
  itSupportsRef(DatePicker, {}, HTMLButtonElement, 'elementRef');

  itSupportsStylesApi(
    DatePicker,
    defaultProps,
    Object.keys(DatePickerStylesApi).filter((key) => key !== 'invalid' && key !== 'placeholder'),
    'date-picker',
    'without placeholder'
  );

  itSupportsStylesApi(
    DatePicker,
    { ...defaultProps, value: null },
    Object.keys(DatePickerStylesApi).filter((key) => key !== 'invalid' && key !== 'selected'),
    'date-picker',
    'with placeholder'
  );

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@mantine/dates/DatePicker');
  });
});
