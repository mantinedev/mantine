import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  expectNoPopover,
  expectOpenedPopover,
  expectValue,
  clickControl,
  itSupportsClearableProps,
  itSupportsYearsListProps,
  itSupportsMonthsListProps,
} from '../../tests';
import { DateInput, DateInputProps } from './DateInput';

const defaultProps: DateInputProps = {
  defaultDate: new Date(2022, 3, 11),
  popoverProps: { transitionDuration: 0, withinPortal: false },
  ariaLabels: {
    monthLevelControl: 'level-control',
    yearLevelControl: 'level-control',
    decadeLevelControl: 'level-control',
    nextMonth: 'next',
    previousMonth: 'previous',
    nextYear: 'next',
    previousYear: 'previous',
    nextDecade: 'next',
    previousDecade: 'previous',
  },
};

function getInput(container: HTMLElement) {
  return container.querySelector('[data-dates-input]');
}

describe('@mantine/dates/DateInput', () => {
  itSupportsClearableProps(DateInput, { ...defaultProps, defaultValue: new Date(2022, 3, 11) });
  itSupportsYearsListProps(DateInput, {
    ...defaultProps,
    defaultLevel: 'decade',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionDuration: 0 },
  });
  itSupportsMonthsListProps(DateInput, {
    ...defaultProps,
    defaultLevel: 'year',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionDuration: 0 },
  });

  it('opens/closes dropdown when input is focused/blurred', async () => {
    const { container } = render(<DateInput {...defaultProps} />);
    expectNoPopover(container);

    await userEvent.tab();
    expect(getInput(container)).toHaveFocus();
    expectOpenedPopover(container);

    await userEvent.tab();
    expect(document.body).toHaveFocus();
    expectNoPopover(container);
  });

  it('does not open popover if readOnly prop is set', async () => {
    const { container } = render(<DateInput {...defaultProps} readOnly />);
    expectNoPopover(container);
    await userEvent.tab();
    expectNoPopover(container);
  });

  it('closes popover after date control was clicked', async () => {
    const { container } = render(<DateInput {...defaultProps} />);
    await userEvent.tab();
    await clickControl(container, 10);
    expectNoPopover(container);
  });

  it('opens popover when input is clicked', async () => {
    const { container } = render(<DateInput {...defaultProps} />);
    await userEvent.tab();
    await clickControl(container, 10);
    await userEvent.click(getInput(container));
    expectOpenedPopover(container);
  });

  it('allows changing levels in popover', async () => {
    const { container } = render(<DateInput {...defaultProps} />);
    await userEvent.tab();
    await userEvent.click(screen.getByLabelText('level-control'));
    await userEvent.click(screen.getByLabelText('level-control'));
    await userEvent.click(screen.getByLabelText('previous'));
    await userEvent.click(container.querySelector('table button'));
    await userEvent.click(container.querySelector('table button'));
    await userEvent.click(container.querySelectorAll('table button')[4]);
    expect(getInput(container)).toHaveFocus();
    expectValue(container, 'January 1, 2010');
  });

  it('supports uncontrolled state (dropdown click)', async () => {
    const { container } = render(<DateInput {...defaultProps} />);
    await userEvent.tab();
    await clickControl(container, 4);
    expectValue(container, 'April 1, 2022');
  });

  it('supports controlled state (dropdown click)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateInput {...defaultProps} value={new Date(2022, 3, 11)} onChange={spy} />
    );
    await userEvent.tab();
    await clickControl(container, 4);
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenCalledWith(new Date(2022, 3, 1));
  });

  it('supports uncontrolled state (free input)', async () => {
    const { container } = render(<DateInput {...defaultProps} />);
    await userEvent.tab();
    await userEvent.type(getInput(container), 'April 1, 2022');
    await userEvent.tab();
    expectValue(container, 'April 1, 2022');
  });

  it('supports controlled state (free input)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateInput {...defaultProps} value={new Date(2022, 3, 11)} onChange={spy} />
    );
    await userEvent.tab();
    await userEvent.clear(getInput(container));
    await userEvent.type(getInput(container), 'April 1, 2022');
    await userEvent.tab();
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 3, 1));
  });

  it('clears input when clear button is clicked (uncontrolled)', async () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        clearable
        defaultValue={new Date(2022, 3, 11)}
        clearButtonProps={{ 'aria-label': 'clear-button' }}
      />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.click(screen.getByLabelText('clear-button'));
    expectValue(container, '');
  });

  it('clears input when clear button is clicked (controlled)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateInput
        {...defaultProps}
        clearable
        value={new Date(2022, 3, 11)}
        onChange={spy}
        clearButtonProps={{ 'aria-label': 'clear-button' }}
      />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.click(screen.getByLabelText('clear-button'));
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenLastCalledWith(null);
  });

  it('allows to clear input value when allowDeselect is set (uncontrolled)', async () => {
    const { container } = render(
      <DateInput {...defaultProps} allowDeselect defaultValue={new Date(2022, 3, 11)} />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.clear(getInput(container));
    await userEvent.tab();
    expectValue(container, '');
  });

  it('does not allow to clear input value when allowDeselect is not set (uncontrolled)', async () => {
    const { container } = render(
      <DateInput {...defaultProps} allowDeselect={false} defaultValue={new Date(2022, 3, 11)} />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.clear(getInput(container));
    await userEvent.tab();
    expectValue(container, 'April 11, 2022');
  });

  it('allows to clear input value when allowDeselect is set (controlled)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateInput {...defaultProps} allowDeselect value={new Date(2022, 3, 11)} onChange={spy} />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.clear(getInput(container));
    await userEvent.tab();
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenLastCalledWith(null);
  });

  it('calls onClick when input is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<DateInput {...defaultProps} onClick={spy} />);
    await userEvent.click(getInput(container));
    expect(spy).toHaveBeenCalled();
  });

  it('render hidden input with given value', () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        value={new Date(2022, 3, 11)}
        name="hidden-name"
        form="hidden-form"
      />
    );
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveValue(new Date(2022, 3, 11).toISOString());
    expect(input).toHaveAttribute('name', 'hidden-name');
    expect(input).toHaveAttribute('form', 'hidden-form');
  });

  it('supports custom value format', () => {
    const { container } = render(
      <DateInput {...defaultProps} defaultValue={new Date(2022, 3, 11)} valueFormat="DD/MM/YYYY" />
    );
    expectValue(container, '11/04/2022');
  });

  it('does not update value on blur if fixOnBlur={false}', async () => {
    const { container } = render(
      <DateInput {...defaultProps} fixOnBlur={false} defaultValue={new Date(2022, 3, 11)} />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.clear(getInput(container));
    await userEvent.type(getInput(container), 'invalid value');
    await userEvent.tab();
    expectValue(container, 'invalid value');
  });

  it('updates value on blur if fixOnBlur={true}', async () => {
    const { container } = render(
      <DateInput {...defaultProps} fixOnBlur defaultValue={new Date(2022, 3, 11)} />
    );

    expectValue(container, 'April 11, 2022');
    await userEvent.clear(getInput(container));
    await userEvent.type(getInput(container), 'invalid value');
    await userEvent.tab();
    expectValue(container, 'April 11, 2022');
  });

  it('supports custom date parser', async () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        dateParser={(input) => (input === 'secret-date' ? new Date(2022, 3, 11) : null)}
      />
    );

    await userEvent.type(getInput(container), 'secret-date');
    await userEvent.tab();
    expectValue(container, 'April 11, 2022');
  });

  it('preserves time when new date is selected and preserveTime prop is set', async () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        defaultValue={new Date(2022, 3, 11, 14, 45, 13)}
        valueFormat="DD/MM/YYYY HH:mm:ss"
        preserveTime
      />
    );

    expectValue(container, '11/04/2022 14:45:13');
    await userEvent.tab();
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '03/04/2022 14:45:13');
  });

  it('does not preserve time when new date is selected and preserveTime prop is set to false', async () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        defaultValue={new Date(2022, 3, 11, 14, 45, 13)}
        valueFormat="DD/MM/YYYY HH:mm:ss"
        preserveTime={false}
      />
    );

    expectValue(container, '11/04/2022 14:45:13');
    await userEvent.tab();
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '03/04/2022 00:00:00');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionDuration: 0 }}
      />
    );
    expect(container.firstChild).toHaveClass('mantine-DateInput-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass('mantine-DateInput-input');

    expect(container.querySelector('table button')).toHaveClass('mantine-DateInput-day');
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionDuration: 0 }}
        classNames={{
          root: 'test-root',
          input: 'test-input',
          day: 'test-control',
        }}
      />
    );
    expect(container.firstChild).toHaveClass('test-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass('test-input');
    expect(container.querySelector('table button')).toHaveClass('test-control');
  });

  it('supports styles api (styles)', () => {
    const { container } = render(
      <DateInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionDuration: 0 }}
        styles={{
          root: { borderColor: '#CCEE45' },
          input: { borderColor: '#EB4522' },
          day: { borderColor: '#EE4533' },
        }}
      />
    );
    expect(container.firstChild).toHaveStyle({ borderColor: '#CCEE45' });
    expect(container.querySelector('[data-dates-input]')).toHaveStyle({ borderColor: '#EB4522' });
    expect(container.querySelector('table button')).toHaveStyle({ borderColor: '#EE4533' });
  });
});
