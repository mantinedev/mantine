import userEvent from '@testing-library/user-event';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

const defaultProps: PasswordInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/PasswordInput', () => {
  tests.axe([
    <PasswordInput
      aria-label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      key="1"
    />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      key="2"
    />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      error
      key="3"
    />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      error="test-error"
      id="test"
      key="4"
    />,
    <PasswordInput
      label="test-label"
      visibilityToggleButtonProps={{ 'aria-label': 'test' }}
      description="test-description"
      key="5"
    />,
  ]);

  tests.itSupportsSystemProps<PasswordInputProps, __InputStylesNames>({
    component: PasswordInput,
    props: defaultProps,
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
    displayName: '@mantine/core/PasswordInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
    providerStylesApi: false,
  });

  tests.itSupportsInputProps<PasswordInputProps>({
    component: PasswordInput,
    props: defaultProps,
    selector: 'input',
  });

  it('sets aria-pressed="false" on visibility toggle button when password is hidden', () => {
    render(
      <PasswordInput
        label="Password"
        visibilityToggleButtonProps={{ 'aria-label': 'Toggle password visibility' }}
      />
    );
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });
    expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
  });

  it('sets aria-pressed="true" on visibility toggle button when password is visible', () => {
    render(
      <PasswordInput
        label="Password"
        defaultVisible
        visibilityToggleButtonProps={{ 'aria-label': 'Toggle password visibility' }}
      />
    );
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });
    expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('toggles aria-pressed attribute when visibility toggle button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <PasswordInput
        label="Password"
        visibilityToggleButtonProps={{ 'aria-label': 'Toggle password visibility' }}
      />
    );
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });

    expect(toggleButton).toHaveAttribute('aria-pressed', 'false');

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-pressed', 'true');

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
  });

  it('allows aria-pressed to be overridden via visibilityToggleButtonProps', () => {
    render(
      <PasswordInput
        label="Password"
        visibilityToggleButtonProps={{
          'aria-label': 'Toggle password visibility',
          'aria-pressed': 'mixed' as any,
        }}
      />
    );
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });
    expect(toggleButton).toHaveAttribute('aria-pressed', 'mixed');
  });
});
