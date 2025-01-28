import { __InputStylesNames } from '@mantine/core';
import { inputDefaultProps, inputStylesApiSelectors, render, tests } from '@mantine-tests/core';
import { datesTests, expectValue } from '@mantine-tests/dates';
import { MonthPickerInput, MonthPickerInputProps } from './MonthPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe('@mantine/dates/MonthPickerInput', () => {
  tests.axe([
    <MonthPickerInput aria-label="test-label" key="1" />,
    <MonthPickerInput aria-label="test-label" error key="2" />,
    <MonthPickerInput aria-label="test-label" error="test-error" id="test" key="3" />,
    <MonthPickerInput aria-label="test-label" description="test-description" key="4" />,
  ]);

  tests.itSupportsSystemProps<MonthPickerInputProps, __InputStylesNames>({
    component: MonthPickerInput,
    props: defaultPropsWithInputProps,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/dates/MonthPickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MonthPickerInputProps>({
    component: MonthPickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  datesTests.itSupportsDateInputProps({ component: MonthPickerInput, props: defaultProps });
  datesTests.itSupportsClearableProps({
    component: MonthPickerInput,
    props: { ...defaultProps, defaultValue: '2022-04-11' },
  });
  datesTests.itSupportsYearsListProps({
    component: MonthPickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsMonthsListProps({
    component: MonthPickerInput,
    props: {
      ...defaultProps,
      defaultValue: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <MonthPickerInput {...defaultProps} valueFormat="MMMM" value="2022-04-11" />
    );
    expectValue(container, 'April');

    rerender(
      <MonthPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={['2022-04-11', '2022-05-11']}
      />
    );
    expectValue(container, 'April, May');

    rerender(
      <MonthPickerInput
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
      <MonthPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-MonthPickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass(
      'mantine-MonthPickerInput-monthsListControl'
    );
  });
});
