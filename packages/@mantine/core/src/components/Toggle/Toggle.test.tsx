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

  it('applies data-auto-width when autoWidth is set', () => {
    render(<Toggle autoWidth>Click</Toggle>);
    expect(screen.getByRole('button')).toHaveAttribute('data-auto-width');
  });
});
