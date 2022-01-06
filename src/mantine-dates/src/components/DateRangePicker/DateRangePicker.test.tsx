import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@mantine/tests';
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';

const defaultProps: DateRangePickerProps = {};

describe('@mantine/dates/DateRangePicker', () => {
  itSupportsInputProps(DateRangePicker, defaultProps, 'DateRangePicker');
  itSupportsFocusEvents(DateRangePicker, defaultProps, 'input');
  itSupportsSystemProps({
    component: DateRangePicker,
    props: defaultProps,
    displayName: '@mantine/dates/DateRangePicker',
    excludeOthers: true,
    refType: HTMLInputElement,
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    render(
      <DateRangePicker value={[new Date(2021, 6, 13), new Date(2021, 7, 13)]} inputFormat="MM/YY" />
    );
    expect(screen.getByRole('textbox')).toHaveValue('07/21 – 08/21');
  });
});
