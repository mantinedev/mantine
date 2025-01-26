import { __InputStylesNames } from '@mantine/core';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import {
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

const defaultPropsWithInputProps: DateTimePickerProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

const getTimeInput = () => screen.getByLabelText('test-time-input');
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
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/dates/DateTimePicker',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<DateTimePickerProps>({
    component: DateTimePicker,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  datesTests.itSupportsClearableProps({
    component: DateTimePicker,
    props: {
      ...defaultProps,
      defaultValue: new Date(2022, 3, 11),
    },
  });

  datesTests.itSupportsYearsListProps({
    component: DateTimePicker,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: new Date(2022, 3, 11),
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: DateTimePicker,
    props: {
      ...defaultProps,
      defaultLevel: 'year',
      defaultValue: new Date(2022, 3, 11),
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

  it('supports uncontrolled state with timezone', async () => {
    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <DateTimePicker
          {...defaultProps}
          defaultValue={new Date(2022, 0, 31, 23)}
          valueFormat="DD/MM/YYYY HH:mm Z"
        />
      </DatesProvider>
    );
    expectValue(container, '01/02/2022 04:00 +00:00');

    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '06/02/2022 04:00 +00:00');

    await userEvent.clear(getTimeInput());
    await userEvent.type(getTimeInput(), '14:45');
    expectValue(container, '06/02/2022 14:45 +00:00');
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

  it('supports controlled state with timezone', async () => {
    const spy = jest.fn();

    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <DateTimePicker
          {...defaultProps}
          value={new Date(2022, 0, 31, 23)}
          onChange={spy}
          valueFormat="DD/MM/YYYY HH:mm Z"
        />
      </DatesProvider>
    );
    expectValue(container, '01/02/2022 04:00 +00:00');

    await clickInput(container);
    await userEvent.click(container.querySelectorAll('table button')[6]);
    expectValue(container, '01/02/2022 04:00 +00:00');
    expect(spy).toHaveBeenLastCalledWith(new Date(2022, 1, 5, 23));
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
    await userEvent.click(container.querySelector('table button')!);
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
    await userEvent.click(container.querySelector('table button')!);
    await userEvent.click(container.querySelector('table button')!);
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

    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-DateTimePicker-input'
    );

    expect(container.querySelector('table button')).toHaveClass('mantine-DateTimePicker-day');
  });
});
