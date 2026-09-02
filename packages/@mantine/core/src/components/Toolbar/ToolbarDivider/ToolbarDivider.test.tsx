import { render, screen } from '@mantine-tests/core';
import { Toolbar } from '../Toolbar';

describe('@mantine/core/ToolbarDivider', () => {
  it('renders with correct orientation data attribute from context', () => {
    const { container } = render(
      <Toolbar>
        <Toolbar.Divider />
      </Toolbar>
    );
    expect(container.querySelector('.mantine-Toolbar-divider')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );
  });

  it('renders vertical orientation when toolbar is vertical', () => {
    const { container } = render(
      <Toolbar orientation="vertical">
        <Toolbar.Divider />
      </Toolbar>
    );
    expect(container.querySelector('.mantine-Toolbar-divider')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('exposes a vertical separator in a horizontal toolbar', () => {
    render(
      <Toolbar>
        <Toolbar.Divider />
      </Toolbar>
    );
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('exposes a horizontal separator in a vertical toolbar', () => {
    render(
      <Toolbar orientation="vertical">
        <Toolbar.Divider />
      </Toolbar>
    );
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('allows overriding aria-orientation', () => {
    render(
      <Toolbar>
        <Toolbar.Divider aria-orientation="horizontal" />
      </Toolbar>
    );
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });
});
