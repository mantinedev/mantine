import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Calendar } from './Calendar';
import { Calendar as CalendarStylesApi } from './styles.api';

const defaultProps = { month: new Date(), value: new Date(), withSelect: true };

describe('@mantine/dates/Calendar', () => {
  itSupportsClassName(Calendar, defaultProps);
  itSupportsOthers(Calendar, defaultProps);
  itSupportsStyle(Calendar, defaultProps);
  itSupportsStylesApi(
    Calendar,
    defaultProps,
    Object.keys(CalendarStylesApi).filter((prop) => prop !== 'calendar' && prop !== 'label'),
    'calendar',
    'with select'
  );

  itSupportsStylesApi(
    Calendar,
    { ...defaultProps, withSelect: false },
    Object.keys(CalendarStylesApi).filter(
      (prop) => prop !== 'calendar' && prop !== 'select' && prop !== 'selectGroup'
    ),
    'calendar',
    'with label'
  );

  it('has correct displayName', () => {
    expect(Calendar.displayName).toEqual('@mantine/dates/Calendar');
  });
});
