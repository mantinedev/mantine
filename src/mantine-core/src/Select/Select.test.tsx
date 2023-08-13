import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
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
  itSupportsProviderVariant(Select, defaultProps, 'Select', ['root', 'input', 'label']);
  itSupportsProviderSize(Select, defaultProps, 'Select', ['root', 'input', 'label']);
  itSupportsFocusEvents(Select, defaultProps, 'input[type="search"]');
  itSupportsInputProps(Select, defaultProps, 'Select');
  itSupportsSystemProps({
    component: Select,
    props: defaultProps,
    displayName: '@mantine/core/Select',
    refType: HTMLInputElement,
    othersSelector: '.mantine-Select-input',
    providerName: 'Select',
  });
  itDisablesInputInsideDisabledFieldset(Select, defaultProps);

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

  it('opens dropdown when input is clicked (searchable={false})', async () => {
    render(<Select {...defaultProps} initiallyOpened={false} searchable={false} />);
    expect(screen.queryAllByRole('option')).toHaveLength(0);

    await userEvent.click(screen.getByRole('searchbox'));
    expect(screen.queryAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('opens dropdown when input is clicked (searchable={true})', async () => {
    render(<Select {...defaultProps} initiallyOpened={false} searchable />);
    expect(screen.queryAllByRole('option')).toHaveLength(0);

    await userEvent.click(screen.getByRole('searchbox'));
    expect(screen.queryAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('supports uncontrolled state', async () => {
    render(<Select {...defaultProps} initiallyOpened={false} />);
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.click(screen.getAllByRole('option')[0]);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByRole('searchbox')).toHaveValue('Test item 1');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<Select {...defaultProps} value="test-item-1" initiallyOpened={false} onChange={spy} />);
    await userEvent.click(screen.getByRole('searchbox'));
    await userEvent.click(screen.getAllByRole('option')[1]);
    expect(screen.queryAllByRole('option')).toHaveLength(0);
    expect(screen.getByRole('searchbox')).toHaveValue('Test item 1');
    expect(spy).toHaveBeenCalledWith('test-item-2');
  });

  it('filters options based on input value', async () => {
    render(<Select {...defaultProps} searchable />);
    await userEvent.type(screen.getByRole('searchbox'), '2');
    expect(screen.getAllByRole('option')).toHaveLength(1);
    expect(screen.getByText('Test item 2')).toBeInTheDocument();
  });
});
