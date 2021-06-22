import {
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { DatePicker } from './DatePicker';

describe('@mantine/dates/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});
  itSupportsRef(DatePicker, {}, HTMLButtonElement, 'elementRef');

  itSupportsStylesApi(
    DatePicker,
    { icon: '$', rightSection: '$' },
    ['icon', 'withIcon', 'input', 'rightSection'],
    'input',
    'input'
  );

  itSupportsStylesApi(
    DatePicker,
    {
      label: 'test-label',
      error: 'test-error',
      description: 'test-description',
      required: true,
    },
    ['root', 'label', 'error', 'description', 'required'],
    'input-wrapper',
    'input-wrapper'
  );

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@mantine/dates/DatePicker');
  });
});
