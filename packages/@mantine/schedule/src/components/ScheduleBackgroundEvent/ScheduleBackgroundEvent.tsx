import { Box, BoxProps, ElementProps, UnstyledButton, useMantineTheme } from '@mantine/core';
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

export function ScheduleBackgroundEvent({
  event,
  interactive,
  onEventClick,
  renderEvent,
  renderEventBody,
  ...others
}: ScheduleBackgroundEventProps) {
  const theme = useMantineTheme();

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
    ...(interactive
      ? {
          'data-event-id': event.id,
          mod: { interactive: true },
          title: event.title,
          onClick: (e: React.MouseEvent<HTMLButtonElement>) => onEventClick?.(event, e),
        }
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
