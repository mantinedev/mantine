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
});
