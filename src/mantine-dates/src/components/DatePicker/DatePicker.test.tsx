import { itSupportsClassName, itSupportsRef, itSupportsStyle } from '@mantine/tests';
import { DatePicker } from './DatePicker';

describe('@mantine/dates/DatePicker', () => {
  itSupportsClassName(DatePicker, {});
  itSupportsStyle(DatePicker, {});
  itSupportsRef(DatePicker, {}, HTMLButtonElement, 'elementRef');

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@mantine/dates/DatePicker');
  });
});
