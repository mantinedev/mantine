import { useEffect, useState } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  UnstyledButton,
  useMantineTheme,
  useProps,
} from '@mantine/core';
import { ScheduleEventData } from '../../types';
import { RenderEvent, RenderEventBody } from '../ScheduleEvent/ScheduleEvent';

export type ScheduleBackgroundEventResizeEdge = 'top' | 'bottom' | 'start' | 'end';

const RESIZE_EDGES = {
  vertical: ['top', 'bottom'],
  horizontal: ['start', 'end'],
} satisfies Record<string, ScheduleBackgroundEventResizeEdge[]>;

export interface ScheduleBackgroundEventProps<
  Edge extends ScheduleBackgroundEventResizeEdge = ScheduleBackgroundEventResizeEdge,
>
  extends BoxProps, ElementProps<'div', 'onClick'> {
  /** Background event to display */
  event: ScheduleEventData;

  /** If set, the root element is a `button` instead of a `div` and the event can be clicked @default false */
  interactive?: boolean;

  /** Called when the event is clicked, only when `interactive` is set */
  onEventClick?: (event: ScheduleEventData, e: React.MouseEvent<HTMLButtonElement>) => void;

  /** Function to fully customize event rendering */
  renderEvent?: RenderEvent;

  /** Function to customize event body */
  renderEventBody?: RenderEventBody;

  /** If set, the event renders resize handles on both of its edges @default false */
  withResize?: boolean;

  /** Axis along which the event is resized, defines which edges render handles @default 'vertical' */
  resizeAxis?: 'vertical' | 'horizontal';

  /** Props passed down to both resize handles, usually a styles api props object */
  resizeHandleProps?: Record<string, any>;

  /** Called when resize starts on an edge */
  onResizeStart?: (edge: Edge, e: React.PointerEvent) => void;

  /** If set, the event is currently being resized @default false */
  isResizing?: boolean;

  /** Edge that is currently being dragged, only relevant when `isResizing` is set */
  activeResizeEdge?: Edge | null;
}

export function ScheduleBackgroundEvent<
  Edge extends ScheduleBackgroundEventResizeEdge = ScheduleBackgroundEventResizeEdge,
>(props: ScheduleBackgroundEventProps<Edge>) {
  const {
    event,
    interactive,
    onEventClick,
    renderEvent,
    renderEventBody,
    mod,
    withResize,
    resizeAxis = 'vertical',
    resizeHandleProps,
    onResizeStart,
    isResizing,
    activeResizeEdge,
    ...others
  } = useProps('ScheduleBackgroundEvent', null, props);

  const theme = useMantineTheme();

  // An interactive background event captures pointer events so it can be clicked, which
  // also makes it the target of drag events – the drop targets underneath (day cells and
  // slots) would then never receive `dragover` and could not accept a drop. Stepping out
  // of the way for the duration of the drag keeps both behaviours working, including for
  // drags started outside the schedule.
  const [dragPassthrough, setDragPassthrough] = useState(false);

  useEffect(() => {
    if (!dragPassthrough) {
      return undefined;
    }

    const reset = () => setDragPassthrough(false);

    document.addEventListener('dragend', reset);
    document.addEventListener('drop', reset);
    // A drag can end without either of those firing – dropped on another window, or with
    // propagation stopped. Pointer events are suppressed for the duration of a drag, so
    // seeing one means the drag is over and the element can capture input again.
    document.addEventListener('pointermove', reset);

    return () => {
      document.removeEventListener('dragend', reset);
      document.removeEventListener('drop', reset);
      document.removeEventListener('pointermove', reset);
    };
  }, [dragPassthrough]);

  const colors = theme.variantColorResolver({
    color: event.color || theme.primaryColor,
    theme,
    variant: 'light',
    autoContrast: true,
  });

  // Handles are part of the children rather than a wrapper so that `renderEvent` consumers
  // keep them – the same contract `ScheduleEvent` uses for its own resize handles.
  const body = typeof renderEventBody === 'function' ? renderEventBody(event) : event.title;
  const children = withResize ? (
    <>
      {(RESIZE_EDGES[resizeAxis] as Edge[]).map((edge) => (
        <Box
          key={edge}
          {...resizeHandleProps}
          mod={{ edge }}
          data-active={(isResizing && activeResizeEdge === edge) || undefined}
          onPointerDown={(e: React.PointerEvent) => onResizeStart?.(edge, e)}
        />
      ))}
      {body}
    </>
  ) : (
    body
  );

  const eventProps = {
    ...others,
    __vars: {
      '--bg-event-bg': colors.background,
      '--bg-event-color': colors.color,
      '--bg-event-hover': colors.hover,
    },
    children,
    // Composed rather than replaced – `mod` is a public prop, and overwriting it would
    // silently drop the caller's data modifiers whenever `interactive` is set.
    mod: [mod, { interactive, resizable: withResize, resizing: isResizing }],
    ...(interactive
      ? {
          'data-event-id': event.id,
          title: event.title,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => onEventClick?.(event, e),
          onDragEnter: () => setDragPassthrough(true),
          onDragOver: () => setDragPassthrough(true),
        }
      : null),
    // Appended rather than replaced – the views position background events with `style`,
    // and the array form preserves the function and array style values Box supports.
    ...(interactive && dragPassthrough
      ? { style: [others.style, { pointerEvents: 'none' as const }] }
      : null),
  };

  // The root element switches between a div and a button depending on `interactive`, so
  // the shared prop bag cannot satisfy both element types at once.
  const rootProps = eventProps as Parameters<RenderEvent>[1];

  if (typeof renderEvent === 'function') {
    return renderEvent(event, rootProps);
  }

  return interactive ? (
    <UnstyledButton {...rootProps} />
  ) : (
    <Box {...(rootProps as React.ComponentPropsWithoutRef<'div'>)} />
  );
}

ScheduleBackgroundEvent.displayName = '@mantine/schedule/ScheduleBackgroundEvent';
