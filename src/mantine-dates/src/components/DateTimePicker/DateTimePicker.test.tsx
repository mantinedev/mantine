import 'dayjs/locale/ru';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { DatesProvider } from '../DatesProvider';
import {
  itSupportsMonthsListProps,
  itSupportsYearsListProps,
  itSupportsClearableProps,
  clickInput,
  expectNoModal,
  expectNoPopover,
  expectOpenedModal,
  expectOpenedPopover,
  expectValue,
} from '../../tests';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';

const defaultProps: DateTimePickerProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
  timeInputProps: { 'aria-label': 'test-time-input' },
  submitButtonProps: { 'aria-label': 'test-submit' },
  clearButtonProps: { 'aria-label': 'test-clear' },
  ariaLabels: {
    monthLevelControl: 'level-control',
    yearLevelControl: 'level-control',
    nextMonth: 'next',
    previousMonth: 'previous',
    nextYear: 'next',
    previousYear: 'previous',
    nextDecade: 'next',
    previousDecade: 'previous',
  },
};

const getTimeInput = () => screen.getByLabelText('test-time-input');
const getSubmitButton = () => screen.getByLabelText('test-submit');
const getClearButton = () => screen.queryAllByLabelText('test-clear')[0];

describe('@mantine/dates/DateTimePicker', () => {
  itSupportsSystemProps({
    component: DateTimePicker,
    props: defaultProps,
    providerName: 'DateTimePicker',
    othersSelector: '.mantine-DateTimePicker-input',
    displayName: '@mantine/dates/DateTimePicker',
  });

  itSupportsFocusEvents(DateTimePicker, defaultProps, '.mantine-DateTimePicker-input');
  itSupportsProviderVariant(DateTimePicker, defaultProps, 'DateTimePicker', ['root', 'input']);
  itSupportsProviderSize(DateTimePicker, defaultProps, 'DateTimePicker', ['root', 'input']);
  itSupportsClearableProps(DateTimePicker, {
    ...defaultProps,
    defaultValue: new Date(2022, 3, 11),
  });
  itSupportsYearsListProps(DateTimePicker, {
    ...defaultProps,
    defaultLevel: 'decade',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });
  itSupportsMonthsListProps(DateTimePicker, {
    ...defaultProps,
    defaultLevel: 'year',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });

  it('toggles popover when input is clicked (dropdownType="popover")', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} />);

    await clickInput(container);
    expectOpenedPopover(container);
    expectNoModal(container);

    await clickInput(container);
    expectNoPopover(container);
  });

  it('toggles modal when input is clicked (dropdownType="modal")', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} dropdownType="modal" />);

    await clickInput(container);
    expectOpenedModal(container);
    expectNoPopover(container);

    await clickInput(container);
    expectNoModal(container);
  });

  it('closes dropdown when user presses Enter in TimeInput', async () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} defaultValue={new Date(2022, 3, 11)} />
    );
    await clickInput(container);
    expectOpenedPopover(container);

    await userEvent.type(getTimeInput(), '{Enter}');
    expectNoPopover(container);
  });

  it('closes dropdown when user clicks on submit button', async () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} defaultValue={new Date(2022, 3, 11)} />
    );
    await clickInput(container);
    expectOpenedPopover(container);

    await userEvent.click(getSubmitButton());
    expectNoPopover(container);
  });

  it('supports uncontrolled state', async () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} defaultValue={new Date(2022, 3, 11)} />
    );

    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '03/04/2022 00:00');

    await userEvent.clear(getTimeInput());
    await userEvent.type(getTimeInput(), '14:45');
    expectValue(container, '03/04/2022 14:45');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();

    const { container } = render(
      <DateTimePicker {...defaultProps} value={new Date(2022, 3, 11)} onChange={spy} />
    );

    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '11/04/2022 00:00');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 3, 3));
  });

  it('displays correct value when withSeconds is set', () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} value={new Date(2022, 3, 11, 14, 45, 54)} withSeconds />
    );

    expectValue(container, '11/04/2022 14:45:54');
  });

  it('supports custom valueFormat', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value={new Date(2022, 3, 11, 14, 45, 54)}
        valueFormat="DD MMMM, YYYY hh:mm:ss A"
      />
    );

    expectValue(container, '11 April, 2022 02:45:54 PM');
  });

  it('supports localization for custom valueFormat', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value={new Date(2022, 3, 11, 14, 45, 54)}
        valueFormat="DD MMMM, YYYY hh:mm:ss"
        locale="ru"
      />
    );

    expectValue(container, '11 апреля, 2022 02:45:54');
  });

  it('supports localization for custom valueFormat om DatesProvider', () => {
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <DateTimePicker
          {...defaultProps}
          value={new Date(2022, 3, 11, 14, 45, 54)}
          valueFormat="DD MMMM, YYYY hh:mm:ss"
        />
      </DatesProvider>
    );

    expectValue(container, '11 апреля, 2022 02:45:54');
  });

  it('focuses TimeInput after date was selected', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} />);
    await clickInput(container);
    await userEvent.click(container.querySelector('table button'));
    expect(getTimeInput()).toHaveFocus();
  });

  it('renders clear button based on clearable prop and current value', () => {
    const { rerender } = render(
      <DateTimePicker {...defaultProps} value={new Date(2022, 3, 11)} clearable />
    );

    expect(getClearButton()).toBeInTheDocument();

    rerender(<DateTimePicker {...defaultProps} value={new Date(2022, 3, 11)} clearable={false} />);
    expect(getClearButton()).toBe(undefined);

    rerender(<DateTimePicker {...defaultProps} value={null} clearable />);
    expect(getClearButton()).toBe(undefined);
  });

  it('clears input when clear button is clicked', async () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} defaultValue={new Date(2022, 3, 11)} clearable />
    );

    expectValue(container, '11/04/2022 00:00');
    await userEvent.click(getClearButton());
    expectValue(container, '');
  });

  it('calls onChange with null when controlled input is cleared', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateTimePicker {...defaultProps} value={new Date(2022, 3, 11)} clearable onChange={spy} />
    );

    expectValue(container, '11/04/2022 00:00');
    await userEvent.click(getClearButton());
    expectValue(container, '11/04/2022 00:00');
    expect(spy).toHaveBeenCalledWith(null);
  });

  it('does not open popover if readOnly prop is set', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} readOnly />);
    expectNoPopover(container);
    await clickInput(container);
    expectNoPopover(container);
  });

  it('allows changing levels in popover', async () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} defaultValue={new Date(2022, 3, 11)} />
    );
    await clickInput(container);
    await userEvent.click(screen.getByLabelText('level-control'));
    await userEvent.click(screen.getByLabelText('level-control'));
    await userEvent.click(screen.getByLabelText('previous'));
    await userEvent.click(container.querySelector('table button'));
    await userEvent.click(container.querySelector('table button'));
    await userEvent.click(container.querySelectorAll('table button')[4]);
    expectValue(container, '01/01/2010 00:00');
  });

  it('render hidden input with given value', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value={new Date(2022, 3, 11, 14, 56, 45)}
        name="hidden-name"
        form="hidden-form"
      />
    );
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveValue(new Date(2022, 3, 11, 14, 56, 45).toISOString());
    expect(input).toHaveAttribute('name', 'hidden-name');
    expect(input).toHaveAttribute('form', 'hidden-form');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.firstChild).toHaveClass('mantine-DateTimePicker-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-DateTimePicker-input'
    );

    expect(container.querySelector('table button')).toHaveClass('mantine-DateTimePicker-day');
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
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
      <DateTimePicker
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
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
