import { render, tests } from '@mantine-tests/core';
import { Button, ButtonProps, ButtonStylesNames } from './Button';
import { ButtonGroup } from './ButtonGroup/ButtonGroup';

const defaultProps: ButtonProps = {
  leftSection: '$',
  children: 'test-button',
  loading: true,
};

describe('@mantine/core/Button', () => {
  tests.axe([
    <Button aria-label="test" key="1" />,
    <Button.Group aria-label="test" key="2">
      <Button aria-label="test-1" />
      <Button aria-label="test-2" />
    </Button.Group>,
  ]);

  tests.itSupportsFocusEvents<ButtonProps>({
    component: Button,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<ButtonProps, ButtonStylesNames>({
    component: Button,
    props: defaultProps,
    polymorphic: true,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/Button',
    stylesApiSelectors: ['root', 'inner', 'label', 'loader', 'section'],
  });

  it('sets data-loading attribute when loading prop is set to true', () => {
    const { container, rerender } = render(<Button loading />);
    expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    rerender(<Button loading={false} />);
    expect(container.querySelector('[data-loading]')).not.toBeInTheDocument();
  });

  it('sets data-disabled attribute when disabled prop is set to true', () => {
    const { container, rerender } = render(<Button disabled />);
    expect(container.querySelector('[data-disabled]')).toBeInTheDocument();
    rerender(<Button disabled={false} />);
    expect(container.querySelector('[data-disabled]')).not.toBeInTheDocument();
  });

  it('sets data-disabled attribute when data-disabled prop is set to true', () => {
    const { container, rerender } = render(<Button data-disabled />);
    expect(container.querySelector('[data-disabled]')).toBeInTheDocument();
    rerender(<Button data-disabled={false} />);
    expect(container.querySelector('[data-disabled]')).not.toBeInTheDocument();
  });

  it('sets disabled attribute when disabled prop is set to true', () => {
    const { container, rerender } = render(<Button disabled />);
    expect(container.querySelector('button')).toHaveAttribute('disabled');
    rerender(<Button disabled={false} />);
    expect(container.querySelector('button')).not.toHaveAttribute('disabled');
  });

  it('renders given left section', () => {
    const { container } = render(<Button leftSection="test-lect-section" />);
    expect(
      container.querySelector('.mantine-Button-section[data-position="left"]')
    ).toHaveTextContent('test-lect-section');
  });

  it('renders given right section', () => {
    const { container } = render(<Button rightSection="test-right-section" />);
    expect(
      container.querySelector('.mantine-Button-section[data-position="right"]')
    ).toHaveTextContent('test-right-section');
  });

  it('exposes Button.Group component', () => {
    expect(Button.Group).toBe(ButtonGroup);
  });
});
