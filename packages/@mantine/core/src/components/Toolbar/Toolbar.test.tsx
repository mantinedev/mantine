import { createRef, useImperativeHandle, useState } from 'react';
import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { DirectionProvider } from '../../core';
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

const getTabIndexes = () => screen.getAllByRole('button').map((button) => button.tabIndex);

interface DynamicItemsHandle {
  setShowB: (value: boolean) => void;
  setShowC: (value: boolean) => void;
}

function DynamicItems({ ref }: { ref: React.Ref<DynamicItemsHandle> }) {
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(false);
  useImperativeHandle(ref, () => ({ setShowB, setShowC }));

  return (
    <>
      <Toolbar.Toggle>A</Toolbar.Toggle>
      {showB && <Toolbar.Toggle>B</Toolbar.Toggle>}
      {showC && <Toolbar.Toggle>C</Toolbar.Toggle>}
    </>
  );
}

describe('@mantine/core/Toolbar', () => {
  tests.itSupportsSystemProps<ToolbarProps, ToolbarStylesNames>({
    component: Toolbar,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/Toolbar',
    stylesApiSelectors: ['root', 'toggle'],
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

  it('sets roving tabindex that follows arrow key navigation', async () => {
    render(<Toolbar {...defaultProps} />);
    expect(getTabIndexes()).toStrictEqual([0, -1, -1]);

    const buttons = screen.getAllByRole('button');
    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{ArrowRight}');
    expect(getTabIndexes()).toStrictEqual([-1, 0, -1]);
  });

  it('is a single tab stop: Tab enters on the tabbable item and the next Tab leaves', async () => {
    render(
      <>
        <button type="button">Before</button>
        <Toolbar {...defaultProps} />
        <button type="button">After</button>
      </>
    );

    await act(async () => {
      screen.getByRole('button', { name: 'Before' }).focus();
    });

    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Bold' })).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'After' })).toHaveFocus();
  });

  it('tracks the tab stop when an item is focused with the mouse', async () => {
    render(<Toolbar {...defaultProps} />);
    await userEvent.click(screen.getByRole('button', { name: 'Underline' }));
    expect(getTabIndexes()).toStrictEqual([-1, -1, 0]);
  });

  it('skips disabled items during arrow key navigation', async () => {
    render(
      <Toolbar>
        <Toolbar.Toggle>Bold</Toolbar.Toggle>
        <Toolbar.Toggle disabled>Italic</Toolbar.Toggle>
        <Toolbar.Toggle>Underline</Toolbar.Toggle>
      </Toolbar>
    );
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[2]).toHaveFocus();
    expect(buttons[1].tabIndex).toBe(-1);
  });

  it('inverts horizontal arrow keys in rtl direction', async () => {
    render(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <Toolbar {...defaultProps} />
      </DirectionProvider>
    );
    const buttons = screen.getAllByRole('button');

    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{ArrowLeft}');
    expect(buttons[1]).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[0]).toHaveFocus();
  });

  it('keeps keyboard navigation and roving tabindex when a consumer ref is passed', async () => {
    const ref = createRef<HTMLDivElement>();
    render(<Toolbar {...defaultProps} ref={ref} />);

    expect(ref.current).toBe(screen.getByRole('toolbar'));
    expect(getTabIndexes()).toStrictEqual([0, -1, -1]);

    const buttons = screen.getAllByRole('button');
    await act(async () => {
      buttons[0].focus();
    });

    await userEvent.keyboard('{ArrowRight}');
    expect(buttons[1]).toHaveFocus();
  });

  it('keeps a single tab stop when an item mounts without Toolbar re-render', async () => {
    const handle = createRef<DynamicItemsHandle>();
    render(
      <Toolbar>
        <DynamicItems ref={handle} />
      </Toolbar>
    );
    expect(getTabIndexes()).toStrictEqual([0, -1]);

    await act(async () => {
      handle.current!.setShowC(true);
    });

    expect(getTabIndexes()).toStrictEqual([0, -1, -1]);
  });

  it('moves the tab stop to a remaining item when the active item unmounts without Toolbar re-render', async () => {
    const handle = createRef<DynamicItemsHandle>();
    render(
      <Toolbar>
        <DynamicItems ref={handle} />
      </Toolbar>
    );

    await act(async () => {
      screen.getByRole('button', { name: 'B' }).focus();
    });
    expect(getTabIndexes()).toStrictEqual([-1, 0]);

    await act(async () => {
      handle.current!.setShowB(false);
    });

    expect(getTabIndexes()).toStrictEqual([0]);
  });

  it('applies vars and styles for the toggle selector to Toolbar.Toggle', () => {
    render(
      <Toolbar
        vars={() => ({ root: {}, toggle: { '--toolbar-toggle-active-bg': 'rgb(1, 2, 3)' } })}
        styles={{ toggle: { fontSize: '17px' } }}
      >
        <Toolbar.Toggle>Bold</Toolbar.Toggle>
      </Toolbar>
    );
    const button = screen.getByRole('button', { name: 'Bold' });
    expect(button).toHaveStyle({ fontSize: '17px' });
    expect(button.style.getPropertyValue('--toolbar-toggle-active-bg')).toBe('rgb(1, 2, 3)');
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
