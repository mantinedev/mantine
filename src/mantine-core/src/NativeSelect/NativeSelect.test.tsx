import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { NativeSelect, NativeSelectProps } from './NativeSelect';

const defaultProps: NativeSelectProps = {
  label: 'test-label',
  data: ['test-item-1', 'test-item-2', 'test-item-3'],
};

describe('@mantine/core/NativeSelect', () => {
  itSupportsInputProps(NativeSelect, defaultProps, 'NativeSelect');
  itSupportsFocusEvents(NativeSelect, defaultProps, 'select');
  itSupportsProviderVariant(NativeSelect, defaultProps, 'NativeSelect', ['root', 'input', 'label']);
  itSupportsProviderSize(NativeSelect, defaultProps, 'NativeSelect', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: NativeSelect,
    props: defaultProps,
    displayName: '@mantine/core/NativeSelect',
    refType: HTMLSelectElement,
    othersSelector: '.mantine-NativeSelect-input',
    providerName: 'NativeSelect',
  });

  checkAccessibility([
    <NativeSelect {...defaultProps} label="test-label" />,
    <NativeSelect {...defaultProps} aria-label="test-label" />,
  ]);

  itDisablesInputInsideDisabledFieldset(NativeSelect, defaultProps, 'NativeSelect');

  it('renders correct amount of options', () => {
    render(<NativeSelect {...defaultProps} />);
    expect(screen.getAllByRole('option')).toHaveLength(defaultProps.data.length);
  });

  it('supports uncontrolled state', async () => {
    render(<NativeSelect data={['option-1', 'option-2']} />);
    expect(screen.getByRole('combobox')).toHaveValue('option-1');
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'option-2' })
    );
    expect(screen.getByRole('combobox')).toHaveValue('option-2');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(
      <NativeSelect
        value="option-2"
        data={['option-1', 'option-2']}
        onChange={(event) => spy(event.currentTarget.value)}
      />
    );

    expect(screen.getByRole('combobox')).toHaveValue('option-2');
    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'option-1' })
    );
    expect(screen.getByRole('combobox')).toHaveValue('option-2');
    expect(spy).toHaveBeenCalledWith('option-1');
  });
});
