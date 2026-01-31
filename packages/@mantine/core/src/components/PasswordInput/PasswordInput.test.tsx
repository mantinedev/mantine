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
    varsResolver: true,
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
    render(<PasswordInput label="Password" />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });
    expect(toggleButton).toHaveAttribute('aria-pressed', 'false');
  });

  it('sets aria-pressed="true" on visibility toggle button when password is visible', () => {
    render(<PasswordInput label="Password" defaultVisible />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });
    expect(toggleButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('toggles aria-pressed attribute when visibility toggle button is clicked', async () => {
    const user = userEvent.setup();
    render(<PasswordInput label="Password" />);
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

  it('toggles input type from password to text when visibility is toggled', async () => {
    const user = userEvent.setup();
    render(<PasswordInput label="Password" />);
    const input = screen.getByLabelText('Password') as HTMLInputElement;
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });

    expect(input.type).toBe('password');

    await user.click(toggleButton);
    expect(input.type).toBe('text');

    await user.click(toggleButton);
    expect(input.type).toBe('password');
  });

  it('supports controlled visible prop', async () => {
    const { rerender } = render(<PasswordInput label="Password" visible={false} />);

    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
    expect(screen.getByRole('button', { name: 'Toggle password visibility' })).toHaveAttribute(
      'aria-pressed',
      'false'
    );

    rerender(<PasswordInput label="Password" visible />);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
    expect(screen.getByRole('button', { name: 'Toggle password visibility' })).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });

  it('supports defaultVisible prop for uncontrolled mode', () => {
    render(<PasswordInput label="Password" defaultVisible />);
    const input = screen.getByLabelText('Password') as HTMLInputElement;
    expect(input.type).toBe('text');
  });

  it('passes visibilityToggleButtonProps to toggle button', () => {
    render(
      <PasswordInput
        label="Password"
        visibilityToggleButtonProps={{
          'aria-label': 'Custom toggle label',
          'data-testid': 'custom-toggle-button',
          className: 'custom-class',
        }}
      />
    );
    const toggleButton = screen.getByTestId('custom-toggle-button');
    expect(toggleButton).toHaveAttribute('aria-label', 'Custom toggle label');
    expect(toggleButton).toHaveClass('custom-class');
  });

  it('hides visibility toggle when rightSection prop is provided', () => {
    render(
      <PasswordInput
        label="Password"
        rightSection={<span data-testid="custom-right-section">Custom</span>}
        visibilityToggleButtonProps={{
          'aria-label': 'Toggle password visibility',
          'data-testid': 'toggle-visibility-button',
        }}
      />
    );

    expect(screen.getByTestId('custom-right-section')).toBeInTheDocument();
    expect(screen.queryByTestId('toggle-visibility-button')).not.toBeInTheDocument();
  });

  it('disables visibility toggle button when disabled prop is set', () => {
    render(<PasswordInput label="Password" disabled />);
    const toggleButton = screen.getByRole('button', { name: 'Toggle password visibility' });
    expect(toggleButton).toBeDisabled();
  });
});
