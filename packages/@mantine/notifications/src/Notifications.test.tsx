import { act, fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Notifications, NotificationsProps, NotificationsStylesNames } from './Notifications';
import { createNotificationsStore, notifications } from './notifications.store';

const defaultProps: NotificationsProps = {
  withinPortal: false,
};

if (typeof PointerEvent === 'undefined') {
  (global as any).PointerEvent = class PointerEvent extends MouseEvent {
    pointerId: number;

    constructor(type: string, init: PointerEventInit & { pointerId?: number } = {}) {
      super(type, init);
      this.pointerId = init.pointerId ?? 0;
    }
  };
}

function pointerDown(
  el: Element,
  init: { clientX?: number; clientY?: number; pointerId?: number; button?: number } = {}
) {
  const event = new PointerEvent('pointerdown', {
    bubbles: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    pointerId: init.pointerId ?? 1,
    button: init.button ?? 0,
  });

  el.dispatchEvent(event);
}

function pointerMove(init: { clientX?: number; clientY?: number; pointerId?: number } = {}) {
  const event = new PointerEvent('pointermove', {
    bubbles: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    pointerId: init.pointerId ?? 1,
  });

  document.dispatchEvent(event);
}

function pointerUp(init: { clientX?: number; clientY?: number; pointerId?: number } = {}) {
  const event = new PointerEvent('pointerup', {
    bubbles: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    pointerId: init.pointerId ?? 1,
  });

  document.dispatchEvent(event);
}

