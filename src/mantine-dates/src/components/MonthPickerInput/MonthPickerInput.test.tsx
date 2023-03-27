import React from 'react';
import { render } from '@testing-library/react';
import {
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itSupportsFocusEvents,
} from '@mantine/tests';
import {
  itSupportsClearableProps,
  itSupportsYearsListProps,
  itSupportsMonthsListProps,
  itSupportsDateInputProps,
  expectValue,
} from '../../tests';
import { MonthPickerInput } from './MonthPickerInput';

const defaultProps = {
  popoverProps: { withinPortal: false, transitionProps: { duration: 0 } },
  modalProps: { withinPortal: false, transitionProps: { duration: 0 } },
};

describe('@mantine/dates/MonthPickerInput', () => {
  itSupportsSystemProps({
    component: MonthPickerInput,
    props: defaultProps,
    refType: HTMLButtonElement,
    providerName: 'MonthPickerInput',
    othersSelector: '.mantine-MonthPickerInput-input',
    displayName: '@mantine/dates/MonthPickerInput',
  });

  itSupportsFocusEvents(MonthPickerInput, defaultProps, '.mantine-MonthPickerInput-input');
  itSupportsProviderVariant(MonthPickerInput, defaultProps, 'MonthPickerInput', ['root', 'input']);
  itSupportsProviderSize(MonthPickerInput, defaultProps, 'MonthPickerInput', ['root', 'input']);
  itSupportsDateInputProps(MonthPickerInput, defaultProps);
  itSupportsClearableProps(MonthPickerInput, {
    ...defaultProps,
    defaultValue: new Date(2022, 3, 11),
  });
  itSupportsYearsListProps(MonthPickerInput, {
    ...defaultProps,
    defaultLevel: 'decade',
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });
  itSupportsMonthsListProps(MonthPickerInput, {
    ...defaultProps,
    defaultValue: new Date(2022, 3, 11),
    popoverProps: { opened: true, withinPortal: false, transitionProps: { duration: 0 } },
  });

  it('supports valueFormat prop', () => {
    const { container, rerender } = render(
      <MonthPickerInput {...defaultProps} valueFormat="MMMM" value={new Date(2022, 3, 11)} />
    );
    expectValue(container, 'April');

    rerender(
      <MonthPickerInput
        {...defaultProps}
        type="multiple"
        valueFormat="MMMM"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );
    expectValue(container, 'April, May');

    rerender(
      <MonthPickerInput
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
      <MonthPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
      />
    );
    expect(container.firstChild).toHaveClass('mantine-MonthPickerInput-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass(
      'mantine-MonthPickerInput-input'
    );

    expect(container.querySelector('table button')).toHaveClass(
      'mantine-MonthPickerInput-pickerControl'
    );
  });

  it('supports styles api (classNames)', () => {
    const { container } = render(
      <MonthPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
        classNames={{
          root: 'test-root',
          input: 'test-input',
          pickerControl: 'test-control',
        }}
      />
    );
    expect(container.firstChild).toHaveClass('test-root');
    expect(container.querySelector('[data-dates-input]')).toHaveClass('test-input');
    expect(container.querySelector('table button')).toHaveClass('test-control');
  });

  it('supports styles api (styles)', () => {
    const { container } = render(
      <MonthPickerInput
        {...defaultProps}
        popoverProps={{ opened: true, withinPortal: false, transitionProps: { duration: 0 } }}
        styles={{
          root: { borderColor: '#CCEE45' },
          input: { borderColor: '#EB4522' },
          pickerControl: { borderColor: '#EE4533' },
        }}
      />
    );
    expect(container.firstChild).toHaveStyle({ borderColor: '#CCEE45' });
    expect(container.querySelector('[data-dates-input]')).toHaveStyle({ borderColor: '#EB4522' });
    expect(container.querySelector('table button')).toHaveStyle({ borderColor: '#EE4533' });
  });
});
