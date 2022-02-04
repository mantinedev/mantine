import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  renderWithAct,
} from '@mantine/tests';
import { Select, SelectProps } from './Select';

const defaultProps: SelectProps = {
  initiallyOpened: true,
  label: 'test-label',
  withinPortal: false,
  data: [
    { value: 'test-1', label: 'Test 1' },
    { value: 'test-2', label: 'Test 2' },
  ],
};

const data = Array(50)
  .fill(0)
  .map((_, index) => ({ value: index.toString(), label: index.toString() }));

describe('@mantine/core/Select', () => {
  checkAccessibility([<Select {...defaultProps} />]);
  itSupportsFocusEvents(Select, defaultProps, 'input');
  itSupportsInputProps(Select, defaultProps, 'Select');
  itSupportsSystemProps({
    component: Select,
    props: defaultProps,
    displayName: '@mantine/core/Select',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('renders correct amount of items based on data prop', async () => {
    await renderWithAct(<Select {...defaultProps} data={data.slice(0, 5)} />);
    expect(screen.getAllByRole('option')).toHaveLength(5);
  });

  it('renders correct amount of items based on filter prop', async () => {
    await renderWithAct(
      <Select
        {...defaultProps}
        data={data}
        searchable
        filter={(_query, item) => item.value.includes('2')}
      />
    );

    // Numbers 0-50 which include 2
    expect(screen.getAllByRole('option')).toHaveLength(14);
  });

  it('renders correct amount of disabled items', async () => {
    const { container } = await renderWithAct(
      <Select
        {...defaultProps}
        data={Array(50)
          .fill(0)
          .map((_, index) => ({
            value: index.toString(),
            label: index.toString(),
            disabled: index % 2 === 0,
          }))}
      />
    );

    expect(container.querySelectorAll('.mantine-Select-item[disabled]')).toHaveLength(25);
  });

  it('clears value when clear button is clicked', async () => {
    const spy = jest.fn();
    await renderWithAct(
      <Select
        {...defaultProps}
        clearable
        value="test-1"
        clearButtonLabel="test-clear"
        onChange={spy}
      />
    );
    userEvent.click(screen.getByLabelText('test-clear'));
    expect(spy).toHaveBeenCalled();
  });

  it('renders hidden input with current input value', async () => {
    const { container } = await renderWithAct(
      <Select {...defaultProps} name="custom-select" value="test-1" />
    );
    expect(container.querySelector('input[name="custom-select"]')).toHaveValue('Test 1');
  });
});
