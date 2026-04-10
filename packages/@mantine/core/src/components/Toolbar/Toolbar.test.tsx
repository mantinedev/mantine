import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Toolbar, ToolbarProps, ToolbarStylesNames } from './Toolbar';

const defaultProps: ToolbarProps = {
  children: (
    <>
      <Toolbar.Toggle>Bold</Toolbar.Toggle>
      <Toolbar.Toggle>Italic</Toolbar.Toggle>
      <Toolbar.Toggle>Underline</Toolbar.Toggle>
    </>
  ),
};

describe('@mantine/core/Toolbar', () => {
  tests.itSupportsSystemProps<ToolbarProps, ToolbarStylesNames>({
    component: Toolbar,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Toolbar',
    stylesApiSelectors: ['root'],
    selector: '.mantine-Toolbar-root',
  });

  it('renders with role="toolbar"', () => {
    render(<Toolbar {...defaultProps} />);
    expect(screen.getByRole('toolbar')).toBeInTheDocument();
  });

  it('sets aria-orientation to horizontal by default', () => {
    render(<Toolbar {...defaultProps} />);
    expect(screen.getByRole('toolbar')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('sets aria-orientation to vertical when specified', () => {
    render(<Toolbar {...defaultProps} orientation="vertical" />);
    expect(screen.getByRole('toolbar')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('navigates with arrow keys in horizontal mode', async () => {
    render(<Toolbar {...defaultProps} />);
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[1]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[2]).toHaveFocus();
  });

  it('navigates with arrow keys in vertical mode', async () => {
    render(<Toolbar {...defaultProps} orientation="vertical" />);
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{ArrowDown}');
    expect(buttons[1]).toHaveFocus();
  });

  it('loops navigation when loop is true', async () => {
    render(<Toolbar {...defaultProps} loop />);
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[2].focus();
    });

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[0]).toHaveFocus();
  });

  it('does not loop navigation when loop is false', async () => {
    render(<Toolbar {...defaultProps} loop={false} />);
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[2].focus();
    });

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[2]).toHaveFocus();
  });

  it('navigates to first item with Home key', async () => {
    render(<Toolbar {...defaultProps} />);
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[2].focus();
    });

    await userEvent.keyboard('{Home}');
    expect(buttons[0]).toHaveFocus();
  });

  it('navigates to last item with End key', async () => {
    render(<Toolbar {...defaultProps} />);
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{End}');
    expect(buttons[2]).toHaveFocus();
  });

  it('renders with border by default', () => {
    render(<Toolbar {...defaultProps} />);
    expect(screen.getByRole('toolbar')).toHaveAttribute('data-with-border');
  });

  it('does not render border when withBorder is false', () => {
    render(<Toolbar {...defaultProps} withBorder={false} />);
    expect(screen.getByRole('toolbar')).not.toHaveAttribute('data-with-border');
  });

  it('renders Toolbar.Divider', () => {
    const { container } = render(
      <Toolbar>
        <Toolbar.Toggle>Bold</Toolbar.Toggle>
        <Toolbar.Divider />
        <Toolbar.Toggle>Italic</Toolbar.Toggle>
      </Toolbar>
    );
    expect(container.querySelector('.mantine-Toolbar-divider')).toBeInTheDocument();
  });
});
