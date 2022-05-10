import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
} from '@mantine/tests';
import { Select, SelectProps } from './Select';

const defaultProps: SelectProps = {
  initiallyOpened: true,
  label: 'test-label',
  withinPortal: false,
  data: [
    { value: 'test-item-1', label: 'Test item 1' },
    { value: 'test-item-2', label: 'Test item 2' },
  ],
};

describe('@mantine/core/Select', () => {
  checkAccessibility([<Select {...defaultProps} />]);
  itSupportsFocusEvents(Select, defaultProps, 'input[type="text"]');
  itSupportsInputProps(Select, defaultProps, 'Select');
  itSupportsSystemProps({
    component: Select,
    props: defaultProps,
    displayName: '@mantine/core/Select',
    refType: HTMLInputElement,
    othersSelector: '.mantine-Select-input',
    name: 'Select',
  });

  it('renders hidden input with current input value', () => {
    const { container } = render(
      <Select {...defaultProps} name="custom-select" form="custom-form" value="test-1" />
    );
    expect(container.querySelector('input[name="custom-select"]')).toHaveValue('test-1');
    expect(container.querySelector('input[name="custom-select"]')).toHaveAttribute(
      'form',
      'custom-form'
    );
  });

  it('opens dropdown when input is clicked (searchable={false})', () => {
    render(<Select {...defaultProps} initiallyOpened={false} searchable={false} />);
    expect(screen.queryAllByRole('option')).toHaveLength(0);

    userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('opens dropdown when input is clicked (searchable={true})', () => {
    render(<Select {...defaultProps} initiallyOpened={false} searchable />);
    expect(screen.queryAllByRole('option')).toHaveLength(0);

    userEvent.click(screen.getByRole('textbox'));
    expect(screen.queryAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('supports uncontrolled state', () => {
    render(<Select {...defaultProps} initiallyOpened={false} />);
    userEvent.click(screen.getByRole('textbox'));
    userEvent.click(screen.getAllByRole('option')[0]);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByRole('textbox')).toHaveValue('Test item 1');
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<Select {...defaultProps} value="test-item-1" initiallyOpened={false} onChange={spy} />);
    userEvent.click(screen.getByRole('textbox'));
    userEvent.click(screen.getAllByRole('option')[1]);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByRole('textbox')).toHaveValue('Test item 1');
    expect(spy).toHaveBeenCalledWith('test-item-2');
  });

  it('filters options based on input value', () => {
    render(<Select {...defaultProps} searchable />);
    userEvent.type(screen.getByRole('textbox'), '2');
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByText('Test item 2')).toBeInTheDocument();
  });

  it('clears value when clear button is clicked', () => {
    const spy = jest.fn();
    render(
      <Select
        {...defaultProps}
        clearable
        value="test-1"
        clearButtonLabel="test-clear"
        onChange={spy}
      />
    );
    userEvent.click(screen.getByLabelText('test-clear'));
    expect(spy).toHaveBeenCalledWith(null);
  });
});
