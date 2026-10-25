import { act } from '@testing-library/react';
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

  it('sets aria-pressed and data-active when active is set', () => {
    render(
      <Toolbar>
        <Toolbar.Toggle active>Bold</Toolbar.Toggle>
        <Toolbar.Toggle active={false}>Italic</Toolbar.Toggle>
      </Toolbar>
    );
    const bold = screen.getByRole('button', { name: 'Bold' });
    const italic = screen.getByRole('button', { name: 'Italic' });
    expect(bold).toHaveAttribute('aria-pressed', 'true');
    expect(bold).toHaveAttribute('data-active');
    expect(italic).toHaveAttribute('aria-pressed', 'false');
    expect(italic).not.toHaveAttribute('data-active');
  });

  it('does not set aria-pressed when active is not passed', () => {
    render(
      <Toolbar>
        <Toolbar.Toggle>Bold</Toolbar.Toggle>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Bold' })).not.toHaveAttribute('aria-pressed');
  });

  it('ignores clicks and Enter and leaves the tab order when disabled as a non-button element', async () => {
    const spy = jest.fn();
    render(
      <Toolbar>
        <Toolbar.Toggle component="a" href="#" disabled onClick={spy}>
          Link
        </Toolbar.Toggle>
      </Toolbar>
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('tabindex', '-1');
    expect(link).toHaveAttribute('aria-disabled', 'true');

    await userEvent.click(link);
    await act(async () => {
      link.focus();
    });
    await userEvent.keyboard('{Enter}');

    expect(spy).not.toHaveBeenCalled();
  });

  it('calls onClick when rendered as a non-button element and not disabled', async () => {
    const spy = jest.fn();
    render(
      <Toolbar>
        <Toolbar.Toggle component="a" href="#" onClick={spy}>
          Link
        </Toolbar.Toggle>
      </Toolbar>
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('tabindex', '0');
    expect(link).not.toHaveAttribute('aria-disabled');
    await userEvent.click(link);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
