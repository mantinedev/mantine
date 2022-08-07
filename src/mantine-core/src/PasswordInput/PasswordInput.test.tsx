import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itSupportsInputIcon,
  itConnectsLabelAndInput,
  itSupportsInputWrapperProps,
} from '@mantine/tests';
import userEvent from '@testing-library/user-event';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

const defaultProps: PasswordInputProps = {};

describe('@mantine/core/PasswordInput', () => {
  itSupportsFocusEvents(PasswordInput, defaultProps, 'input');
  itSupportsInputWrapperProps(PasswordInput, defaultProps, 'PasswordInput');
  itSupportsInputIcon(PasswordInput, defaultProps);
  itConnectsLabelAndInput(PasswordInput, defaultProps);
  checkAccessibility([<PasswordInput label="test" />, <PasswordInput aria-label="test" />]);

  itSupportsSystemProps({
    component: PasswordInput,
    props: defaultProps,
    displayName: '@mantine/core/PasswordInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'PasswordInput',
  });

  it('sets required on input', () => {
    render(<PasswordInput required />);
    expect(document.querySelector('input')).toHaveAttribute('required');
  });

  it('sets input type based on password visibility state', async () => {
    render(<PasswordInput />);
    expect(document.querySelector('input')).toHaveAttribute('type', 'password');
    await userEvent.click(screen.getByRole('button', { hidden: true }));
    expect(document.querySelector('input')).toHaveAttribute('type', 'text');
  });

  it('sets toggle button tabIndex based on toggleTabIndex prop', () => {
    const { container: focusable } = render(<PasswordInput toggleTabIndex={0} />);
    const { container: notFocusable } = render(<PasswordInput toggleTabIndex={-1} />);
    expect(focusable.querySelector('button')).toHaveAttribute('tabindex', '0');
    expect(notFocusable.querySelector('button')).toHaveAttribute('tabindex', '-1');
  });
});
