import React from 'react';
import { tests, inputDefaultProps, inputStylesApiSelectors, render } from '@mantine/tests';
import { __InputStylesNames } from '@mantine/core';
import { clickControl, clickInput, datesTests, expectValue } from '@mantine/dates-tests';
import { DatePickerInput, DatePickerInputProps } from './DatePickerInput';
import { DatesProvider } from '../DatesProvider';

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
    <DatePickerInput aria-label="test-label" />,
    <DatePickerInput aria-label="test-label" error />,
    <DatePickerInput aria-label="test-label" error="test-error" id="test" />,
    <DatePickerInput aria-label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<DatePickerInputProps, __InputStylesNames>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/dates/DatePickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<DatePickerInputProps>({
    component: DatePickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  datesTests.itSupportsDateInputProps({ component: DatePickerInput, props: defaultProps });
  datesTests.itSupportsClearableProps({
    component: DatePickerInput,
    props: { ...defaultProps, defaultValue: new Date() },
  });
  datesTests.itSupportsYearsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: new Date(2022, 3, 11),
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: DatePickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'year',
      defaultValue: new Date(2022, 3, 11),
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <DatePickerInput {...defaultProps} valueFormat="MMMM" value={new Date(2022, 3, 11)} />
    );
    expectValue(container, 'April');

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );
    expectValue(container, 'April, May');

    rerender(
      <DatePickerInput
        {...defaultProps}
        type="range"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
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

  it('supports controlled state (dropdown click)', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatePickerInput {...defaultProps} value={new Date(2022, 3, 11)} onChange={spy} />
    );
    await clickInput(container);
    await clickControl(container, 4);
    expectValue(container, 'April 11, 2022');
    expect(spy).toHaveBeenCalledWith(new Date(2022, 3, 1));
  });

  it('supports controlled state (dropdown click) with timezone', async () => {
    const spy = jest.fn();
    const { container } = render(
      <DatesProvider settings={{ timezone: 'UTC' }}>
        <DatePickerInput
          {...defaultProps}
          date={new Date(2022, 0, 31, 23)}
          value={new Date(2022, 0, 31, 23)}
          onChange={spy}
        />
      </DatesProvider>
    );
    await clickInput(container);
    await clickControl(container, 4);
    expectValue(container, 'February 1, 2022');
    expect(spy).toHaveBeenCalledWith(new Date(2022, 1, 3, 19));
  });
});
