import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itSupportsFocusEvents,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import {
  itSupportsClearableProps,
  itSupportsYearsListProps,
  itSupportsMonthsListProps,
  itSupportsDateInputProps,
  expectValue,
} from '../../tests';
import { DatePickerInput } from './DatePickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

describe('@mantine/dates/DatePickerInput', () => {
  itSupportsSystemProps({
    component: DatePickerInput,
    props: defaultProps,
    refType: HTMLButtonElement,
    providerName: 'DatePickerInput',
    othersSelector: '.mantine-DatePickerInput-input',
    displayName: '@mantine/dates/DatePickerInput',
  });

  itSupportsFocusEvents(DatePickerInput, defaultProps, '.mantine-DatePickerInput-input');
  itSupportsProviderVariant(DatePickerInput, defaultProps, 'DatePickerInput', ['root', 'input']);
  itSupportsProviderSize(DatePickerInput, defaultProps, 'DatePickerInput', ['root', 'input']);
  itSupportsDateInputProps(DatePickerInput, defaultProps);
  itSupportsClearableProps(DatePickerInput, {
    ...defaultProps,
    defaultValue: new Date(2022, 3, 11),
  });
  itSupportsYearsListProps(DatePickerInput, {
    ...defaultProps,
    defaultLevel: 'decade',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });
  itSupportsMonthsListProps(DatePickerInput, {
    ...defaultProps,
    defaultLevel: 'year',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });
  itDisablesInputInsideDisabledFieldset(DatePickerInput, defaultProps);

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
    expect(container.firstChild).toHaveClass('mantine-DatePickerInput-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-DatePickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass('mantine-DatePickerInput-day');
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <DatePickerInput
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
      <DatePickerInput
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

  it('supports withCellSpacing prop', () => {
    const { container, rerender } = render(
      <DatePickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
        withCellSpacing
      />
    );
    expect(container.querySelector('tbody tr td')).toHaveAttribute('data-with-spacing', 'true');

    rerender(
      <DatePickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
        withCellSpacing={false}
      />
    );
    expect(container.querySelector('tbody tr td')).not.toHaveAttribute('data-with-spacing');
  });
});
