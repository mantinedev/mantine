import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsRef,
  itSupportsOthers,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { TimeInput } from './TimeInput';

describe('@mantine/dates/TimeInput', () => {
  checkAccessibility([
    mount(
      <TimeInput
        label="test-label"
        withSeconds
        hoursLabel="Hours"
        minutesLabel="Minutes"
        secondsLabel="Seconds"
      />
    ),
    mount(<TimeInput
      label="test-label"
      withSeconds={false}
      hoursLabel="Hours"
      minutesLabel="Minutes"
    />),
  ]);

  it('has correct displayName', () => {
    expect(TimeInput.displayName).toEqual('@mantine/dates/TimeInput');
  });
});
