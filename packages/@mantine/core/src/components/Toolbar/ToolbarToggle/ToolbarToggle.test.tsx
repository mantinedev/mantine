import { render, screen, userEvent } from '@mantine-tests/core';
import { Toolbar } from '../Toolbar';

describe('@mantine/core/ToolbarToggle', () => {
  it('renders as a button', () => {
    render(
      <Toolbar>
        <Toolbar.Toggle>Bold</Toolbar.Toggle>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const spy = jest.fn();
    render(
      <Toolbar>
        <Toolbar.Toggle onClick={spy}>Bold</Toolbar.Toggle>
      </Toolbar>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const spy = jest.fn();
    render(
      <Toolbar>
        <Toolbar.Toggle onClick={spy} disabled>
          Bold
        </Toolbar.Toggle>
      </Toolbar>
    );
    await userEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(spy).not.toHaveBeenCalled();
  });

  it('applies data-disabled attribute when disabled', () => {
    render(
      <Toolbar>
        <Toolbar.Toggle disabled>Bold</Toolbar.Toggle>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('data-disabled');
  });
});
