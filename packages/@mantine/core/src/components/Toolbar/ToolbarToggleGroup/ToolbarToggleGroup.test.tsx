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

    const bold = screen.getByRole('button', { name: 'Bold' });
    const italic = screen.getByRole('button', { name: 'Italic' });
    expect(bold).toHaveAttribute('aria-pressed', 'false');
    expect(italic).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(bold);
    expect(onChange).toHaveBeenLastCalledWith('bold');
    expect(bold).toHaveAttribute('aria-pressed', 'true');
    expect(italic).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(italic);
    expect(onChange).toHaveBeenLastCalledWith('italic');
    expect(bold).toHaveAttribute('aria-pressed', 'false');
    expect(italic).toHaveAttribute('aria-pressed', 'true');
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

    const bold = screen.getByRole('button', { name: 'Bold' });
    const italic = screen.getByRole('button', { name: 'Italic' });
    expect(bold).toHaveAttribute('aria-pressed', 'true');
    expect(italic).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(italic);
    expect(onChange).toHaveBeenLastCalledWith(['bold', 'italic']);
    expect(bold).toHaveAttribute('aria-pressed', 'true');
    expect(italic).toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(bold);
    expect(onChange).toHaveBeenLastCalledWith(['italic']);
    expect(bold).toHaveAttribute('aria-pressed', 'false');
    expect(italic).toHaveAttribute('aria-pressed', 'true');
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

    const bold = screen.getByRole('button', { name: 'Bold' });
    expect(bold).toHaveAttribute('aria-pressed', 'true');

    await userEvent.click(bold);
    expect(onChange).toHaveBeenCalledWith(null);
    expect(bold).toHaveAttribute('aria-pressed', 'false');
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
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('aria-pressed', 'true');
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
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('does not throw when type changes from single to multiple in uncontrolled mode', async () => {
    const { rerender } = render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    expect(() =>
      rerender(
        <>
          <Toolbar>
            <Toolbar.ToggleGroup type="multiple">
              <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
              <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
            </Toolbar.ToggleGroup>
          </Toolbar>
        </>
      )
    ).not.toThrow();

    const bold = screen.getByRole('button', { name: 'Bold' });
    expect(bold).toHaveAttribute('aria-pressed', 'false');

    await userEvent.click(bold);
    expect(bold).toHaveAttribute('aria-pressed', 'true');
  });

  it('keeps the first selected item when type changes from multiple to single in uncontrolled mode', () => {
    const { rerender } = render(
      <Toolbar>
        <Toolbar.ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );

    rerender(
      <>
        <Toolbar>
          <Toolbar.ToggleGroup type="single">
            <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
        </Toolbar>
      </>
    );

    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('applies vars and styles for the toggle selector to Toolbar.ToggleItem', () => {
    render(
      <Toolbar
        vars={() => ({ root: {}, toggle: { '--toolbar-toggle-active-bg': 'rgb(1, 2, 3)' } })}
        styles={{ toggle: { fontSize: '17px' } }}
      >
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    expect(button).toHaveStyle({ fontSize: '17px' });
    expect(button.style.getPropertyValue('--toolbar-toggle-active-bg')).toBe('rgb(1, 2, 3)');
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

  it('sets data-auto-width on toggle items with autoWidth', () => {
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="save" autoWidth>
            Save
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="bold">Bold</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Save' })).toHaveAttribute('data-auto-width');
    expect(screen.getByRole('button', { name: 'Bold' })).not.toHaveAttribute('data-auto-width');
  });

  it('sets tabindex=-1 on disabled toggle items', () => {
    render(
      <Toolbar>
        <Toolbar.ToggleGroup type="single" disabled>
          <Toolbar.ToggleItem value="left">Left</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
        <Toolbar.ToggleGroup type="single">
          <Toolbar.ToggleItem value="bold" disabled>
            Bold
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic">Italic</Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Left' })).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveAttribute('tabindex', '-1');
    expect(screen.getByRole('button', { name: 'Italic' })).toHaveAttribute('tabindex', '0');
  });
});
