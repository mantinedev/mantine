type EventHandler<Event> = ((event?: Event) => void) | undefined;

export function createEventHandler<Event>(
  parentEventHandler: EventHandler<Event>,
  eventHandler: EventHandler<Event>
) {
  return (event?: Event) => {
    parentEventHandler?.(event);
    eventHandler?.(event);
  };
}
