import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Calendar } from './Calendar';

const defaultProps = { month: new Date(), value: new Date() };

describe('@mantine/dates/Calendar', () => {
  itSupportsClassName(Calendar, defaultProps);
  itSupportsOthers(Calendar, defaultProps);
  itSupportsMargins(Calendar, defaultProps);
  itSupportsStyle(Calendar, defaultProps);
  itSupportsSx(Calendar, defaultProps);
  itSupportsRef(Calendar, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Calendar.displayName).toEqual('@mantine/dates/Calendar');
  });
});