describe('@mantine/core/Notifications', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  tests.itSupportsSystemProps<NotificationsProps, NotificationsStylesNames>({
    component: Notifications,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/notifications/Notifications',
    stylesApiSelectors: ['root'],
  });

  it.each([140, -140])('dismisses notification when dragged horizontally (%ipx)', (distance) => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'drag-dismiss', message: 'Swipe me away' }, store);
    });

    const notification = screen.getByRole('alert');

    act(() => {
      pointerDown(notification, { clientX: 0, clientY: 0 });
      pointerMove({ clientX: distance, clientY: 0 });
      pointerUp({ clientX: distance, clientY: 0 });
    });

    act(() => {
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(0);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Swipe me away')).not.toBeInTheDocument();
  });

  it('preserves dismiss animation when notification has custom style', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show(
        {
          id: 'styled-dismiss',
          message: 'Styled swipe me away',
          style: { backgroundColor: 'red' },
        },
        store
      );
    });

    const notification = screen.getByRole('alert');

    act(() => {
      pointerDown(notification, { clientX: 0, clientY: 0 });
      pointerMove({ clientX: 160, clientY: 0 });
      pointerUp({ clientX: 160, clientY: 0 });
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(0);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Styled swipe me away')).not.toBeInTheDocument();
  });

  it('keeps notification visible and resets offset after a short drag', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'drag-reset', message: 'Stay visible' }, store);
    });

    const notification = screen.getByRole('alert');

    act(() => {
      pointerDown(notification, { clientX: 0, clientY: 0 });
      pointerMove({ clientX: 40, clientY: 0 });
    });

    act(() => {
      jest.advanceTimersByTime(150);
      pointerUp({ clientX: 40, clientY: 0 });
    });

    expect(store.getState().notifications).toHaveLength(1);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(screen.getByText('Stay visible')).toBeInTheDocument();
  });

  it('dismisses notification on horizontal scroll swipe while hovered', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'scroll-dismiss', message: 'Scroll swipe me away' }, store);
    });

    const notification = screen.getByRole('alert');

    fireEvent.mouseEnter(notification);

    act(() => {
      fireEvent.wheel(notification, { deltaX: 160, deltaY: 10 });
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(0);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Scroll swipe me away')).not.toBeInTheDocument();
  });

  it('prevents horizontal page scroll when scrolling over hovered notification', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'scroll-prevent', message: 'Prevent page scroll' }, store);
    });

    const notification = screen.getByRole('alert');

    fireEvent.mouseEnter(notification);

    const event = new WheelEvent('wheel', {
      bubbles: true,
      cancelable: true,
      deltaX: 40,
      deltaY: 5,
    });
    const preventDefault = jest.spyOn(event, 'preventDefault');
    const stopPropagation = jest.spyOn(event, 'stopPropagation');

    act(() => {
      notification.dispatchEvent(event);
    });

    expect(preventDefault).toHaveBeenCalled();
    expect(stopPropagation).toHaveBeenCalled();
    expect(store.getState().notifications).toHaveLength(1);
  });

  it('does not dismiss notification on vertical wheel scroll while hovered', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'scroll-ignore', message: 'Do not dismiss me' }, store);
    });

    const notification = screen.getByRole('alert');

    fireEvent.mouseEnter(notification);

    act(() => {
      fireEvent.wheel(notification, { deltaX: 20, deltaY: 80 });
      jest.advanceTimersByTime(200);
    });

    expect(store.getState().notifications).toHaveLength(1);
    expect(notification).toHaveStyle({ cursor: 'default' });
    expect(screen.getByText('Do not dismiss me')).toBeInTheDocument();
  });

  it('disables close button, drag and scroll dismissal when allowClose is false', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();
    const { container } = render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show(
        {
          id: 'allow-close-disabled',
          message: 'Locked notification',
          allowClose: false,
        },
        store
      );
    });

    const notification = screen.getByRole('alert');

    expect(container.querySelector('.mantine-Notification-closeButton')).not.toBeInTheDocument();

    act(() => {
      pointerDown(notification, { clientX: 0, clientY: 0 });
      pointerMove({ clientX: 200, clientY: 0 });
      pointerUp({ clientX: 200, clientY: 0 });
      jest.advanceTimersByTime(25);
    });

    fireEvent.mouseEnter(notification);

    act(() => {
      fireEvent.wheel(notification, { deltaX: 200, deltaY: 10 });
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(1);
    expect(screen.getByText('Locked notification')).toBeInTheDocument();
  });

  it('disables drag dismissal when allowDragDismiss is false', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        allowDragDismiss={false}
      />
    );

    act(() => {
      notifications.show({ id: 'drag-disabled', message: 'Drag stays disabled' }, store);
    });

    const notification = screen.getByRole('alert');

    act(() => {
      pointerDown(notification, { clientX: 0, clientY: 0 });
      pointerMove({ clientX: 200, clientY: 0 });
      pointerUp({ clientX: 200, clientY: 0 });
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(1);
    expect(screen.getByText('Drag stays disabled')).toBeInTheDocument();
  });

  it('disables scroll dismissal when allowScrollDismiss is false', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        allowScrollDismiss={false}
      />
    );

    act(() => {
      notifications.show({ id: 'scroll-disabled', message: 'Scroll stays disabled' }, store);
    });

    const notification = screen.getByRole('alert');

    fireEvent.mouseEnter(notification);

    act(() => {
      fireEvent.wheel(notification, { deltaX: 200, deltaY: 10 });
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(1);
    expect(screen.getByText('Scroll stays disabled')).toBeInTheDocument();
  });

  it('calls onOpen when notification is mounted', async () => {
    const onOpen = jest.fn();
    const consoleError = jest.spyOn(console, 'error');

    render(<Notifications />);
    act(() => {
      notifications.show({
        message: 'open test',
        onOpen,
      });
    });

    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(consoleError).not.toHaveBeenCalledWith(
      expect.stringContaining('Unknown event handler property `onOpen`'),
      expect.anything()
    );
    consoleError.mockRestore();
  });

  it('calls onClose when notification is hidden', async () => {
    const onClose = jest.fn();
    render(<Notifications />);

    let id: string;
    act(() => {
      id = notifications.show({
        message: 'close test',
        onClose,
      });
    });

    expect(screen.getByText('close test')).toBeInTheDocument();
    act(() => {
      notifications.hide(id);
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  describe('stacked', () => {
    function getPositionRoot(container: HTMLElement, position: string) {
      return container.querySelector(`[data-position="${position}"]`) as HTMLElement;
    }

    function getStackTransform(notification: HTMLElement) {
      return notification.style.getPropertyValue('--notifications-stack-transform');
    }

    it('does not enable stacked layout by default', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications store={store} withinPortal={false} autoClose={false} />
      );

      act(() => {
        notifications.show({ id: 'default-stacked', message: 'Default layout' }, store);
      });

      expect(getPositionRoot(container, 'bottom-right')).not.toHaveAttribute('data-stacked');
    });

    it('enables stacked layout with stacked prop', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications store={store} withinPortal={false} autoClose={false} stacked />
      );

      act(() => {
        notifications.show({ id: 'stacked-prop', message: 'Stacked prop' }, store);
      });

      expect(getPositionRoot(container, 'bottom-right')).toHaveAttribute('data-stacked');
    });

    it('renders the newest equal-priority notification as the front item', () => {
      const store = createNotificationsStore();
      render(<Notifications store={store} withinPortal={false} autoClose={false} stacked />);

      act(() => {
        notifications.show({ id: 'first', message: 'First notification' }, store);
        notifications.show({ id: 'second', message: 'Second notification' }, store);
      });

      expect(
        screen.getAllByRole('alert', { hidden: true }).map((item) => item.textContent)
      ).toEqual(['Second notification', 'First notification']);
    });

    it('keeps higher priority notifications in front of newer lower priority notifications', () => {
      const store = createNotificationsStore();
      render(<Notifications store={store} withinPortal={false} autoClose={false} stacked />);

      act(() => {
        notifications.show({ id: 'high', message: 'High priority', priority: 10 }, store);
        notifications.show({ id: 'low', message: 'Low priority', priority: 0 }, store);
      });

      expect(
        screen.getAllByRole('alert', { hidden: true }).map((item) => item.textContent)
      ).toEqual(['High priority', 'Low priority']);
    });

    it('expands top-positioned stacks downward on hover', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={false}
          stacked
          position="top-right"
        />
      );

      act(() => {
        notifications.show({ id: 'older', message: 'Older' }, store);
        notifications.show({ id: 'newer', message: 'Newer' }, store);
      });

      const root = getPositionRoot(container, 'top-right');
      const olderNotification = screen.getByText('Older').closest('[role="alert"]') as HTMLElement;
      const newerNotification = screen.getByText('Newer').closest('[role="alert"]') as HTMLElement;

      expect(root).toHaveAttribute('data-stacked');
      expect(root.style.getPropertyValue('--notifications-stack-height')).toBe('88px');
      expect(newerNotification.style.getPropertyValue('--notifications-state-transform')).toBe(
        'translateY(0)'
      );
      expect(getStackTransform(olderNotification)).toContain('8px');
      expect(olderNotification).toHaveAttribute('data-stack-preview', 'true');
      expect(olderNotification).toHaveAttribute('aria-hidden', 'true');
      expect(olderNotification).toHaveAttribute('inert');
      expect(
        olderNotification.style.getPropertyValue('--notifications-stack-content-opacity')
      ).toBe('0');
      expect(olderNotification).toHaveStyle({ height: '80px', overflow: 'hidden' });

      fireEvent.mouseEnter(root);

      expect(root).toHaveAttribute('data-expanded');
      expect(root.style.getPropertyValue('--notifications-stack-height')).toBe('174px');
      expect(getStackTransform(olderNotification)).toContain('94px');
      expect(olderNotification).not.toHaveAttribute('data-stack-preview');
      expect(olderNotification).not.toHaveAttribute('aria-hidden');
      expect(olderNotification).not.toHaveAttribute('inert');
      expect(
        olderNotification.style.getPropertyValue('--notifications-stack-content-opacity')
      ).toBe('1');

      fireEvent.mouseLeave(root);

      expect(root).not.toHaveAttribute('data-expanded');
      expect(getStackTransform(olderNotification)).toContain('8px');
    });

    it('expands bottom-positioned stacks upward on hover', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={false}
          stacked
          position="bottom-right"
        />
      );

      act(() => {
        notifications.show({ id: 'older', message: 'Older bottom' }, store);
        notifications.show({ id: 'newer', message: 'Newer bottom' }, store);
      });

      const root = getPositionRoot(container, 'bottom-right');
      const olderNotification = screen
        .getByText('Older bottom')
        .closest('[role="alert"]') as HTMLElement;

      expect(getStackTransform(olderNotification)).toContain('-8px');

      fireEvent.mouseEnter(root);

      expect(root).toHaveAttribute('data-expanded');
      expect(getStackTransform(olderNotification)).toContain('-94px');
    });

    it('expands stack on focus and collapses on blur', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications store={store} withinPortal={false} autoClose={false} stacked />
      );

      act(() => {
        notifications.show({ id: 'older-focus', message: 'Older focus' }, store);
        notifications.show({ id: 'newer-focus', message: 'Newer focus' }, store);
      });

      const root = getPositionRoot(container, 'bottom-right');

      fireEvent.focus(root);
      expect(root).toHaveAttribute('data-expanded');

      fireEvent.blur(root, { relatedTarget: document.body });
      expect(root).not.toHaveAttribute('data-expanded');
    });

    it('keeps stack expanded on mouse leave when focus remains inside', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications store={store} withinPortal={false} autoClose={false} stacked />
      );

      act(() => {
        notifications.show({ id: 'older-focused', message: 'Older focused' }, store);
        notifications.show({ id: 'newer-focused', message: 'Newer focused' }, store);
      });

      const root = getPositionRoot(container, 'bottom-right');
      const closeButton = root.querySelector('button')!;

      act(() => {
        closeButton.focus();
        fireEvent.mouseLeave(root);
      });

      expect(root).toHaveAttribute('data-expanded');
    });

    it('composes forwarded root handlers with stacked expansion handlers', () => {
      const store = createNotificationsStore();
      const onMouseEnter = jest.fn();
      const { container } = render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={false}
          stacked
          onMouseEnter={onMouseEnter}
        />
      );

      act(() => {
        notifications.show({ id: 'older-handler', message: 'Older handler' }, store);
        notifications.show({ id: 'newer-handler', message: 'Newer handler' }, store);
      });

      const root = getPositionRoot(container, 'bottom-right');

      fireEvent.mouseEnter(root);

      expect(onMouseEnter).toHaveBeenCalledTimes(1);
      expect(root).toHaveAttribute('data-expanded');
    });

    it('resumes auto close when stacked is disabled while expanded', () => {
      jest.useFakeTimers();
      const store = createNotificationsStore();
      const { container, rerender } = render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={100}
          transitionDuration={10}
          stacked
        />
      );

      act(() => {
        notifications.show({ id: 'older-toggle', message: 'Older toggle' }, store);
        notifications.show({ id: 'newer-toggle', message: 'Newer toggle' }, store);
      });

      fireEvent.mouseEnter(getPositionRoot(container, 'bottom-right'));

      rerender(
        <Notifications store={store} withinPortal={false} autoClose={100} transitionDuration={10} />
      );

      act(() => {
        jest.advanceTimersByTime(125);
      });

      expect(store.getState().notifications).toHaveLength(0);
    });

    it('displays new notifications in the stack immediately instead of queueing them', () => {
      const store = createNotificationsStore();
      render(
        <Notifications store={store} withinPortal={false} autoClose={false} stacked limit={1} />
      );

      act(() => {
        notifications.show({ id: 'older-visible', message: 'Older visible notification' }, store);
        notifications.show({ id: 'newer-visible', message: 'Newer visible notification' }, store);
      });

      expect(screen.getByText('Older visible notification')).toBeInTheDocument();
      expect(screen.getByText('Newer visible notification')).toBeInTheDocument();
      expect(store.getState().queue).toEqual([]);
    });

    it('moves deep collapsed notifications farther into the stack and fades them out', () => {
      const store = createNotificationsStore();
      const { container } = render(
        <Notifications store={store} withinPortal={false} autoClose={false} stacked />
      );

      act(() => {
        Array(5)
          .fill(0)
          .forEach((_, index) => {
            notifications.show({ id: `deep-${index}`, message: `Deep ${index}` }, store);
          });
      });

      const deepestNotification = screen
        .getByText('Deep 0')
        .closest('[role="alert"]') as HTMLElement;

      expect(getStackTransform(deepestNotification)).toContain('32px');
      expect(deepestNotification.style.getPropertyValue('--notifications-stack-opacity')).toBe('0');
      expect(deepestNotification).toHaveAttribute('aria-hidden', 'true');
      expect(deepestNotification).toHaveAttribute('inert');

      fireEvent.mouseEnter(getPositionRoot(container, 'bottom-right'));

      expect(deepestNotification.style.getPropertyValue('--notifications-stack-opacity')).toBe('0');
      expect(deepestNotification).toHaveAttribute('aria-hidden', 'true');
      expect(deepestNotification).toHaveAttribute('inert');
    });

    it('allows dismissing the front stacked notification by dragging', () => {
      jest.useFakeTimers();
      const store = createNotificationsStore();

      render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={false}
          stacked
          transitionDuration={10}
        />
      );

      act(() => {
        notifications.show({ id: 'older-drag', message: 'Older drag' }, store);
        notifications.show({ id: 'newer-drag', message: 'Newer drag' }, store);
      });

      const notification = screen.getByText('Newer drag').closest('[role="alert"]')!;

      act(() => {
        pointerDown(notification, { clientX: 0, clientY: 0 });
        pointerMove({ clientX: 200, clientY: 0 });
        pointerUp({ clientX: 200, clientY: 0 });
        jest.advanceTimersByTime(425);
      });

      expect(store.getState().notifications.map((item) => item.id)).toEqual(['older-drag']);
    });
  });

  describe('priority', () => {
    function createStoreWithLimit(limit: number) {
      const store = createNotificationsStore();
      store.setState((current) => ({ ...current, limit }));
      return store;
    }

    it('keeps higher priority notifications visible and pushes lower priority ones into the queue', () => {
      const store = createStoreWithLimit(1);

      notifications.show({ id: 'low', message: 'low', priority: 0 }, store);
      notifications.show({ id: 'high', message: 'high', priority: 10 }, store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['high']);
      expect(state.queue.map((n) => n.id)).toEqual(['low']);
    });

    it('sorts visible notifications by priority descending', () => {
      const store = createStoreWithLimit(3);

      notifications.show({ id: 'a', message: 'a', priority: 1 }, store);
      notifications.show({ id: 'b', message: 'b', priority: 5 }, store);
      notifications.show({ id: 'c', message: 'c', priority: 3 }, store);

      expect(store.getState().notifications.map((n) => n.id)).toEqual(['b', 'c', 'a']);
    });

    it('preserves insertion order (FIFO) for notifications with equal priority', () => {
      const store = createStoreWithLimit(5);

      notifications.show({ id: 'first', message: 'first', priority: 2 }, store);
      notifications.show({ id: 'second', message: 'second', priority: 2 }, store);
      notifications.show({ id: 'third', message: 'third', priority: 2 }, store);

      expect(store.getState().notifications.map((n) => n.id)).toEqual(['first', 'second', 'third']);
    });

    it('preserves FIFO order when no priority is set (backwards compatible)', () => {
      const store = createStoreWithLimit(2);

      notifications.show({ id: 'one', message: 'one' }, store);
      notifications.show({ id: 'two', message: 'two' }, store);
      notifications.show({ id: 'three', message: 'three' }, store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['one', 'two']);
      expect(state.queue.map((n) => n.id)).toEqual(['three']);
    });

    it('evicts the lowest priority visible notification when a higher priority one arrives at limit', () => {
      const store = createStoreWithLimit(1);

      notifications.show({ id: 'normal', message: 'normal', priority: 1 }, store);
      expect(store.getState().notifications.map((n) => n.id)).toEqual(['normal']);

      notifications.show({ id: 'urgent', message: 'urgent', priority: 5 }, store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['urgent']);
      expect(state.queue.map((n) => n.id)).toEqual(['normal']);
    });

    it('applies priority independently per position', () => {
      const store = createStoreWithLimit(1);

      notifications.show(
        { id: 'tl-low', message: 'tl-low', position: 'top-left', priority: 0 },
        store
      );
      notifications.show(
        { id: 'tl-high', message: 'tl-high', position: 'top-left', priority: 9 },
        store
      );
      notifications.show(
        { id: 'br-low', message: 'br-low', position: 'bottom-right', priority: 0 },
        store
      );
      notifications.show(
        { id: 'br-high', message: 'br-high', position: 'bottom-right', priority: 9 },
        store
      );

      const state = store.getState();
      expect(state.notifications.map((n) => n.id).sort()).toEqual(['br-high', 'tl-high']);
      expect(state.queue.map((n) => n.id).sort()).toEqual(['br-low', 'tl-low']);
    });

    it('preserves true insertion order (FIFO) for equal priority after a priority update', () => {
      const store = createStoreWithLimit(2);

      notifications.show({ id: 'a', message: 'a', priority: 10 }, store);
      notifications.show({ id: 'b', message: 'b', priority: 0 }, store);
      notifications.show({ id: 'c', message: 'c', priority: 10 }, store);

      expect(store.getState().notifications.map((n) => n.id)).toEqual(['a', 'c']);
      expect(store.getState().queue.map((n) => n.id)).toEqual(['b']);

      notifications.update({ id: 'b', message: 'b', priority: 10 }, store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['a', 'b']);
      expect(state.queue.map((n) => n.id)).toEqual(['c']);
    });

    it('redistributes notifications when priority is changed via update', () => {
      const store = createStoreWithLimit(1);

      notifications.show({ id: 'low', message: 'low', priority: 0 }, store);
      notifications.show({ id: 'high', message: 'high', priority: 5 }, store);

      expect(store.getState().notifications.map((n) => n.id)).toEqual(['high']);

      notifications.update({ id: 'low', message: 'low', priority: 10 }, store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['low']);
      expect(state.queue.map((n) => n.id)).toEqual(['high']);
    });
  });

  describe('cleanQueue', () => {
    function createStoreWithLimit(limit: number) {
      const store = createNotificationsStore();
      store.setState((current) => ({ ...current, limit }));
      return store;
    }

    it('removes queued notifications and keeps the visible ones', () => {
      const store = createStoreWithLimit(1);

      notifications.show({ id: 'visible', message: 'visible' }, store);
      notifications.show({ id: 'queued', message: 'queued' }, store);

      expect(store.getState().notifications.map((n) => n.id)).toEqual(['visible']);
      expect(store.getState().queue.map((n) => n.id)).toEqual(['queued']);

      notifications.cleanQueue(store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['visible']);
      expect(state.queue).toEqual([]);
    });

    it('keeps visible notifications of every position (limit is applied per position)', () => {
      const store = createStoreWithLimit(1);

      notifications.show({ id: 'tl-visible', message: 'tl-visible', position: 'top-left' }, store);
      notifications.show({ id: 'tl-queued', message: 'tl-queued', position: 'top-left' }, store);
      notifications.show(
        { id: 'br-visible', message: 'br-visible', position: 'bottom-right' },
        store
      );
      notifications.show(
        { id: 'br-queued', message: 'br-queued', position: 'bottom-right' },
        store
      );

      expect(
        store
          .getState()
          .notifications.map((n) => n.id)
          .sort()
      ).toEqual(['br-visible', 'tl-visible']);

      notifications.cleanQueue(store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id).sort()).toEqual(['br-visible', 'tl-visible']);
      expect(state.queue).toEqual([]);
    });

    it('clears the queue and caps visible notifications when the limit was lowered', () => {
      const store = createStoreWithLimit(3);

      notifications.show({ id: 'a', message: 'a' }, store);
      notifications.show({ id: 'b', message: 'b' }, store);
      notifications.show({ id: 'c', message: 'c' }, store);

      expect(store.getState().notifications.map((n) => n.id)).toEqual(['a', 'b', 'c']);

      // Lowering the limit (as the Notifications component does) does not redistribute on its own
      store.setState((current) => ({ ...current, limit: 1 }));
      expect(store.getState().notifications.map((n) => n.id)).toEqual(['a', 'b', 'c']);

      notifications.cleanQueue(store);

      const state = store.getState();
      expect(state.notifications.map((n) => n.id)).toEqual(['a']);
      expect(state.queue).toEqual([]);
    });
  });

  it('does not close notification on hover when autoClose is enabled', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={3000} transitionDuration={10} />
    );

    act(() => {
      notifications.show(
        { id: 'hover-prevent-close', message: 'Hover me to pause autoClose' },
        store
      );
    });

    const notification = screen.getByRole('alert');

    // Simulate hover
    fireEvent.mouseEnter(notification);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Notification should still be present because it is hovered
    expect(store.getState().notifications).toHaveLength(1);
    expect(screen.getByText('Hover me to pause autoClose')).toBeInTheDocument();

    // Simulate mouse leave
    fireEvent.mouseLeave(notification);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Notification should now be closed
    expect(store.getState().notifications).toHaveLength(0);
  });
});
