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
