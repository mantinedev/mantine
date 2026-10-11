import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { __InputStylesNames } from '@mantine/core';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  mockMatchMedia,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import {
  clickControl,
  clickInput,
  datesTests,
  expectNoModal,
  expectNoPopover,
  expectOpenedModal,
  expectOpenedPopover,
  expectValue,
} from '@mantine-tests/dates';
import { DatesProvider } from '../DatesProvider';
import { DateTimePicker, DateTimePickerProps } from './DateTimePicker';
import { useDateTimePicker } from './use-date-time-picker/use-date-time-picker';

const defaultProps: DateTimePickerProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
  timePickerProps: { 'aria-label': 'test-time-picker', hoursInputLabel: 'test-time-picker-hours' },
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

const defaultPropsWithInputProps: DateTimePickerProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

function PopoverOpenedTest({ onDropdownClose }: { onDropdownClose: () => void }) {
  const [opened, setOpened] = useState(false);
  return (
    <DateTimePicker
      {...defaultProps}
      defaultValue="2022-04-11"
      popoverProps={{ ...defaultProps.popoverProps, opened, onChange: setOpened }}
      onDropdownClose={onDropdownClose}
    />
  );
}

const getTimePicker = () => screen.getByLabelText('test-time-picker-hours');
const getSubmitButton = () => screen.getByLabelText('test-submit');
const getClearButton = () => screen.queryAllByLabelText('test-clear')[0];

