import { render, screen, userEvent } from '@mantine-tests/core';
import { Toolbar } from '../Toolbar';

describe('@mantine/core/ToolbarToggleGroup', () => {
  it('renders toggle items', () => {
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Italic' })).toBeInTheDocument();
  });

  it('supports single selection mode', async () => {
    const onChange = jest.fn();
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single" onChange={onChange}>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(onChange).toHaveBeenCalledWith('bold');
  });

  it('supports multiple selection mode', async () => {
    const onChange = jest.fn();
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold']} onChange={onChange}>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Italic' }));
    expect(onChange).toHaveBeenCalledWith(['bold', 'italic']);
  });

  it('deselects in single mode when clicking active item', async () => {
    const onChange = jest.fn();
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single" defaultValue="bold" onChange={onChange}>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('removes item from value in multiple mode when clicking active item', async () => {
    const onChange = jest.fn();
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold', 'italic']} onChange={onChange}>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    await userEvent.click(screen.getByRole('button', { name: 'Bold' }));
    expect(onChange).toHaveBeenCalledWith(['italic']);
  });

  it('supports controlled mode', async () => {
    const onChange = jest.fn();
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single" value="bold" onChange={onChange}>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('data-active');
    expect(screen.getByRole('button', { name: 'Italic' })).not.toHaveAttribute('data-active');

    await userEvent.click(screen.getByRole('button', { name: 'Italic' }));
    expect(onChange).toHaveBeenCalledWith('italic');
  });

  it('disables all items when group disabled prop is set', () => {
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single" disabled>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    expect(screen.getByRole('button', { name: 'Bold' })).toBeDisabled();
  });

  it('disables individual items', () => {
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold" disabled>
            Bold
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    expect(screen.getByRole('button', { name: 'Bold' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Italic' })).not.toBeDisabled();
  });
});
