import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { itSupportsClassName, checkAccessibility } from '@mantine/tests';
import { CalendarHeader } from './CalendarHeader';

const defaultProps = {
  hasPrevious: true,
  hasNext: true,
};

const CONTROL_SELECTOR = '.mantine-CalendarHeader-calendarHeaderControl';
const LEVEL_SELECTOR = '.mantine-CalendarHeader-calendarHeaderLevel';
const LEVEL_ICON_SELECTOR = '.mantine-CalendarHeader-calendarHeaderLevelIcon';

describe('@mantine/dates/CalendarHeader', () => {
  itSupportsClassName(CalendarHeader, defaultProps);
  checkAccessibility([
    render(
      <CalendarHeader
        {...defaultProps}
        nextLabel="Next"
        previousLabel="Previous"
        label="February 2021"
      />
    ),
  ]);

  it('calls onNext/onPrevious functions when buttons are clicked', () => {
    const onNext = jest.fn();
    const onPrevious = jest.fn();
    const element = shallow(
      <CalendarHeader {...defaultProps} onNext={onNext} onPrevious={onPrevious} />
    );

    element.find(CONTROL_SELECTOR).at(0).simulate('click');
    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(0);

    element.find(CONTROL_SELECTOR).at(1).simulate('click');
    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('calls onNextLevel function when level button is clicked', () => {
    const spy = jest.fn();
    const element = shallow(<CalendarHeader {...defaultProps} onNextLevel={spy} />);
    element.find(LEVEL_SELECTOR).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('sets previous control disabled state based on hasPrevious prop', () => {
    const withPrevious = shallow(<CalendarHeader hasPrevious hasNext />);
    const withoutPrevious = shallow(<CalendarHeader hasPrevious={false} hasNext />);
    expect(withPrevious.find(CONTROL_SELECTOR).at(0).prop('disabled')).toBe(false);
    expect(withoutPrevious.find(CONTROL_SELECTOR).at(0).prop('disabled')).toBe(true);
  });

  it('sets next control disabled state based on hasNext prop', () => {
    const withNext = shallow(<CalendarHeader hasNext hasPrevious />);
    const withoutNext = shallow(<CalendarHeader hasNext={false} hasPrevious />);
    expect(withNext.find(CONTROL_SELECTOR).at(1).prop('disabled')).toBe(false);
    expect(withoutNext.find(CONTROL_SELECTOR).at(1).prop('disabled')).toBe(true);
  });

  it('sets next/previous controls labels based on props', () => {
    const element = shallow(
      <CalendarHeader {...defaultProps} nextLabel="test-next" previousLabel="test-previous" />
    );
    expect(element.find(CONTROL_SELECTOR).at(0).prop('aria-label')).toBe('test-previous');
    expect(element.find(CONTROL_SELECTOR).at(1).prop('aria-label')).toBe('test-next');
  });

  it('sets level control tabIndex based on preventLevelFocus prop', () => {
    const focusable = shallow(<CalendarHeader {...defaultProps} preventLevelFocus={false} />);
    const notFocusable = shallow(<CalendarHeader {...defaultProps} preventLevelFocus />);
    expect(focusable.find(LEVEL_SELECTOR).prop('tabIndex')).toBe(0);
    expect(notFocusable.find(LEVEL_SELECTOR).prop('tabIndex')).toBe(-1);
  });

  it('disables level control based on nextLevelDisabled prop', () => {
    const disabled = shallow(<CalendarHeader {...defaultProps} nextLevelDisabled />);
    const enabled = shallow(<CalendarHeader {...defaultProps} nextLevelDisabled={false} />);
    expect(disabled.find(LEVEL_SELECTOR).prop('disabled')).toBe(true);
    expect(enabled.find(LEVEL_SELECTOR).prop('disabled')).toBe(false);
  });

  it('does not render level icon if level control is disabled', () => {
    const disabled = shallow(<CalendarHeader {...defaultProps} nextLevelDisabled />);
    const enabled = shallow(<CalendarHeader {...defaultProps} nextLevelDisabled={false} />);
    expect(disabled.find(LEVEL_ICON_SELECTOR)).toHaveLength(0);
    expect(enabled.find(LEVEL_ICON_SELECTOR)).toHaveLength(1);
  });

  it('renders given label at level control', () => {
    const element = shallow(
      <CalendarHeader {...defaultProps} label="test-label" nextLevelDisabled />
    );
    expect(element.find(LEVEL_SELECTOR).text()).toBe('test-label');
  });

  it('has correct displayName', () => {
    expect(CalendarHeader.displayName).toEqual('@mantine/dates/CalendarHeader');
  });
});
