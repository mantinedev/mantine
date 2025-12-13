interface GetVisibleEventsInput {
  maxEvents: number;
  totalEvents: number;
}

export function getVisibleEvents({ maxEvents, totalEvents }: GetVisibleEventsInput) {
  if (totalEvents <= maxEvents) {
    return {
      visibleEventsCount: totalEvents,
      hiddenEventsCount: 0,
    };
  }

  return {
    visibleEventsCount: maxEvents - 1,
    hiddenEventsCount: totalEvents - (maxEvents - 1),
  };
}
