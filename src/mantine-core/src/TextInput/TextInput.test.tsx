import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsFocusEvents,
  itSupportsInputProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { TextInput, TextInputProps } from './TextInput';

const defaultProps: TextInputProps = {
  label: 'test-label',
};

describe('@mantine/core/TextInput', () => {
  checkAccessibility([<TextInput label="test-input" />, <TextInput aria-label="test-input" />]);
  itSupportsInputProps(TextInput, defaultProps, 'TextInput');
  itSupportsFocusEvents(TextInput, defaultProps, 'input');
  itSupportsProviderVariant(TextInput, defaultProps, 'TextInput', ['root', 'input', 'label']);
  itSupportsProviderSize(TextInput, defaultProps, 'TextInput', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: TextInput,
    props: defaultProps,
    displayName: '@mantine/core/TextInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'TextInput',
  });
  itDisablesInputInsideDisabledFieldset(TextInput, defaultProps);

  it('supports uncontrolled state', async () => {
    render(<TextInput {...defaultProps} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    await userEvent.type(screen.getByRole('textbox'), 'test-value');
    expect(screen.getByRole('textbox')).toHaveValue('test-value');
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<TextInput {...defaultProps} value="" onChange={spy} />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    await userEvent.type(screen.getByRole('textbox'), 'test-value');
    expect(spy).toHaveBeenCalled();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });
});
