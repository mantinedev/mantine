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

  it('auto closes a focused notification in the default layout', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={1000} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'focused', message: 'Focused notification' }, store);
    });

    const notification = screen.getByRole('alert');

    // Focus tracking exists only to keep a collapsed stack expanded – in the default layout
    // it must not hold a notification open, which is what happens whenever a user clicks an
    // action button inside it.
    act(() => {
      fireEvent.focus(notification);
      fireEvent.focusIn(notification);
    });

    act(() => {
      jest.advanceTimersByTime(1200);
    });

    expect(store.getState().notifications).toHaveLength(0);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.queryByText('Focused notification')).not.toBeInTheDocument();
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

  it('renders custom notification with renderNotification prop', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        renderNotification={(notification) => (
          <div data-testid="custom-notification">{notification.message}</div>
        )}
      />
    );

    act(() => {
      notifications.show({ id: 'custom-render', message: 'Custom content' }, store);
    });

    expect(screen.getByTestId('custom-notification')).toBeInTheDocument();
    expect(screen.getByText('Custom content')).toBeInTheDocument();
  });

  it('allows per-notification renderNotification override', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show(
        {
          id: 'per-notification-render',
          message: 'Custom per notification',
          renderNotification: (notification) => (
            <div data-testid="per-notification-custom">{notification.message}</div>
          ),
        },
        store
      );
    });

    expect(screen.getByTestId('per-notification-custom')).toBeInTheDocument();
    expect(screen.getByText('Custom per notification')).toBeInTheDocument();
  });

  it('restores default rendering with renderNotification: null over a global renderer', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        renderNotification={(notification) => (
          <div data-testid="global-custom">{notification.message}</div>
        )}
      />
    );

    act(() => {
      notifications.show(
        { id: 'opted-out', message: 'Default rendering', renderNotification: null },
        store
      );
      notifications.show({ id: 'global', message: 'Global rendering' }, store);
    });

    // The opt-out notification uses the standard Mantine notification …
    expect(
      screen.getByText('Default rendering').closest('.mantine-Notification-root')
    ).not.toBeNull();
    // … while the other one still goes through the global renderer
    expect(screen.getByTestId('global-custom')).toHaveTextContent('Global rendering');
    expect(screen.queryAllByTestId('global-custom')).toHaveLength(1);
  });

  it('forwards div props to the custom rendering wrapper', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();
    const onClick = jest.fn();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        renderNotification={(notification) => <div>{notification.message}</div>}
      />
    );

    act(() => {
      notifications.show(
        { id: 'dom-props', message: 'With props', onClick, lang: 'fr', mt: 'md' } as any,
        store
      );
    });

    const wrapper = screen.getByText('With props').parentElement!;
    expect(wrapper).toHaveAttribute('lang', 'fr');
    // Style props are not DOM attributes and must not leak onto the element
    expect(wrapper).not.toHaveAttribute('mt');

    fireEvent.click(wrapper);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('preserves dismiss interaction with renderNotification', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        renderNotification={(notification) => (
          <div data-testid="custom-dismiss">{notification.message}</div>
        )}
      />
    );

    act(() => {
      notifications.show({ id: 'dismiss-custom', message: 'Dismiss me custom' }, store);
    });

    const wrapper = screen.getByTestId('custom-dismiss').parentElement!;

    act(() => {
      pointerDown(wrapper, { clientX: 0, clientY: 0 });
      pointerMove({ clientX: 160, clientY: 0 });
      pointerUp({ clientX: 160, clientY: 0 });
    });

    act(() => {
      jest.advanceTimersByTime(25);
    });

    expect(store.getState().notifications).toHaveLength(0);
  });

  it('renders stacked layout with data-layout attribute', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'stacked-1', message: 'First' }, store);
      notifications.show({ id: 'stacked-2', message: 'Second' }, store);
    });

    const roots = container.querySelectorAll('[data-layout="stacked"]');
    expect(roots.length).toBeGreaterThan(0);
  });

  it('applies stacked styles to non-first notifications', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'stacked-a', message: 'First stacked' }, store);
      notifications.show({ id: 'stacked-b', message: 'Second stacked' }, store);
    });

    act(() => {
      jest.advanceTimersByTime(50);
    });

    const alerts = screen.getAllByRole('alert');
    expect(alerts).toHaveLength(2);

    // The newest notification is the one in front, regardless of where it sits in the DOM
    const behind = alerts.find((alert) => alert.textContent?.includes('First stacked'))!;
    const front = alerts.find((alert) => alert.textContent?.includes('Second stacked'))!;
    expect(Number(behind.style.zIndex)).toBeLessThan(Number(front.style.zIndex));
  });

  it('keeps stacked styling while a stacked notification is exiting', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={100}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'exit-a', message: 'Exiting notification' }, store);
      notifications.show({ id: 'exit-b', message: 'Remaining notification' }, store);
    });

    act(() => {
      jest.advanceTimersByTime(200);
    });

    act(() => {
      notifications.hide('exit-a', store);
    });

    // The notification is still mounted (transition in progress), now in the exiting state
    const exiting = screen
      .getAllByRole('alert')
      .find((el) => el.textContent?.includes('Exiting notification'))!;

    expect(exiting).toBeDefined();
    // Stays inside the shared grid cell so the remaining notifications do not jump
    expect(exiting.style.gridArea).toBe('1 / 1');
    // Keeps a transition so the exit animation actually plays
    expect(exiting.style.transition).not.toBe('');
    // Does not instantly collapse its height (stacked notifications overlap, no space to collapse)
    expect(exiting.style.maxHeight).not.toBe('0px');
    // Exit animation starts immediately, without the entrance stagger delay
    expect(exiting.style.transitionDelay).toBe('0ms');
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

    it('puts the highest priority notification in front of a stack', () => {
      jest.useFakeTimers();
      const store = createNotificationsStore();

      render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={false}
          transitionDuration={10}
          layout="stacked"
        />
      );

      act(() => {
        notifications.show({ id: 'low', message: 'low priority', priority: 0 }, store);
        notifications.show({ id: 'urgent', message: 'urgent', priority: 10 }, store);
      });

      act(() => {
        jest.advanceTimersByTime(50);
      });

      const alerts = screen.getAllByRole('alert');
      const low = alerts.find((alert) => alert.textContent?.includes('low priority'))!;
      const urgent = alerts.find((alert) => alert.textContent?.includes('urgent'))!;

      // The urgent notification is the visible, interactive front card
      expect(Number(urgent.style.zIndex)).toBeGreaterThan(Number(low.style.zIndex));
      expect(urgent.hasAttribute('inert')).toBe(false);
      expect(low.hasAttribute('inert')).toBe(true);
    });

    it('keeps the newest notification in front of a stack for equal priorities', () => {
      jest.useFakeTimers();
      const store = createNotificationsStore();

      render(
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={false}
          transitionDuration={10}
          layout="stacked"
        />
      );

      act(() => {
        notifications.show({ id: 'older', message: 'older' }, store);
        notifications.show({ id: 'newer', message: 'newer' }, store);
      });

      act(() => {
        jest.advanceTimersByTime(50);
      });

      const alerts = screen.getAllByRole('alert');
      const older = alerts.find((alert) => alert.textContent?.includes('older'))!;
      const newer = alerts.find((alert) => alert.textContent?.includes('newer'))!;

      expect(Number(newer.style.zIndex)).toBeGreaterThan(Number(older.style.zIndex));
      expect(newer.hasAttribute('inert')).toBe(false);
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

  it('marks collapsed stacked notifications as inert', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
    });

    const roots = Array.from(container.querySelectorAll('.mantine-Notification-root'));
    expect(roots).toHaveLength(2);

    // The newest notification is in front and stays interactive, the one behind it does not
    const inertCount = roots.filter((root) => root.hasAttribute('inert')).length;
    expect(inertCount).toBe(1);
  });

  it('expands the stack when focus moves into a notification', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
    });

    const getInertCount = () =>
      Array.from(container.querySelectorAll('.mantine-Notification-root')).filter((root) =>
        root.hasAttribute('inert')
      ).length;

    expect(getInertCount()).toBe(1);

    const front = Array.from(container.querySelectorAll('.mantine-Notification-root')).find(
      (root) => !root.hasAttribute('inert')
    )!;
    act(() => {
      fireEvent.focus(front);
    });

    expect(getInertCount()).toBe(0);
  });

  it('renders the front stacked notification first in the DOM', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'Older' }, store);
      notifications.show({ id: 'b', message: 'Newer' }, store);
    });

    const roots = Array.from(container.querySelectorAll('.mantine-Notification-root'));
    expect(roots).toHaveLength(2);

    // The front notification is the only focusable one while the stack is collapsed. If it
    // came last, a forward Tab from it would skip the notifications it un-inerts on focus
    // and leave the region entirely.
    expect(roots[0].textContent).toContain('Newer');
    expect(roots[0].hasAttribute('inert')).toBe(false);
    expect(roots[1].textContent).toContain('Older');
    expect(roots[1].hasAttribute('inert')).toBe(true);
  });

  it('keeps the default layout in chronological DOM order', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications store={store} withinPortal={false} autoClose={false} transitionDuration={10} />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'Older' }, store);
      notifications.show({ id: 'b', message: 'Newer' }, store);
    });

    const roots = Array.from(container.querySelectorAll('.mantine-Notification-root'));
    expect(roots[0].textContent).toContain('Older');
    expect(roots[1].textContent).toContain('Newer');
  });

  it('expands only the stack that is interacted with', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'tl-a', message: 'Top left first', position: 'top-left' }, store);
      notifications.show({ id: 'tl-b', message: 'Top left second', position: 'top-left' }, store);
      notifications.show(
        { id: 'br-a', message: 'Bottom right first', position: 'bottom-right' },
        store
      );
      notifications.show(
        { id: 'br-b', message: 'Bottom right second', position: 'bottom-right' },
        store
      );
    });

    const getInertCount = (position: string) =>
      Array.from(
        container.querySelectorAll(`[data-position="${position}"] .mantine-Notification-root`)
      ).filter((root) => root.hasAttribute('inert')).length;

    expect(getInertCount('top-left')).toBe(1);
    expect(getInertCount('bottom-right')).toBe(1);

    const topLeftFront = Array.from(
      container.querySelectorAll('[data-position="top-left"] .mantine-Notification-root')
    ).find((root) => !root.hasAttribute('inert'))!;

    act(() => {
      fireEvent.focus(topLeftFront);
    });

    // Only the hovered/focused corner expands – the other stack stays collapsed
    expect(getInertCount('top-left')).toBe(0);
    expect(getInertCount('bottom-right')).toBe(1);
  });

  it('pins the stack open on a touch tap and releases it on an outside tap', () => {
    // jsdom has no PointerEvent, so React reports `pointerType` as null unless one exists
    class MockPointerEvent extends MouseEvent {
      pointerType: string;

      constructor(type: string, props: MouseEventInit & { pointerType?: string } = {}) {
        super(type, props);
        this.pointerType = props.pointerType ?? 'mouse';
      }
    }
    const originalPointerEvent = (window as any).PointerEvent;
    (window as any).PointerEvent = MockPointerEvent;

    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
    });

    const getInertCount = () =>
      Array.from(container.querySelectorAll('.mantine-Notification-root')).filter((root) =>
        root.hasAttribute('inert')
      ).length;

    expect(getInertCount()).toBe(1);

    // Synthetic events ignore `inert` hit-testing, so the front notification has to be
    // selected by the absence of `inert` – picking it by DOM index would let this pass
    // while the notification a real touch user can reach is not wired up.
    const front = Array.from(container.querySelectorAll('.mantine-Notification-root')).find(
      (root) => !root.hasAttribute('inert')
    )!;
    expect(front).toBeDefined();
    act(() => {
      fireEvent.pointerDown(front, { pointerType: 'touch' });
    });
    expect(getInertCount()).toBe(0);

    // A mouse press elsewhere collapses it again
    act(() => {
      fireEvent.pointerDown(document.body, { pointerType: 'touch' });
    });
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(getInertCount()).toBe(1);

    (window as any).PointerEvent = originalPointerEvent;
  });

  it('does not expand the stack on a mouse pointer press', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
    });

    const front = container.querySelectorAll('.mantine-Notification-root')[1];
    act(() => {
      fireEvent.pointerDown(front, { pointerType: 'mouse' });
    });

    const inertCount = Array.from(container.querySelectorAll('.mantine-Notification-root')).filter(
      (root) => root.hasAttribute('inert')
    ).length;
    expect(inertCount).toBe(1);
  });

  it('releases the expanded stack when a focused notification is dismissed', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
    });

    const getInertCount = () =>
      Array.from(container.querySelectorAll('.mantine-Notification-root')).filter((root) =>
        root.hasAttribute('inert')
      ).length;

    const front = Array.from(container.querySelectorAll('.mantine-Notification-root')).find(
      (root) => !root.hasAttribute('inert')
    )!;
    act(() => {
      fireEvent.focus(front);
    });
    expect(getInertCount()).toBe(0);

    // The focused notification is removed without ever firing a blur event
    act(() => {
      notifications.hide('b', store);
      jest.advanceTimersByTime(100);
    });

    act(() => {
      jest.advanceTimersByTime(300);
    });

    // The remaining notification is the only one left, so nothing is collapsed behind it,
    // but the stack must no longer be held open by the dismissed notification
    expect(container.querySelectorAll('.mantine-Notification-root')).toHaveLength(1);

    act(() => {
      notifications.show({ id: 'c', message: 'Third' }, store);
      jest.advanceTimersByTime(300);
    });

    expect(getInertCount()).toBe(1);
  });

  it('does not invert deeply stacked notifications', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        limit={40}
        layout="stacked"
      />
    );

    act(() => {
      for (let i = 0; i < 40; i += 1) {
        notifications.show({ id: `n-${i}`, message: `Message ${i}` }, store);
      }
    });

    const scales = Array.from(container.querySelectorAll('.mantine-Notification-root'))
      .map((root) => (root as HTMLElement).style.transform)
      .map((transform) => transform.match(/scale\(([-\d.]+)\)/)?.[1])
      .filter(Boolean)
      .map(Number);

    expect(scales.length).toBeGreaterThan(0);
    scales.forEach((scale) => expect(scale).toBeGreaterThan(0));
  });

  it('keeps the stacked z-index order when the stack expands', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
      notifications.show({ id: 'c', message: 'Third' }, store);
    });

    // DOM order is front to back, so the z-index has to strictly decrease along it.
    const getZIndexes = () =>
      Array.from(container.querySelectorAll('.mantine-Notification-root')).map((root) =>
        Number((root as HTMLElement).style.zIndex)
      );

    const collapsed = getZIndexes();
    expect(collapsed).toHaveLength(3);
    expect(collapsed[0]).toBeGreaterThan(collapsed[1]);
    expect(collapsed[1]).toBeGreaterThan(collapsed[2]);

    const front = Array.from(container.querySelectorAll('.mantine-Notification-root')).find(
      (root) => !root.hasAttribute('inert')
    )!;

    act(() => {
      fireEvent.mouseEnter(front);
    });

    expect(
      Array.from(container.querySelectorAll('.mantine-Notification-root')).filter((root) =>
        root.hasAttribute('inert')
      )
    ).toHaveLength(0);

    // `z-index` is not animatable, so an expanded stack that flattens to a single layer
    // repaints every notification in front of the first one before the reveal transform
    // has moved anything.
    const expanded = getZIndexes();
    expect(expanded).toEqual(collapsed);
  });

  it('keeps the stack expanded when the hovered notification is dismissed', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
      notifications.show({ id: 'b', message: 'Second' }, store);
      notifications.show({ id: 'c', message: 'Third' }, store);
    });

    const group = container.querySelector('[data-position="bottom-right"]')!.firstElementChild!;
    const getInertCount = () =>
      Array.from(container.querySelectorAll('.mantine-Notification-root')).filter((root) =>
        root.hasAttribute('inert')
      ).length;

    const front = Array.from(container.querySelectorAll('.mantine-Notification-root')).find(
      (root) => !root.hasAttribute('inert')
    )!;

    // Entering the front notification enters the group that wraps it as well – the pointer
    // cannot reach a notification without being over its stack.
    act(() => {
      fireEvent.mouseEnter(front);
    });

    expect(getInertCount()).toBe(0);

    act(() => {
      fireEvent.click(front.querySelector('button')!);
    });

    // Split from the collapse window below on purpose: the collapse timeout is only
    // scheduled once the dismissed notification has unmounted, so a single
    // `advanceTimersByTime` would finish before that timer exists and the assertion would
    // pass whether or not the stack stayed expanded.
    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(container.querySelectorAll('.mantine-Notification-root')).toHaveLength(2);

    act(() => {
      jest.advanceTimersByTime(500);
    });

    // The dismissed notification released its own hover on unmount and the browser never
    // delivers `onMouseEnter` to the one that takes its place under a stationary pointer,
    // so the group is the only thing that still knows the stack is hovered.
    expect(getInertCount()).toBe(0);

    act(() => {
      fireEvent.mouseLeave(group);
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(getInertCount()).toBe(1);
  });

  it('keeps a hovered stack paused while the dismissed notification is still exiting', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={1000}
        transitionDuration={250}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'only', message: 'Only' }, store);
    });

    act(() => {
      fireEvent.mouseEnter(container.querySelector('.mantine-Notification-root')!);
    });

    act(() => {
      fireEvent.click(
        container.querySelector('.mantine-Notification-root')!.querySelector('button')!
      );
    });

    // The store is empty here but the dismissed notification is still mounted and still under
    // the pointer, so the stack is very much still hovered.
    expect(store.getState().notifications).toHaveLength(0);
    expect(container.querySelectorAll('.mantine-Notification-root')).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    act(() => {
      notifications.show({ id: 'next', message: 'Next' }, store);
    });

    // Split so the auto close timer, which is only scheduled once the exiting notification
    // has unmounted, actually gets a window to run in.
    act(() => {
      jest.advanceTimersByTime(300);
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(store.getState().notifications).toHaveLength(1);
  });

  it('releases the group hover when the stacked layout is switched off', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container, rerender } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={1000}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'a', message: 'First' }, store);
    });

    act(() => {
      fireEvent.mouseEnter(container.querySelector('.mantine-Notification-root')!);
    });

    // The group is dropped from the tree along with its handlers, so it never gets the
    // `mouseleave` that would release it.
    rerender(
      <>
        <Notifications
          store={store}
          withinPortal={false}
          autoClose={1000}
          transitionDuration={10}
          layout="default"
        />
      </>
    );

    act(() => {
      fireEvent.mouseLeave(container.querySelector('.mantine-Notification-root')!);
    });

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(store.getState().notifications).toHaveLength(0);
  });
  it('does not re-observe notification nodes on every render in stacked layout', () => {
    jest.useFakeTimers();
    const originalResizeObserver = (global as any).ResizeObserver;
    const observed: Element[] = [];
    let deliverEntries: (() => void) | null = null;

    (global as any).ResizeObserver = class {
      constructor(cb: ResizeObserverCallback) {
        deliverEntries = () => cb([], this as any);
      }

      observe(element: Element) {
        observed.push(element);
      }

      unobserve() {}
      disconnect() {}
    };

    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'ro-1', message: 'First' }, store);
    });

    act(() => {
      jest.advanceTimersByTime(10);
    });

    const observedAfterMount = observed.length;
    expect(observedAfterMount).toBeGreaterThan(0);

    act(() => deliverEntries!());
    expect(observed).toHaveLength(observedAfterMount);

    act(() => deliverEntries!());
    expect(observed).toHaveLength(observedAfterMount);

    (global as any).ResizeObserver = originalResizeObserver;
  });

  it('forwards role, id and accessibility attributes to custom rendered notifications', () => {
    jest.useFakeTimers();
    const store = createNotificationsStore();

    render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        attributes={{ notification: { 'aria-label': 'Upload complete' } }}
        renderNotification={(notification) => (
          <div data-testid="custom-a11y">{notification.message}</div>
        )}
      />
    );

    act(() => {
      notifications.show({ id: 'custom-a11y-id', role: 'status', message: 'Done' }, store);
    });

    const wrapper = screen.getByTestId('custom-a11y').parentElement!;
    expect(wrapper).toHaveAttribute('role', 'status');
    expect(wrapper).toHaveAttribute('id', 'custom-a11y-id');
    expect(wrapper).toHaveAttribute('aria-label', 'Upload complete');
  });

  it('releases the stack pin when its own position runs out of notifications', () => {
    // jsdom has no PointerEvent, so React reports `pointerType` as null unless one exists
    class MockPointerEvent extends MouseEvent {
      pointerType: string;

      constructor(type: string, props: MouseEventInit & { pointerType?: string } = {}) {
        super(type, props);
        this.pointerType = props.pointerType ?? 'mouse';
      }
    }
    const originalPointerEvent = (window as any).PointerEvent;
    (window as any).PointerEvent = MockPointerEvent;

    jest.useFakeTimers();
    const store = createNotificationsStore();

    const { container } = render(
      <Notifications
        store={store}
        withinPortal={false}
        autoClose={false}
        transitionDuration={10}
        layout="stacked"
      />
    );

    act(() => {
      notifications.show({ id: 'tr-1', position: 'top-right', message: 'Right one' }, store);
      notifications.show({ id: 'tr-2', position: 'top-right', message: 'Right two' }, store);
      notifications.show({ id: 'tl-1', position: 'top-left', message: 'Left one' }, store);
    });

    const getInertCount = () =>
      Array.from(container.querySelectorAll('.mantine-Notification-root')).filter((root) =>
        root.hasAttribute('inert')
      ).length;

    const rightStack = container.querySelector('[data-position="top-right"]')!;
    const front = rightStack.querySelectorAll('.mantine-Notification-root')[1];

    act(() => {
      fireEvent.pointerDown(front, { pointerType: 'touch' });
    });
    expect(getInertCount()).toBe(0);

    act(() => {
      notifications.hide('tr-1', store);
      notifications.hide('tr-2', store);
    });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    act(() => {
      notifications.show({ id: 'tr-3', position: 'top-right', message: 'Right three' }, store);
      notifications.show({ id: 'tr-4', position: 'top-right', message: 'Right four' }, store);
    });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getInertCount()).toBe(1);

    (window as any).PointerEvent = originalPointerEvent;
  });
});
