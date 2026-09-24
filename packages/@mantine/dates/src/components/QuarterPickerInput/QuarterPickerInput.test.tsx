import { __InputStylesNames } from '@mantine/core';
import { inputDefaultProps, inputStylesApiSelectors, render, tests } from '@mantine-tests/core';
import { datesTests, expectValue } from '@mantine-tests/dates';
import { QuarterPickerInput, QuarterPickerInputProps } from './QuarterPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

const defaultPropsWithInputProps = {
  ...defaultProps,
  ...(inputDefaultProps as any),
};

describe('@mantine/dates/QuarterPickerInput', () => {
  tests.axe([
    <QuarterPickerInput aria-label="test-label" key="1" />,
    <QuarterPickerInput aria-label="test-label" error key="2" />,
    <QuarterPickerInput aria-label="test-label" error="test-error" id="test" key="3" />,
    <QuarterPickerInput aria-label="test-label" description="test-description" key="4" />,
  ]);

  tests.itSupportsSystemProps<QuarterPickerInputProps, __InputStylesNames>({
    component: QuarterPickerInput,
    props: defaultPropsWithInputProps,
    displayName: '@mantine/dates/QuarterPickerInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<QuarterPickerInputProps>({
    component: QuarterPickerInput,
    props: defaultPropsWithInputProps,
    selector: 'button',
  });

  tests.itSupportsSharedInputDefaults<QuarterPickerInputProps>({
    component: QuarterPickerInput,
    props: defaultPropsWithInputProps,
    componentName: 'QuarterPickerInput',
  });

  datesTests.itSupportsDateInputProps({
    component: QuarterPickerInput,
    props: { ...defaultProps, numberOfColumns: 3, date: '2022-01-01' },
  });
  datesTests.itSupportsClearableProps({
    component: QuarterPickerInput,
    props: { ...defaultProps, defaultValue: '2022-04-01' },
  });
  datesTests.itSupportsYearsListProps({
    component: QuarterPickerInput,
    props: {
      ...defaultProps,
      defaultLevel: 'decade',
      defaultValue: '2022-04-01',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  datesTests.itSupportsQuartersListProps({
    component: QuarterPickerInput,
    props: {
      ...defaultProps,
      defaultDate: '2022-04-11',
      popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
    },
  });

  it('formats value as [Q]Q YYYY by default', () => {
    const { container } = render(<QuarterPickerInput {...defaultProps} value="2022-05-20" />);
    expectValue(container, 'Q2 2022');
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <QuarterPickerInput {...defaultProps} valueFormat="YYYY [Q]Q" value="2022-04-01" />
    );
    expectValue(container, '2022 Q2');

    rerender(
      <QuarterPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="YYYY [Q]Q"
        value={['2022-04-01', '2022-10-01']}
      />
    );
    expectValue(container, '2022 Q2, 2022 Q4');

    rerender(
      <QuarterPickerInput
        {...defaultProps}
        type="range"
        valueFormat="YYYY [Q]Q"
        value={['2022-04-01', '2023-01-01']}
      />
    );
    expectValue(container, '2022 Q2 – 2023 Q1');
  });

  it('does not leak picker props to the DOM', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(
      <QuarterPickerInput
        {...defaultProps}
        quartersListFormat="[Q]Q"
        maxLevel="year"
        getQuarterControlProps={() => ({})}
      />
    );
    expect(container.querySelector('[quarterslistformat]')).toBe(null);
    expect(container.querySelector('[maxlevel]')).toBe(null);
    expect(consoleErrorSpy).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(
      <QuarterPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-QuarterPickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass(
      'mantine-QuarterPickerInput-quartersListControl'
    );
  });
});
