import React, { useRef } from 'react';
import { useLongPress } from '@mantine/hooks';
import { createEventHandler } from '../../core/utils/create-event-handler/create-event-handler';

interface UseContextMenuHandlersOptions {
  /** Props of the child element that opens the dropdown */
  childProps: Record<string, any>;

  /** If set, right-click trigger is disabled and the browser's default context menu is shown */
  disabled: boolean | undefined;

  /** Current opened state, used to set `data-expanded` on the child */
  opened: boolean;

  /** Delay in ms before a touch long-press opens the dropdown, `500` by default */
  longPressDelay?: number;

  /** Sets the floating reference to a virtual element positioned at the cursor */
  setReference: (node: object) => void;

  /** Called to open the dropdown after the reference has been set */
  open: () => void;
}

export function useContextMenuHandlers({
  childProps,
  disabled,
  opened,
  longPressDelay = 500,
  setReference,
  open,
}: UseContextMenuHandlersOptions) {
  const touchActiveRef = useRef(false);
  const gestureHandledRef = useRef(false);
  const touchTargetRef = useRef<object | null>(null);
  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;

  const openAtPoint = (clientX: number, clientY: number, contextElement: object | null) => {
    setReference({
      getBoundingClientRect: () => ({
        x: clientX,
        y: clientY,
        width: 0,
        height: 0,
        top: clientY,
        left: clientX,
        right: clientX,
        bottom: clientY,
        toJSON: () => undefined,
      }),
      contextElement,
    });

    open();
  };

  const onMouseDown = createEventHandler<any>(
    childProps.onMouseDown,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }
      if (event.button === 2) {
        event.stopPropagation();
      }
    }
  );

  const onContextMenu = createEventHandler<any>(
    childProps.onContextMenu,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled || event.defaultPrevented) {
        return;
      }

      event.preventDefault();

      if (gestureHandledRef.current) {
        return;
      }

      openAtPoint(event.clientX, event.clientY, event.currentTarget);

      if (touchActiveRef.current) {
        gestureHandledRef.current = true;
      }
    }
  );

  const longPressHandlers = useLongPress(
    (event) => {
      if (disabledRef.current || gestureHandledRef.current) {
        return;
      }

      const touchEvent = event as React.TouchEvent<HTMLElement>;
      const touch = touchEvent.touches[0] ?? touchEvent.changedTouches[0];
      if (!touch) {
        return;
      }

      openAtPoint(touch.clientX, touch.clientY, touchTargetRef.current);
      gestureHandledRef.current = true;
    },
    {
      threshold: longPressDelay,
      events: ['touch'],
      cancelOnMove: true,
      onStart: (event) => {
        touchActiveRef.current = true;
        gestureHandledRef.current = false;
        touchTargetRef.current = event.currentTarget;
      },
      onFinish: (event) => {
        touchActiveRef.current = false;
        gestureHandledRef.current = false;
        if (!disabledRef.current) {
          event.preventDefault();
        }
      },
      onCancel: () => {
        touchActiveRef.current = false;
        gestureHandledRef.current = false;
      },
    }
  );

  const onTouchStart = createEventHandler<any>(
    childProps.onTouchStart,
    longPressHandlers.onTouchStart
  );
  const onTouchEnd = createEventHandler<any>(childProps.onTouchEnd, longPressHandlers.onTouchEnd);
  const onTouchCancel = createEventHandler<any>(
    childProps.onTouchCancel,
    longPressHandlers.onTouchCancel
  );
  const onTouchMove = createEventHandler<any>(
    childProps.onTouchMove,
    longPressHandlers.onTouchMove
  );

  return {
    onContextMenu,
    onMouseDown,
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    onTouchMove,
    style: disabled
      ? childProps.style
      : {
          ...childProps.style,
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
        },
    'data-expanded': opened ? true : undefined,
  };
}