describe('@mantine/dates/DateTimePicker', () => {
  tests.axe([
    <DateTimePicker aria-label="test-label" key="1" />,
    <DateTimePicker placeholder="test-placeholder" key="2" />,
    <DateTimePicker aria-label="test-label" error key="3" />,
    <DateTimePicker aria-label="test-label" error="test-error" id="test" key="4" />,
    <DateTimePicker aria-label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<DateTimePickerProps, __InputStylesNames>({
    component: DateTimePicker,
    props: defaultPropsWithInputProps,
    displayName: '@mantine/dates/DateTimePicker',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<DateTimePickerProps>({
    component: DateTimePicker,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  tests.itSupportsSharedInputDefaults<DateTimePickerProps>({
    component: DateTimePicker,
    props: defaultPropsWithInputProps,
    componentName: 'DateTimePicker',
  });

  datesTests.itSupportsClearableProps({
    component: DateTimePicker,
    props: {
      ...defaultProps,
      defaultValue: '2022-04-11',
    },
  });

  datesTests.itSupportsYearsListProps({
    component: DateTimePicker,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: DateTimePicker,
    props: {
      ...defaultProps,
      defaultLevel: 'year',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
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

  it('closes dropdown when user presses Enter in TimePicker', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} defaultValue="2022-04-11" />);
    await clickInput(container);
    expectOpenedPopover(container);

    await userEvent.type(getTimePicker(), '{Enter}');
    expectNoPopover(container);
  });

  it('closes dropdown when user clicks on submit button', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} defaultValue="2022-04-11" />);
    await clickInput(container);
    expectOpenedPopover(container);

    await userEvent.click(getSubmitButton());
    expectNoPopover(container);
  });

  it('closes when a submit button onClick handler is provided', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        submitButtonProps={{
          onClick: spy,
          'aria-label': defaultProps.submitButtonProps!['aria-label'],
        }}
      />
    );
    await clickInput(container);
    expectOpenedPopover(container);

    await userEvent.click(getSubmitButton());

    expect(spy).toHaveBeenCalled();
    expectNoPopover(container);
  });

  it('calls onDropdownClose once when the dropdown is closed with the submit button', async () => {
    const onDropdownClose = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultValue="2022-04-11"
        onDropdownClose={onDropdownClose}
      />
    );
    await clickInput(container);
    await userEvent.click(getSubmitButton());
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('calls onDropdownClose once when the dropdown is closed with the submit button (dropdownType="modal")', async () => {
    const onDropdownClose = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        dropdownType="modal"
        defaultValue="2022-04-11"
        onDropdownClose={onDropdownClose}
      />
    );
    await clickInput(container);
    await userEvent.click(getSubmitButton());
    expectNoModal(container);
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('clamps the value and calls onDropdownClose when the modal is dismissed', async () => {
    const onDropdownClose = jest.fn();
    const onChange = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        dropdownType="modal"
        defaultValue="2022-04-11 10:00:00"
        minDate="2022-04-11 12:00:00"
        onChange={onChange}
        onDropdownClose={onDropdownClose}
      />
    );
    await clickInput(container);
    await userEvent.keyboard('{Escape}');
    expectNoModal(container);
    expect(onChange).toHaveBeenLastCalledWith('2022-04-11 12:00:00');
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('clamps time to minDate time on the minDate day', async () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultValue="2022-04-11 14:00:00"
        minDate="2022-04-11 12:30:00"
      />
    );
    await clickInput(container);
    await userEvent.clear(getTimePicker());
    await userEvent.type(getTimePicker(), '09');
    act(() => getSubmitButton().focus());
    expect(getTimePicker()).toHaveValue('12');
  });

  it('clamps time to maxDate time on the maxDate day', async () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultValue="2022-04-11 10:00:00"
        maxDate="2022-04-11 18:30:00"
      />
    );
    await clickInput(container);
    await userEvent.clear(getTimePicker());
    await userEvent.type(getTimePicker(), '21');
    act(() => getSubmitButton().focus());
    expect(getTimePicker()).toHaveValue('18');
  });

  it('does not clamp time on days other than minDate/maxDate day', async () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultValue="2022-04-12 14:00:00"
        minDate="2022-04-11 12:30:00"
      />
    );
    await clickInput(container);
    await userEvent.clear(getTimePicker());
    await userEvent.type(getTimePicker(), '09');
    act(() => getSubmitButton().focus());
    expect(getTimePicker()).toHaveValue('09');
  });

  it('assigns defaultTimeValue to the selected date', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultDate="2022-04-11"
        defaultTimeValue="10:45"
        onChange={spy}
      />
    );
    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    await userEvent.click(getSubmitButton());
    expect(spy).toHaveBeenLastCalledWith('2022-04-03 10:45:00');
    expectValue(container, '03/04/2022 10:45');
  });

  it('closes a dropdown controlled with popoverProps.opened with the submit button', async () => {
    const onDropdownClose = jest.fn();
    const { container } = render(<PopoverOpenedTest onDropdownClose={onDropdownClose} />);
    await clickInput(container);
    expectOpenedPopover(container);

    await userEvent.click(getSubmitButton());
    expectNoPopover(container);
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('supports placeholder styles selector in classNames', () => {
    const classNames: DateTimePickerProps['classNames'] = {
      placeholder: 'test-placeholder-class',
    };

    render(
      <DateTimePicker {...defaultProps} classNames={classNames} placeholder="test-placeholder" />
    );

    expect(screen.getByText('test-placeholder')).toHaveClass('test-placeholder-class');
  });

  it('supports uncontrolled state', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} defaultValue="2022-04-11" />);

    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '03/04/2022 00:00');

    await userEvent.clear(getTimePicker());
    await userEvent.type(getTimePicker(), '14:45');
    expectValue(container, '03/04/2022 14:45');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();

    const { container } = render(
      <DateTimePicker {...defaultProps} value="2022-04-11" onChange={spy} />
    );

    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '11/04/2022 00:00');
    expect(spy).toHaveBeenLastCalledWith('2022-04-03 00:00:00');
  });

  it('displays correct value when withSeconds is set', () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} value="2022-04-11T14:45:54" withSeconds />
    );

    expectValue(container, '11/04/2022 14:45:54');
  });

  it('displays correct value when withSeconds is set via timePickerProps', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value="2022-04-11T14:45:54"
        timePickerProps={{ ...defaultProps.timePickerProps, withSeconds: true }}
      />
    );

    expectValue(container, '11/04/2022 14:45:54');
  });

  it('supports custom valueFormat', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value="2022-04-11T14:45:54"
        valueFormat="DD MMMM, YYYY hh:mm:ss A"
      />
    );

    expectValue(container, '11 April, 2022 02:45:54 PM');
  });

  it('supports valueFormat as a function', () => {
    const valueFormat = jest.fn((date: string) => `formatted-${date}`);
    const { container } = render(
      <DateTimePicker {...defaultProps} value="2022-04-11 14:45:54" valueFormat={valueFormat} />
    );

    expect(valueFormat).toHaveBeenCalledWith('2022-04-11 14:45:54');
    expectValue(container, 'formatted-2022-04-11 14:45:54');
  });

  it('supports localization for custom valueFormat', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value="2022-04-11T14:45:54"
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
          value="2022-04-11T14:45:54"
          valueFormat="DD MMMM, YYYY hh:mm:ss"
        />
      </DatesProvider>
    );

    expectValue(container, '11 апреля, 2022 02:45:54');
  });

  it('focuses TimePicker after date was selected', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} />);
    await clickInput(container);
    await userEvent.click(container.querySelector('table button')!);
    expect(getTimePicker()).toHaveFocus();
  });

  // https://github.com/mantinedev/mantine/issues/9128
  it('selects TimePicker hours value after date was selected', async () => {
    const { container } = render(<DateTimePicker {...defaultProps} />);
    await clickInput(container);
    await userEvent.click(container.querySelector('table button')!);

    await userEvent.keyboard('1');
    expect(getTimePicker()).toHaveFocus();
    expect(getTimePicker()).toHaveValue('01');
  });

  it('renders clear button based on clearable prop and current value', () => {
    const { rerender } = render(<DateTimePicker {...defaultProps} value="2022-04-11" clearable />);

    expect(getClearButton()).toBeInTheDocument();

    rerender(<DateTimePicker {...defaultProps} value="2022-04-11" clearable={false} />);
    expect(getClearButton()).toBe(undefined);

    rerender(<DateTimePicker {...defaultProps} value={null} clearable />);
    expect(getClearButton()).toBe(undefined);
  });

  it('clears input when clear button is clicked', async () => {
    const { container } = render(
      <DateTimePicker {...defaultProps} defaultValue="2022-04-11" clearable />
    );

    expectValue(container, '11/04/2022 00:00');
    await userEvent.click(getClearButton());
    expectValue(container, '');
  });

  it('calls onChange with null when controlled input is cleared', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DateTimePicker {...defaultProps} value="2022-04-11" clearable onChange={spy} />
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
    const { container } = render(<DateTimePicker {...defaultProps} defaultValue="2022-04-11" />);
    await clickInput(container);
    await userEvent.click(screen.getByLabelText('level-control'));
    await userEvent.click(screen.getByLabelText('level-control'));
    await userEvent.click(screen.getByLabelText('previous'));
    await userEvent.click(container.querySelector('table button')!);
    await userEvent.click(container.querySelector('table button')!);
    await userEvent.click(container.querySelectorAll('table button')[4]);
    expectValue(container, '01/01/2010 00:00');
  });

  it('render hidden input with given value', () => {
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        value="2022-04-11 14:56:45"
        name="hidden-name"
        form="hidden-form"
      />
    );
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveValue('2022-04-11 14:56:45');
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

    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-DateTimePicker-input'
    );

    expect(container.querySelector('table button')).toHaveClass('mantine-DateTimePicker-day');
  });

  describe('range type', () => {
    const rangeProps: any = {
      ...defaultProps,
      type: 'range',
      endTimePickerProps: {
        'aria-label': 'test-end-time-picker',
        hoursInputLabel: 'test-end-time-picker-hours',
      },
    };

    it('renders two TimePickers in range mode', async () => {
      const { container } = render(
        <DateTimePicker {...rangeProps} defaultValue={['2022-04-11', '2022-04-15']} />
      );

      await clickInput(container);
      expect(screen.getByLabelText('test-time-picker-hours')).toBeInTheDocument();
      expect(screen.getByLabelText('test-end-time-picker-hours')).toBeInTheDocument();
    });

    it('displays formatted range value', () => {
      const { container } = render(
        <DateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11 14:30:00', '2022-04-15 16:00:00']}
        />
      );

      expectValue(container, '11/04/2022 14:30 – 15/04/2022 16:00');
    });

    it('supports valueFormat as a function in range mode', () => {
      const { container } = render(
        <DateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11 14:30:00', '2022-04-15 16:00:00']}
          valueFormat={(date) => `f(${date})`}
        />
      );

      expectValue(container, 'f(2022-04-11 14:30:00) – f(2022-04-15 16:00:00)');
    });

    it('supports range uncontrolled state', async () => {
      const spy = jest.fn();
      const { container } = render(
        <DateTimePicker {...rangeProps} defaultDate="2022-04-01" onChange={spy} />
      );

      await clickInput(container);
      await userEvent.click(container.querySelectorAll('table button')[0]);
      expect(spy).toHaveBeenLastCalledWith(['2022-03-28 00:00:00', null]);
      expectValue(container, '28/03/2022 00:00 – ...');
    });

    it('supports range controlled state', async () => {
      const spy = jest.fn();
      const { container } = render(
        <DateTimePicker {...rangeProps} value={['2022-04-11', '2022-04-15']} onChange={spy} />
      );

      await clickInput(container);
      await userEvent.click(container.querySelectorAll('table button')[0]);
      expect(spy).toHaveBeenLastCalledWith(['2022-03-28 00:00:00', null]);
      expectValue(container, '11/04/2022 00:00 – 15/04/2022 00:00');
    });

    it('clears range value when clear button is clicked', async () => {
      const spy = jest.fn();
      const { container } = render(
        <DateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11', '2022-04-15']}
          clearable
          onChange={spy}
        />
      );

      expectValue(container, '11/04/2022 00:00 – 15/04/2022 00:00');
      await userEvent.click(getClearButton());
      expectValue(container, '');
    });

    it('displays range info text in dropdown', async () => {
      const { container } = render(
        <DateTimePicker
          {...rangeProps}
          defaultValue={['2022-04-11 14:30:00', '2022-04-15 16:00:00']}
        />
      );

      await clickInput(container);
      const rangeInfo = container.querySelector('.mantine-DateTimePicker-rangeInfo');
      expect(rangeInfo).toBeInTheDocument();
      expect(rangeInfo!.textContent).toContain('11/04/2022');
      expect(rangeInfo!.textContent).toContain('15/04/2022');
    });

    it('closes dropdown when submit button is clicked in range mode', async () => {
      const { container } = render(
        <DateTimePicker {...rangeProps} defaultValue={['2022-04-11', '2022-04-15']} />
      );
      await clickInput(container);
      expectOpenedPopover(container);

      await userEvent.click(getSubmitButton());
      expectNoPopover(container);
    });

    it('preserves time component of range presets', async () => {
      const spy = jest.fn();
      const { container } = render(
        <DateTimePicker
          {...rangeProps}
          withSeconds
          defaultValue={['2022-04-11 10:00:00', '2022-04-15 12:00:00']}
          onChange={spy}
          presets={[
            {
              value: ['2022-04-12 09:15:30', '2022-04-16 18:45:00'],
              label: 'Custom range',
            },
          ]}
        />
      );

      await clickInput(container);
      await userEvent.click(screen.getByText('Custom range'));

      expect(spy).toHaveBeenLastCalledWith(['2022-04-12 09:15:30', '2022-04-16 18:45:00']);
      expectValue(container, '12/04/2022 09:15:30 – 16/04/2022 18:45:00');
    });

    it('render hidden input with range value', () => {
      const { container } = render(
        <DateTimePicker
          {...rangeProps}
          value={['2022-04-11 14:56:45', '2022-04-15 16:00:00']}
          name="hidden-name"
          form="hidden-form"
        />
      );
      const input = container.querySelector('input[type="hidden"]');
      expect(input).toHaveValue('2022-04-11 14:56:45 – 2022-04-15 16:00:00');
      expect(input).toHaveAttribute('name', 'hidden-name');
      expect(input).toHaveAttribute('form', 'hidden-form');
    });
  });
});

