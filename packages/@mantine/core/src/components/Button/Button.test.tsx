import { render, screen, tests, userEvent } from '@mantine-tests/core';
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
    varsResolver: true,
    polymorphic: true,
    children: true,
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

  it('sets aria-busy when loading prop is set', () => {
    const { rerender } = render(<Button loading>Save</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    rerender(<Button loading={false}>Save</Button>);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy');
  });

  it('disables the button and blocks click when loading', async () => {
    const spy = jest.fn();
    render(
      <Button loading onClick={spy}>
        Save
      </Button>
    );
    expect(screen.getByRole('button')).toBeDisabled();
    await userEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();
  });

  it('keeps the button clickable with data-disabled and sets aria-disabled', async () => {
    const spy = jest.fn();
    render(
      <Button data-disabled onClick={spy}>
        Save
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    await userEvent.click(button);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('sets aria-disabled on polymorphic links with data-disabled', () => {
    render(
      <Button component="a" href="#" data-disabled>
        Link
      </Button>
    );
    expect(screen.getByRole('link')).toHaveAttribute('aria-disabled', 'true');
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
