import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { Button, ButtonProps } from './Button';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';

const defaultProps: ButtonProps = {};

describe('@mantine/core/Button', () => {
  checkAccessibility([<Button>Mantine button</Button>]);
  itRendersChildren(Button, defaultProps);
  itIsPolymorphic(Button, defaultProps);
  itSupportsFocusEvents(Button, defaultProps, 'button');
  itSupportsSystemProps({
    component: Button,
    props: defaultProps,
    displayName: '@mantine/core/Button',
    refType: HTMLButtonElement,
    providerName: 'Button',
    excludePadding: true,
  });

  it('passes type to button component', () => {
    render(<Button type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('renders left and right icons if they are provided', () => {
    render(<Button rightIcon="right-icon" leftIcon="left-icon" />);
    expect(screen.getByText('right-icon')).toBeInTheDocument();
    expect(screen.getByText('left-icon')).toBeInTheDocument();
  });

  it('sets disabled attribute based on prop', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('sets data-loading attribute based on loading prop', () => {
    render(<Button loading />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveAttribute('data-loading');
  });

  it('exposes ButtonGroup as static component', () => {
    expect(Button.Group).toBe(ButtonGroup);
  });

  it('is disabled when inside fieldset disabled', () => {
    render(
      <fieldset disabled>
        <Button type="submit" />
      </fieldset>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
