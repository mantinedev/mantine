import { __InputStylesNames } from '@mantine/core';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { clickControl, clickInput, datesTests, expectValue } from '@mantine-tests/dates';
import { DatePickerInput, DatePickerInputProps } from './DatePickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe('@mantine/dates/DatePickerInput', () => {
  tests.axe([
    <DatePickerInput aria-label="test-label" key="1" />,
    <DatePickerInput aria-label="test-label" error key="2" />,
    <DatePickerInput aria-label="test-label" error="test-error" id="test" key="3" />,
    <DatePickerInput aria-label="test-label" description="test-description" key="4" />,
  ]);

  tests.itSupportsSystemProps<DatePickerInputProps, __InputStylesNames>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    displayName: '@mantine/dates/DatePickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<DatePickerInputProps>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  tests.itSupportsSharedInputDefaults<DatePickerInputProps>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    componentName: 'DatePickerInput',
  });

  datesTests.itSupportsDateInputProps({ component: DatePickerInput, props: defaultProps });
  datesTests.itSupportsClearableProps({
    component: DatePickerInput,
    props: { ...defaultProps, defaultValue: '2022-04-11' },
  });
  datesTests.itSupportsYearsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'year',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <DatePickerInput {...defaultProps} valueFormat="MMMM" value="2022-04-11" />
    );
    expectValue(container, 'April');

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={['2022-04-11', '2022-05-11']}
      />
    );
    expectValue(container, 'April, May');

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="range"
        valueFormat="MMMM"
        value={['2022-04-11', '2022-05-11']}
      />
    );
    expectValue(container, 'April – May');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <DatePickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-DatePickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass('mantine-DatePickerInput-day');
  });

  it('returns focus to the input when the dropdown is closed after keyboard selection', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} defaultDate="2022-04-11" />);
    await clickInput(container);
    const day = container.querySelector<HTMLButtonElement>('table button')!;
    day.focus();
    await userEvent.keyboard('{Enter}');
    expectValue(container, 'March 28, 2022');
    expect(container.querySelector('[data-dates-input]')).toHaveFocus();
  });

  it('does not return focus to the input when the dropdown is closed after mouse selection', async () => {
    const { container } = render(<DatePickerInput {...defaultProps} defaultDate="2022-04-11" />);
    await clickInput(container);
    await clickControl(container, 0);
    expectValue(container, 'March 28, 2022');
    expect(container.querySelector('[data-dates-input]')).not.toHaveFocus();
  });

  it('sets data-with-presets attribute on the dropdown when presets are provided', async () => {
    const { container, rerender } = render(
      <DatePickerInput {...defaultProps} presets={[{ label: 'Today', value: '2022-04-11' }]} />
    );
    await clickInput(container);
    expect(container.querySelector('[data-dates-dropdown]')).toHaveAttribute('data-with-presets');

    rerender(<DatePickerInput {...defaultProps} />);
    expect(container.querySelector('[data-dates-dropdown]')).not.toHaveAttribute(
      'data-with-presets'
    );
  });

  it('supports controlled state (dropdown click)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePickerInput {...defaultProps} value="2022-04-11" onChange={spy} />
    );
    await clickInput(container);
    await clickControl(container, 4);
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenCalledWith('2022-04-01');
  });
});
