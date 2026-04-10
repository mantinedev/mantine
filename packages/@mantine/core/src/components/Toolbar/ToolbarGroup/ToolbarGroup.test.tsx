import { render, screen } from '@mantine-tests/core';
import { Toolbar } from '../Toolbar';

describe('@mantine/core/ToolbarGroup', () => {
  it('renders children', () => {
    render(
      <Toolbar>
        <Toolbar.Group>
          <Toolbar.Toggle>Bold</Toolbar.Toggle>
          <Toolbar.Toggle>Italic</Toolbar.Toggle>
        </Toolbar.Group>
      </Toolbar>
    );
    expect(screen.getByRole('button', { name: 'Bold' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Italic' })).toBeInTheDocument();
  });

  it('has group role', () => {
    render(
      <Toolbar>
        <Toolbar.Group>
          <Toolbar.Toggle>Bold</Toolbar.Toggle>
        </Toolbar.Group>
      </Toolbar>
    );
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('passes orientation data attribute from context', () => {
    render(
      <Toolbar orientation="vertical">
        <Toolbar.Group>
          <Toolbar.Toggle>Bold</Toolbar.Toggle>
        </Toolbar.Group>
      </Toolbar>
    );
    expect(screen.getByRole('group')).toHaveAttribute('data-orientation', 'vertical');
  });
});
