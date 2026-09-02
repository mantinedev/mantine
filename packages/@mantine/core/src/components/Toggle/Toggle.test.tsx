import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Toggle, ToggleProps, ToggleStylesNames } from './Toggle';

const defaultProps: ToggleProps = {
  children: 'Test',
};

describe('@mantine/core/Toggle', () => {
  tests.itSupportsSystemProps<ToggleProps, ToggleStylesNames>({
    component: Toggle,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Toggle',
    stylesApiSelectors: ['root'],
    selector: '.mantine-Toggle-root',
  });

  it('renders as button by default', () => {
    render(<Toggle>Click</Toggle>);
    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });

  it('applies data-active when active is true', () => {
    render(<Toggle active>Click</Toggle>);
    expect(screen.getByRole('button')).toHaveAttribute('data-active');
  });

  it('does not apply data-active when active is false', () => {
    render(<Toggle>Click</Toggle>);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-active');
  });

  it('toggles aria-pressed on click in uncontrolled mode and calls onActiveChange', async () => {
    const spy = jest.fn();
    render(<Toggle onActiveChange={spy}>Click</Toggle>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(button).toHaveAttribute('data-active');
    expect(spy).toHaveBeenLastCalledWith(true);

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(button).not.toHaveAttribute('data-active');
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('supports defaultActive', () => {
    render(<Toggle defaultActive>Click</Toggle>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('does not change active state on click in controlled mode but calls onActiveChange', async () => {
    const spy = jest.fn();
    render(
      <Toggle active={false} onActiveChange={spy}>
        Click
      </Toggle>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
    expect(spy).toHaveBeenCalledWith(true);
  });

  it('applies disabled attribute', () => {
    render(<Toggle disabled>Click</Toggle>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls onClick when clicked', async () => {
    const spy = jest.fn();
    render(<Toggle onClick={spy}>Click</Toggle>);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const spy = jest.fn();
    render(
      <Toggle disabled onClick={spy}>
        Click
      </Toggle>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(spy).not.toHaveBeenCalled();
  });

  it('ignores clicks and Enter and leaves the tab order when disabled as a non-button element', async () => {
    const onClick = jest.fn();
    const onActiveChange = jest.fn();
    render(
      <Toggle component="a" href="#" disabled onClick={onClick} onActiveChange={onActiveChange}>
        Link
      </Toggle>
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('tabindex', '-1');
    expect(link).toHaveAttribute('aria-disabled', 'true');

    await userEvent.click(link);
    await act(async () => {
      link.focus();
    });
    await userEvent.keyboard('{Enter}');

    expect(onClick).not.toHaveBeenCalled();
    expect(onActiveChange).not.toHaveBeenCalled();
    expect(link).toHaveAttribute('aria-pressed', 'false');
  });

  it('keeps consumer tabIndex when not disabled', () => {
    render(<Toggle tabIndex={0}>Click</Toggle>);
    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
  });

  it('applies data-auto-width when autoWidth is set', () => {
    render(<Toggle autoWidth>Click</Toggle>);
    expect(screen.getByRole('button')).toHaveAttribute('data-auto-width');
  });
});
