import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputRightSection,
  itSupportsInputIcon,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  label: 'test-label',
  hoursLabel: 'test-hours',
  minutesLabel: 'test-minutes',
  secondsLabel: 'test-seconds',
};

describe('@mantine/dates/TimeInput', () => {
  itSupportsInputRightSection(TimeInput, defaultProps);
  itSupportsInputIcon(TimeInput, defaultProps);
  itConnectsLabelAndInput(TimeInput, defaultProps);
  itSupportsFocusEvents(TimeInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: TimeInput,
    props: defaultProps,
    displayName: '@mantine/dates/TimeInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  checkAccessibility([
    <TimeInput {...defaultProps} />,
    <TimeInput {...defaultProps} withSeconds />,
  ]);

  it('renders hidden input with given name', () => {
    const value = new Date(2021, 11, 1);
    const { container } = render(<TimeInput value={value} name="test-name" />);
    expect(container.querySelector('input[type="hidden"]')).toBeInTheDocument();
  });

  it('renders correct amount of TimeField components based on withSeconds prop', () => {
    const view = render(<TimeInput {...defaultProps} withSeconds />);
    expect(screen.getByLabelText('test-hours')).toBeInTheDocument();
    expect(screen.getByLabelText('test-minutes')).toBeInTheDocument();
    expect(screen.getByLabelText('test-seconds')).toBeInTheDocument();
    view.rerender(<TimeInput {...defaultProps} withSeconds={false} />);
    expect(screen.queryAllByLabelText('test-seconds')).toHaveLength(0);
  });

  it('shows the correct value based on format prop', () => {
    const format12 = render(<TimeInput format="12" defaultValue={new Date(0, 0, 0, 15, 1)} />);
    const format24 = render(<TimeInput format="24" defaultValue={new Date(0, 0, 0, 15, 1)} />);

    expect(format12.container.querySelectorAll('input')[0].value).toBe('03');
    expect(format24.container.querySelectorAll('input')[0].value).toBe('15');
  });
});
