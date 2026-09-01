import { testUtils } from '../../test-utils';
import { CascadePositionedEvent, applyCascadeLayout } from './apply-cascade-layout';

function createPositionedEvent({
  id,
  start,
  end,
  column,
  allDay = false,
}: {
  id: number;
  start: string;
  end: string;
  column: number;
  allDay?: boolean;
}): CascadePositionedEvent {
  return {
    ...testUtils.createEvent({
      id,
      start: `${testUtils.testDate} ${start}`,
      end: `${testUtils.testDate} ${end}`,
    }),
    position: { allDay, column, width: 0, offset: 0, overlaps: 0 },
  };
}

describe('@mantine/schedule/apply-cascade-layout', () => {
  it('gives a single event the full width with no indent', () => {
    const events = [
      createPositionedEvent({ id: 1, start: '10:00:00', end: '11:00:00', column: 0 }),
    ];

    applyCascadeLayout(events);

    expect(events[0].position).toMatchObject({ offset: 0, width: 100, overlaps: 1 });
  });

  it('leaves events that do not overlap at full width in separate clusters', () => {
    const events = [
      createPositionedEvent({ id: 1, start: '10:00:00', end: '11:00:00', column: 0 }),
      createPositionedEvent({ id: 2, start: '11:00:00', end: '12:00:00', column: 0 }),
    ];

    applyCascadeLayout(events);

    expect(events[0].position).toMatchObject({ offset: 0, width: 100, overlaps: 1 });
    expect(events[1].position).toMatchObject({ offset: 0, width: 100, overlaps: 1 });
  });

  it('indents by the base step while the cluster is small enough to afford it', () => {
    const events = [
      createPositionedEvent({ id: 1, start: '10:00:00', end: '12:00:00', column: 0 }),
      createPositionedEvent({ id: 2, start: '10:30:00', end: '12:00:00', column: 1 }),
      createPositionedEvent({ id: 3, start: '11:00:00', end: '12:00:00', column: 2 }),
    ];

    applyCascadeLayout(events);

    // 3 columns => step = min(20, 40 / 2) = 20
    expect(events[0].position).toMatchObject({ offset: 0, width: 100, overlaps: 3 });
    expect(events[1].position).toMatchObject({ offset: 20, width: 80, overlaps: 3 });
    expect(events[2].position).toMatchObject({ offset: 40, width: 60, overlaps: 3 });
  });

  it('squeezes the step so the topmost event keeps its minimum width in a large cluster', () => {
    const events = Array.from({ length: 8 }, (_, index) =>
      createPositionedEvent({ id: index + 1, start: '10:00:00', end: '12:00:00', column: index })
    );

    applyCascadeLayout(events);

    // 8 columns => step = min(20, 40 / 7) = 5.714...
    const step = 40 / 7;

    expect(events[0].position.offset).toBe(0);
    expect(events[1].position.offset).toBeCloseTo(step, 5);
    expect(events[7].position.offset).toBeCloseTo(40, 5);
    expect(events[7].position.width).toBeCloseTo(60, 5);
    expect(events.every((event) => event.position.overlaps === 8)).toBe(true);
  });

  it('never indents the topmost event past the minimum width, whatever the cluster size', () => {
    const events = Array.from({ length: 40 }, (_, index) =>
      createPositionedEvent({ id: index + 1, start: '10:00:00', end: '12:00:00', column: index })
    );

    applyCascadeLayout(events);

    expect(events[39].position.offset).toBeCloseTo(40, 5);
    expect(events[39].position.width).toBeCloseTo(60, 5);
  });

  it('sizes each cluster independently so a dense cluster does not indent a sparse one', () => {
    const events = [
      createPositionedEvent({ id: 1, start: '09:00:00', end: '10:00:00', column: 0 }),
      createPositionedEvent({ id: 2, start: '09:30:00', end: '10:00:00', column: 1 }),
      createPositionedEvent({ id: 3, start: '14:00:00', end: '15:00:00', column: 0 }),
    ];

    applyCascadeLayout(events);

    expect(events[0].position).toMatchObject({ offset: 0, overlaps: 2 });
    expect(events[1].position).toMatchObject({ offset: 20, overlaps: 2 });
    expect(events[2].position).toMatchObject({ offset: 0, width: 100, overlaps: 1 });
  });

  it('uses the whole transitive cluster to size the step, not just directly overlapping events', () => {
    // A and C never overlap each other, but both overlap B, so all three share a cluster
    const events = [
      createPositionedEvent({ id: 1, start: '10:00:00', end: '11:00:00', column: 0 }),
      createPositionedEvent({ id: 2, start: '10:30:00', end: '11:30:00', column: 1 }),
      createPositionedEvent({ id: 3, start: '11:00:00', end: '12:00:00', column: 0 }),
    ];

    applyCascadeLayout(events);

    expect(events.every((event) => event.position.overlaps === 2)).toBe(true);
    // A and C share column 0 because they do not conflict, so they share an indent level
    expect(events[0].position.offset).toBe(0);
    expect(events[2].position.offset).toBe(0);
    expect(events[1].position.offset).toBe(20);
  });

  it('leaves all-day events untouched so they keep their own full-width layout', () => {
    const events = [
      createPositionedEvent({ id: 1, start: '00:00:00', end: '23:59:59', column: 0, allDay: true }),
      createPositionedEvent({ id: 2, start: '10:00:00', end: '12:00:00', column: 0 }),
      createPositionedEvent({ id: 3, start: '10:30:00', end: '12:00:00', column: 1 }),
    ];

    applyCascadeLayout(events);

    expect(events[0].position).toMatchObject({ offset: 0, width: 0, overlaps: 0 });
    expect(events[1].position).toMatchObject({ offset: 0, overlaps: 2 });
    expect(events[2].position).toMatchObject({ offset: 20, overlaps: 2 });
  });
});
