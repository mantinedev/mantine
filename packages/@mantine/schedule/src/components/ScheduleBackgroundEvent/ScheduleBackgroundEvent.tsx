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

export interface ScheduleBackgroundEventProps extends BoxProps, ElementProps<'div', 'onClick'> {
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
}

export function ScheduleBackgroundEvent(props: ScheduleBackgroundEventProps) {
  const { event, interactive, onEventClick, renderEvent, renderEventBody, mod, ...others } =
    useProps('ScheduleBackgroundEvent', null, props);

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

  const eventProps = {
    ...others,
    __vars: {
      '--bg-event-bg': colors.background,
      '--bg-event-color': colors.color,
      '--bg-event-hover': colors.hover,
    },
    children: typeof renderEventBody === 'function' ? renderEventBody(event) : event.title,
    // Composed rather than replaced – `mod` is a public prop, and overwriting it would
    // silently drop the caller's data modifiers whenever `interactive` is set.
    mod: interactive ? [mod, { interactive: true }] : mod,
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
