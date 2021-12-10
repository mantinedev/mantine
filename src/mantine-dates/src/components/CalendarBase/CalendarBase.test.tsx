import React from 'react';
import {
  itSupportsClassName,
  itSupportsMargins,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  checkAccessibility,
} from '@mantine/tests';
import { mount } from 'enzyme';
import { CalendarBase } from './CalendarBase';

const labelsProps = {
  nextMonthLabel: 'next month',
  previousMonthLabel: 'previous month',
  nextYearLabel: 'next year',
  previousYearLabel: 'previous year',
  nextDecadeLabel: 'next decade',
  previousDecadeLabel: 'previous decade',
};

describe('@mantine/core/CalendarBase', () => {
  itSupportsClassName(CalendarBase, {});
  itSupportsMargins(CalendarBase, {});
  itSupportsOthers(CalendarBase, {});
  itSupportsStyle(CalendarBase, {});
  itSupportsRef(CalendarBase, {}, HTMLDivElement);

  checkAccessibility([
    mount(<CalendarBase {...labelsProps} initialLevel="date" />),
    mount(<CalendarBase {...labelsProps} initialLevel="month" />),
    mount(<CalendarBase {...labelsProps} initialLevel="year" />),
  ]);

  it('has correct displayName', () => {
    expect(CalendarBase.displayName).toEqual('@mantine/dates/CalendarBase');
  });
});