describe('@mantine/dates/DateTimePicker responsive dropdownType', () => {
  let media: ReturnType<typeof mockMatchMedia>;

  afterEach(() => {
    media?.restore();
  });

  it('renders drawer below sm breakpoint by default and closes it with the submit button', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    const onDropdownClose = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        defaultValue="2022-04-11"
        presets={[{ value: '2022-04-12', label: 'Test preset' }]}
        onDropdownClose={onDropdownClose}
      />
    );

    await clickInput(container);
    expect(container.querySelector('.mantine-Drawer-content')).toBeInTheDocument();
    expectNoPopover(container);
    expect(container.querySelector('[data-preset]')).toHaveAttribute('data-layout', 'sheet');
    expect(container.querySelector('[data-full-width]')).toBeInTheDocument();
    expect(
      container.querySelector('.mantine-Drawer-content input[type="time"]')
    ).toBeInTheDocument();
    expect(screen.queryByLabelText('test-time-picker-hours')).not.toBeInTheDocument();

    await userEvent.click(getSubmitButton());
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
    expect(onDropdownClose).toHaveBeenCalledTimes(1);
  });

  it('keeps TimePicker in drawer mode when withSeconds is set', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        withSeconds
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    await clickInput(container);
    expect(container.querySelector('input[type="time"]')).not.toBeInTheDocument();
    expect(screen.getByLabelText('test-time-picker-hours')).toBeInTheDocument();
  });

  it('applies time entered in the native time input in drawer mode', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    const onChange = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultValue="2022-04-11 10:00:00"
        onChange={onChange}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    await clickInput(container);
    const input = container.querySelector('input[type="time"]') as HTMLInputElement;
    expect(input.value).toBe('10:00');
    fireEvent.change(input, { target: { value: '14:30' } });
    await userEvent.click(getSubmitButton());
    expect(onChange).toHaveBeenLastCalledWith('2022-04-11 14:30:00');
  });

  it('focuses the native time input with controller.focusTime in drawer mode', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    let controller: any = null;
    function Wrapper() {
      controller = useDateTimePicker();
      return (
        <DateTimePicker
          {...defaultProps}
          controller={controller}
          drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        />
      );
    }
    const { container } = render(<Wrapper />);
    act(() => {
      controller.openDropdown();
      controller.focusTime('hours');
    });
    expect(container.querySelector('input[type="time"]')).toHaveFocus();
    await act(() => new Promise((resolve) => setTimeout(resolve, 20)));
    expect(container.querySelector('input[type="time"]')).toHaveFocus();
  });

  it('renders popover above sm breakpoint by default', async () => {
    media = mockMatchMedia(true, { filter: (query) => query.includes('min-width') });
    const { container } = render(<DateTimePicker {...defaultProps} />);
    await clickInput(container);
    expectOpenedPopover(container);
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
  });

  it('keeps TimePicker in drawer mode when withSeconds is set with timePickerProps', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        timePickerProps={{ ...defaultProps.timePickerProps, withSeconds: true }}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    await clickInput(container);
    expect(container.querySelector('input[type="time"]')).not.toBeInTheDocument();
    expect(screen.getByLabelText('test-time-picker-hours')).toBeInTheDocument();
  });

  it('passes timePickerProps and endTimePickerProps to native time inputs in drawer mode', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    const { container } = render(
      <DateTimePicker
        {...(defaultProps as any)}
        type="range"
        timePickerProps={{ 'aria-label': 'start-time', disabled: true, className: 'start-class' }}
        endTimePickerProps={{ 'aria-label': 'end-time', readOnly: true, id: 'end-id' }}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    await clickInput(container);
    expect(screen.getByLabelText('start-time')).toBeDisabled();
    expect(container.querySelector('.start-class input[type="time"]')).toBe(
      screen.getByLabelText('start-time')
    );
    expect(screen.getByLabelText('end-time')).toHaveAttribute('readonly');
    expect(screen.getByLabelText('end-time')).toHaveAttribute('id', 'end-id');
  });

  it.each(['drawer', 'modal'] as const)(
    'does not commit an incomplete range when Enter is pressed in the time input (%s)',
    async (dropdownType) => {
      media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
      const onChange = jest.fn();
      const { container } = render(
        <DateTimePicker
          {...(defaultProps as any)}
          type="range"
          dropdownType={dropdownType}
          defaultValue={['2022-04-05 10:00:00', '2022-04-08 12:00:00']}
          onChange={onChange}
          drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
        />
      );
      await clickInput(container);
      await clickControl(container, 15);

      const timeInput =
        dropdownType === 'drawer'
          ? (container.querySelector('input[type="time"]') as HTMLElement)
          : getTimePicker();
      fireEvent.keyDown(timeInput, { key: 'Enter' });

      expect(onChange).not.toHaveBeenCalled();
      expect(
        container.querySelector(
          dropdownType === 'drawer' ? '.mantine-Drawer-content' : '.mantine-Modal-content'
        )
      ).toBeInTheDocument();
    }
  );

  it('does not call onChange when the unchanged draft is submitted', async () => {
    media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
    const onChange = jest.fn();
    const { container } = render(
      <DateTimePicker
        {...defaultProps}
        defaultValue="2022-04-11 10:00:00"
        onChange={onChange}
        drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    await clickInput(container);
    await userEvent.click(getSubmitButton());
    expect(onChange).not.toHaveBeenCalled();
    expect(container.querySelector('.mantine-Drawer-content')).not.toBeInTheDocument();
  });

  it.each(['drawer', 'modal'] as const)(
    'controls the %s dropdown with popoverProps.opened and popoverProps.onChange',
    async (dropdownType) => {
      media = mockMatchMedia(false, { filter: (query) => query.includes('min-width') });
      const onOpenedChange = jest.fn();

      function Controlled() {
        const [opened, setOpened] = useState(false);
        return (
          <DateTimePicker
            {...defaultProps}
            dropdownType={dropdownType}
            drawerProps={{ withinPortal: false, transitionProps: { duration: 0 } }}
            popoverProps={{
              opened,
              onChange: (value) => {
                onOpenedChange(value);
                setOpened(value);
              },
            }}
          />
        );
      }

      const { container } = render(<Controlled />);
      const selector =
        dropdownType === 'drawer' ? '.mantine-Drawer-content' : '.mantine-Modal-content';

      await clickInput(container);
      expect(onOpenedChange).toHaveBeenLastCalledWith(true);
      expect(container.querySelector(selector)).toBeInTheDocument();

      await userEvent.click(getSubmitButton());
      expect(onOpenedChange).toHaveBeenLastCalledWith(false);
      expect(container.querySelector(selector)).not.toBeInTheDocument();
    }
  );
});
