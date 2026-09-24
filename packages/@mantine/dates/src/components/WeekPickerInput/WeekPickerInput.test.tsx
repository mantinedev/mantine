import { __InputStylesNames } from '@mantine/core';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { datesTests, expectValue } from '@mantine-tests/dates';
import { DatesProvider } from '../DatesProvider';
import { WeekPickerInput, WeekPickerInputProps } from './WeekPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

const openedPopover = {
  popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
};

describe('@mantine/dates/WeekPickerInput', () => {
  tests.axe([
    <WeekPickerInput aria-label="test-label" key="1" />,
    <WeekPickerInput aria-label="test-label" error key="2" />,
    <WeekPickerInput aria-label="test-label" error="test-error" id="test" key="3" />,
    <WeekPickerInput aria-label="test-label" description="test-description" key="4" />,
  ]);

  tests.itSupportsSystemProps<WeekPickerInputProps, __InputStylesNames>({
    component: WeekPickerInput,
    props: defaultPropsWithInputProps,
    displayName: '@mantine/dates/WeekPickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<WeekPickerInputProps>({
    component: WeekPickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  tests.itSupportsSharedInputDefaults<WeekPickerInputProps>({
    component: WeekPickerInput,
    props: defaultPropsWithInputProps,
    componentName: 'WeekPickerInput',
  });

  datesTests.itSupportsDateInputProps({
    component: WeekPickerInput,
    props: { ...defaultProps, defaultDate: '2022-04-11' },
    secondControlIndex: 10,
  });
  datesTests.itSupportsClearableProps({
    component: WeekPickerInput,
    props: { ...defaultProps, defaultValue: '2022-04-11' },
  });
  datesTests.itSupportsYearsListProps({
    component: WeekPickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: '2022-04-11',
      ...openedPopover,
    },
  });
  datesTests.itSupportsMonthsListProps({
    component: WeekPickerInput,
    props: { ...defaultProps, defaultLevel: 'year', defaultValue: '2022-04-11', ...openedPopover },
  });

  it('formats a week as start – end by default', () => {
    const { container } = render(<WeekPickerInput {...defaultProps} value="2026-03-04" />);
    expectValue(container, 'Mar 2, 2026 – Mar 8, 2026');
  });

  it('formats ranges and multiple values', () => {
    const { container, rerender } = render(
      <WeekPickerInput {...defaultProps} type="range" value={['2026-03-02', '2026-03-16']} />
    );
    expectValue(container, 'Mar 2, 2026 – Mar 22, 2026');

    rerender(
      <WeekPickerInput {...defaultProps} type="multiple" value={['2026-03-02', '2026-03-16']} />
    );
    expectValue(container, 'Mar 2, 2026 – Mar 8, 2026, Mar 16, 2026 – Mar 22, 2026');
  });

  it('supports valueFormat prop', () => {
    const { container } = render(
      <WeekPickerInput {...defaultProps} valueFormat="DD.MM" value="2026-03-04" />
    );
    expectValue(container, '02.03 – 08.03');
  });

  it('supports labelSeparator prop', () => {
    const { container } = render(
      <WeekPickerInput
        {...defaultProps}
        labelSeparator="to"
        valueFormat="DD.MM"
        value="2026-03-04"
      />
    );
    expectValue(container, '02.03 to 08.03');
  });

  it('respects firstDayOfWeek prop and DatesProvider setting in the label', () => {
    const { container, rerender } = render(
      <WeekPickerInput
        {...defaultProps}
        firstDayOfWeek={0}
        valueFormat="DD.MM"
        value="2026-03-04"
      />
    );
    expectValue(container, '01.03 – 07.03');

    rerender(
      <DatesProvider settings={{ firstDayOfWeek: 6 }}>
        <WeekPickerInput {...defaultProps} valueFormat="DD.MM" value="2026-03-04" />
      </DatesProvider>
    );
    expectValue(container, '28.02 – 06.03');
  });

  it('supports custom valueFormatter with raw week-start values', () => {
    const spy = jest.fn(() => 'custom');
    const { container } = render(
      <WeekPickerInput {...defaultProps} value="2026-03-04" valueFormatter={spy} />
    );
    expectValue(container, 'custom');
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'default', date: '2026-03-04' })
    );
  });

  it('emits week start when a day is picked in the dropdown', async () => {
    const spy = jest.fn();
    const { container } = render(
      <WeekPickerInput
        {...defaultProps}
        {...openedPopover}
        defaultDate="2022-04-11"
        onChange={spy}
      />
    );
    await userEvent.click(container.querySelectorAll('table button')[10]);
    expect(spy).toHaveBeenCalledWith('2022-04-04');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<WeekPickerInput {...defaultProps} {...openedPopover} />);
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-WeekPickerInput-input'
    );
    expect(container.querySelector('table button:not([data-week-control])')).toHaveClass(
      'mantine-WeekPickerInput-day'
    );
    expect(container.querySelector('[data-week-control]')).toHaveClass(
      'mantine-WeekPickerInput-weekControl'
    );
  });
});
