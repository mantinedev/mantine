import { getVisibleEvents } from './get-visible-events';

describe('@mantine/schedule/get-visible-events', () => {
  it('returns all events when total is less than max', () => {
    const result = getVisibleEvents({ maxEvents: 5, totalEvents: 3 });
    expect(result.visibleEventsCount).toBe(3);
    expect(result.hiddenEventsCount).toBe(0);
  });

  it('returns max events minus 1 and hides remainder when total exceeds max', () => {
    const result = getVisibleEvents({ maxEvents: 3, totalEvents: 8 });
    expect(result.visibleEventsCount).toBe(2);
    expect(result.hiddenEventsCount).toBe(6);
  });

  it('returns all events when total equals max', () => {
    const result = getVisibleEvents({ maxEvents: 5, totalEvents: 5 });
    expect(result.visibleEventsCount).toBe(5);
    expect(result.hiddenEventsCount).toBe(0);
  });

  it('handles zero total events', () => {
    const result = getVisibleEvents({ maxEvents: 5, totalEvents: 0 });
    expect(result.visibleEventsCount).toBe(0);
    expect(result.hiddenEventsCount).toBe(0);
  });

  it('handles zero max events', () => {
    const result = getVisibleEvents({ maxEvents: 0, totalEvents: 10 });
    expect(result.visibleEventsCount).toBe(-1);
    expect(result.hiddenEventsCount).toBe(11);
  });

  it('handles both zero', () => {
    const result = getVisibleEvents({ maxEvents: 0, totalEvents: 0 });
    expect(result.visibleEventsCount).toBe(0);
    expect(result.hiddenEventsCount).toBe(0);
  });

  it('calculates hidden count correctly for large numbers', () => {
    const result = getVisibleEvents({ maxEvents: 100, totalEvents: 1000 });
    expect(result.visibleEventsCount).toBe(99);
    expect(result.hiddenEventsCount).toBe(901);
  });

  it('handles single max event', () => {
    const result = getVisibleEvents({ maxEvents: 1, totalEvents: 5 });
    expect(result.visibleEventsCount).toBe(0);
    expect(result.hiddenEventsCount).toBe(5);
  });

  it('sums visible and hidden counts to total events', () => {
    const result = getVisibleEvents({ maxEvents: 3, totalEvents: 10 });
    expect(result.visibleEventsCount + result.hiddenEventsCount).toBe(10);
  });
});
