import { fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Popover, PopoverProps, PopoverStylesNames } from './Popover';
import { PopoverContextMenu } from './PopoverContextMenu/PopoverContextMenu';
import { PopoverDropdown } from './PopoverDropdown/PopoverDropdown';
import { PopoverTarget } from './PopoverTarget/PopoverTarget';

const defaultProps: PopoverProps = {
  opened: true,
  withinPortal: false,
  withArrow: true,
  children: 'test-children',
};

function TestContainer(props: Partial<PopoverProps>) {
  return (
    <Popover transitionProps={{ duration: 0 }} withinPortal={false} {...props}>
      <Popover.Target>
        <button type="button">test-target</button>
      </Popover.Target>

      <Popover.Dropdown>
        <div>test-dropdown</div>
        <input aria-label="1" />
        <input aria-label="2" data-autofocus />
        <input aria-label="3" />
      </Popover.Dropdown>
    </Popover>
  );
}

describe('@mantine/core/Popover', () => {
  tests.axe([<TestContainer opened key="1" />, <TestContainer opened={false} key="2" />]);
  tests.itHasExtend({ component: Popover });
  tests.itRendersChildren({ component: Popover, props: defaultProps });
  tests.itSupportsStylesApi<PopoverProps, PopoverStylesNames>({
    component: TestContainer,
    props: defaultProps,
    selectors: ['dropdown', 'arrow'],
    providerName: 'Popover',
  });

  it('supports uncontrolled mode', async () => {
    render(<TestContainer />);
    expect(screen.queryAllByText('test-dropdown')).toHaveLength(0);

    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));
    expect(screen.queryAllByText('test-dropdown')).toHaveLength(0);
  });

  it('correctly handles defaultOpened prop', () => {
    render(<TestContainer defaultOpened />);
    expect(screen.getByText('test-dropdown')).toBeInTheDocument();
  });

  it('calls onOpen and onClose functions when dropdown state changes', async () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    render(<TestContainer onOpen={onOpen} onClose={onClose} />);

    await userEvent.click(screen.getByRole('button'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByRole('button'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('supports controlled mode', async () => {
    const spy = jest.fn();
    render(<TestContainer opened onChange={spy} />);

    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(0);

    await userEvent.type(screen.getByRole('dialog'), '{Escape}');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(false);

    await userEvent.click(document.body);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenLastCalledWith(false);
  });

  it('correctly handles closeOnClickOutside={false}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnClickOutside={false} onClose={spy} />);
    await userEvent.click(document.body);
    expect(spy).not.toHaveBeenCalled();
  });

  it('correctly handles closeOnClickOutside={true}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnClickOutside onClose={spy} />);
    await userEvent.click(document.body);
    expect(spy).toHaveBeenCalled();
  });

  it('correctly handles closeOnEscape={false}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnEscape={false} onClose={spy} />);
    await userEvent.type(screen.getByRole('dialog'), '{Escape}');
    expect(spy).not.toHaveBeenCalled();
  });

  it('correctly handles closeOnEscape={true}', async () => {
    const spy = jest.fn();
    render(<TestContainer defaultOpened closeOnEscape onClose={spy} />);
    await userEvent.type(screen.getByRole('dialog'), '{Escape}');
    expect(spy).toHaveBeenCalled();
  });

  it('sets dropdown z-index based on zIndex prop', () => {
    render(<TestContainer defaultOpened zIndex={452} />);
    expect(screen.getByRole('dialog')).toHaveStyle({ zIndex: 452 });
  });

  it('correctly handles withArrow={true}', () => {
    const { container } = render(<TestContainer defaultOpened withArrow />);
    expect(container.querySelectorAll('.mantine-Popover-arrow')).toHaveLength(1);
  });

  it('correctly handles withArrow={false}', () => {
    const { container } = render(<TestContainer defaultOpened withArrow={false} />);
    expect(container.querySelectorAll('.mantine-Popover-arrow')).toHaveLength(0);
  });

  it('exposes PopoverTarget and PopoverDropdown as static properties', () => {
    expect(Popover.Dropdown).toBe(PopoverDropdown);
    expect(Popover.Target).toBe(PopoverTarget);
    expect(Popover.ContextMenu).toBe(PopoverContextMenu);
  });

  describe('Popover.ContextMenu', () => {
    function ContextMenuContainer({ disabled }: { disabled?: boolean } = {}) {
      return (
        <Popover transitionProps={{ duration: 0 }} withinPortal={false}>
          <Popover.ContextMenu disabled={disabled}>
            <div data-testid="context-area">Right-click me</div>
          </Popover.ContextMenu>
          <Popover.Dropdown>
            <div>test-context-dropdown</div>
          </Popover.Dropdown>
        </Popover>
      );
    }

    it('opens the popover on contextmenu event', () => {
      render(<ContextMenuContainer />);
      expect(screen.queryByText('test-context-dropdown')).not.toBeInTheDocument();

      fireEvent.contextMenu(screen.getByTestId('context-area'), { clientX: 100, clientY: 200 });

      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();
    });

    it('prevents default browser context menu', () => {
      render(<ContextMenuContainer />);
      const target = screen.getByTestId('context-area');
      const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
      fireEvent(target, event);
      expect(event.defaultPrevented).toBe(true);
    });

    it('does not open and does not prevent default when disabled', () => {
      render(<ContextMenuContainer disabled />);
      const target = screen.getByTestId('context-area');
      const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
      fireEvent(target, event);
      expect(event.defaultPrevented).toBe(false);
      expect(screen.queryByText('test-context-dropdown')).not.toBeInTheDocument();
    });

    it('preserves custom onContextMenu handler on the wrapped child', () => {
      const handler = jest.fn();
      render(
        <Popover transitionProps={{ duration: 0 }} withinPortal={false}>
          <Popover.ContextMenu>
            <div data-testid="context-area" onContextMenu={handler}>
              Right-click me
            </div>
          </Popover.ContextMenu>
          <Popover.Dropdown>
            <div>test-context-dropdown</div>
          </Popover.Dropdown>
        </Popover>
      );

      fireEvent.contextMenu(screen.getByTestId('context-area'), { clientX: 10, clientY: 10 });
      expect(handler).toHaveBeenCalledTimes(1);
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();
    });

    it('sets data-expanded on the wrapped child when popover is open', () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');
      expect(area).not.toHaveAttribute('data-expanded');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });

      expect(screen.getByTestId('context-area')).toHaveAttribute('data-expanded', 'true');
    });

    it('does not intercept right-click when parent Popover is disabled', () => {
      render(
        <Popover transitionProps={{ duration: 0 }} withinPortal={false} disabled>
          <Popover.ContextMenu>
            <div data-testid="context-area">Right-click me</div>
          </Popover.ContextMenu>
          <Popover.Dropdown>
            <div>test-context-dropdown</div>
          </Popover.Dropdown>
        </Popover>
      );
      const target = screen.getByTestId('context-area');
      const event = new MouseEvent('contextmenu', { bubbles: true, cancelable: true });
      fireEvent(target, event);
      expect(event.defaultPrevented).toBe(false);
      expect(screen.queryByText('test-context-dropdown')).not.toBeInTheDocument();
    });

    it('does not toggle closed when right-clicked again while open', () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();

      fireEvent.contextMenu(area, { clientX: 50, clientY: 50 });
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();
    });

    it('closes the popover when the trigger is left-clicked while open', async () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();

      await userEvent.click(area);
      expect(screen.queryByText('test-context-dropdown')).not.toBeInTheDocument();
    });

    it('does not close the popover on the mousedown that precedes a right-click', () => {
      render(<ContextMenuContainer />);
      const area = screen.getByTestId('context-area');

      fireEvent.contextMenu(area, { clientX: 10, clientY: 10 });
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();

      fireEvent.mouseDown(area, { button: 2, clientX: 50, clientY: 50 });
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();

      fireEvent.contextMenu(area, { clientX: 50, clientY: 50 });
      expect(screen.getByText('test-context-dropdown')).toBeInTheDocument();
    });
  });
});
