import dayjs from 'dayjs';
import { useMemo, useRef, useState } from 'react';
import { Code, Text, useModal } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  ResourcesSchedule,
  type ResourcesScheduleViewLevel,
  type ScheduleEventData,
  type ScheduleEventPlacementRejectedData,
} from '@mantine/schedule';
import { BookingDetails } from './BookingDetails';
import { BookingEventBody } from './BookingEventBody';
import { BookingForm } from './BookingForm/BookingForm';
import {
  applyBookingForm,
  cancelOccurrence,
  cancelSeries,
  getSeriesId,
  getTarget,
  isOwnBooking,
  placeBooking,
  toEvent,
} from './bookings';
import { CancelSeriesChoice, type CancelScope } from './CancelSeriesChoice';
import {
  createInitialBookings,
  DATE_TIME_FORMAT,
  FLOOR_GROUPS,
  getRoom,
  OFFICE_HOURS,
  RESOURCES,
} from './data';
import { RoomLabel } from './RoomLabel/RoomLabel';
import {
  describeConflict,
  findConflict,
  getCapacityError,
  getOfficeHoursError,
  isWeekend,
  OFFICE_HOURS_TEXT,
  validateBooking,
} from './rules';
import type { Booking, BookingFormValues, BookingPayload, BookingTarget, Room } from './types';
import classes from './MeetingRoomBooking.module.css';

const VIEWS = ['day', 'week'] as const;
const CLOSED: [string, string] = ['00:00', '00:00'];
const LABEL_WIDTH = '13rem';

function describeTime(start: string, end: string) {
  return `${dayjs(start).format('ddd, MMM D · HH:mm')}–${dayjs(end).format('HH:mm')}`;
}

function describeBooking(booking: {
  title: string;
  roomId: string | number | undefined;
  start: string;
  end: string;
}) {
  return `${booking.title} · ${getRoom(booking.roomId)?.name} · ${describeTime(booking.start, booking.end)}`;
}

function getScrollTime() {
  const time = dayjs().subtract(1, 'hour').startOf('hour');
  return time.hour() < 7 ? dayjs().hour(7).startOf('hour') : time;
}

export function MeetingRoomBooking() {
  const [bookings, setBookings] = useState(() => createInitialBookings());
  // Modal content is created when the modal opens; it reads the latest bookings through the ref
  const bookingsRef = useRef<Booking[]>(bookings);
  const [view, setView] = useState<ResourcesScheduleViewLevel>('day');
  const [date, setDate] = useState(() => dayjs().format('YYYY-MM-DD'));
  const [scrollTime] = useState(getScrollTime);

  const editor = useModal({ size: 'lg', closeOnClickOutside: false });
  const cancelChoice = useModal({ closeOnClickOutside: false, title: 'Cancel recurring booking' });
  const details = useModal({ title: 'Booking details' });

  const events = useMemo(() => bookings.map(toEvent), [bookings]);
  const ownBookings = useMemo(
    () => bookings.filter((booking) => isOwnBooking(booking.organizer)),
    [bookings]
  );

  const commit = (next: Booking[]) => {
    bookingsRef.current = next;
    setBookings(next);
  };

  const save = (target: BookingTarget, values: BookingFormValues) => {
    const result = applyBookingForm(bookingsRef.current, target, values);
    commit(result.bookings);
    editor.close();
    notifications.show({
      title: target.kind === 'new' ? 'Room booked' : 'Booking updated',
      message: describeBooking({
        ...values,
        title: values.title.trim(),
        roomId: values.roomId!,
        start: values.start!,
        end: values.end!,
      }),
    });
  };

  const cancel = (target: BookingTarget, event: ScheduleEventData, scope: CancelScope) => {
    const seriesId = getSeriesId(bookingsRef.current, target);
    commit(
      scope === 'series' && seriesId
        ? cancelSeries(bookingsRef.current, seriesId)
        : cancelOccurrence(bookingsRef.current, target)
    );
    cancelChoice.close();
    editor.close();
    notifications.show({
      title: scope === 'series' ? 'Series cancelled' : 'Booking cancelled',
      message: describeBooking({
        ...event,
        roomId: event.resourceId,
        start: String(event.start),
        end: String(event.end),
      }),
    });
  };

  const requestCancel = (target: BookingTarget, event: ScheduleEventData) => {
    if (!getSeriesId(bookingsRef.current, target)) {
      cancel(target, event, 'occurrence');
      return;
    }

    cancelChoice.open({
      children: (
        <CancelSeriesChoice
          occurrenceLabel={dayjs(event.start).format('ddd, MMM D')}
          onConfirm={(scope) => cancel(target, event, scope)}
        />
      ),
    });
  };

  const openEditor = (
    target: BookingTarget,
    initialValues: BookingFormValues,
    event?: ScheduleEventData
  ) => {
    const isOverride =
      target.kind === 'single' && Boolean(getSeriesId(bookingsRef.current, target));
    editor.open({
      title: target.kind === 'new' ? 'Book a room' : 'Edit booking',
      children: (
        <BookingForm
          initialValues={initialValues}
          isNew={target.kind === 'new'}
          withRepeat={!isOverride}
          validate={(values) => validateBooking(values, bookingsRef.current, target)}
          onSubmit={(values) => save(target, values)}
          onCancelBooking={event ? () => requestCancel(target, event) : undefined}
        />
      ),
    });
  };

  const openNewBooking = (roomId: string | number | undefined, start: string, end: string) => {
    if (roomId === undefined) {
      return;
    }

    if (getOfficeHoursError(start, end)) {
      notifications.show({ color: 'red', title: 'Office closed', message: OFFICE_HOURS_TEXT });
      return;
    }

    openEditor(
      { kind: 'new' },
      {
        title: '',
        roomId: String(roomId),
        start,
        end,
        attendees: '',
        repeat: false,
        repeatUntil: null,
      }
    );
  };

  const handleEventClick = (event: ScheduleEventData) => {
    const payload = event.payload as BookingPayload | undefined;

    if (!isOwnBooking(payload?.organizer)) {
      details.open({
        children: <BookingDetails event={event as ScheduleEventData<BookingPayload>} />,
      });
      return;
    }

    const target = getTarget(event);
    const series =
      target.kind === 'series'
        ? bookingsRef.current.find((booking) => booking.id === target.seriesId)
        : undefined;

    openEditor(
      target,
      {
        title: event.title,
        roomId: String(event.resourceId),
        start: dayjs(event.start).format(DATE_TIME_FORMAT),
        end: dayjs(event.end).format(DATE_TIME_FORMAT),
        attendees: payload?.attendees ?? '',
        repeat: Boolean(series?.repeatUntil),
        repeatUntil: series?.repeatUntil ?? null,
      },
      event
    );
  };

  const place = (
    event: ScheduleEventData,
    start: string,
    end: string,
    action: 'moved' | 'resized',
    roomId?: string | number
  ) => {
    const result = placeBooking(
      bookingsRef.current,
      event,
      start,
      end,
      roomId === undefined ? undefined : String(roomId)
    );
    const conflict = findConflict(result.bookings, result.changedIds);

    if (conflict) {
      notifications.show({
        color: 'red',
        title: `Booking not ${action}`,
        message: describeConflict(conflict),
      });
      return;
    }

    commit(result.bookings);
    notifications.show({
      title: `Booking ${action}`,
      message: describeBooking({
        title: event.title,
        roomId: roomId ?? event.resourceId,
        start,
        end,
      }),
    });
  };

  const explainRejection = (data: ScheduleEventPlacementRejectedData) => {
    if (data.action === 'external-drop') {
      return;
    }

    const payload = data.event.payload as BookingPayload | undefined;
    const message =
      data.reason === 'overlap' && data.conflicts.length > 0
        ? describeConflict(data.conflicts[0])
        : (getOfficeHoursError(data.start, data.end) ??
          getCapacityError(data.resourceId ?? data.event.resourceId, payload?.attendees ?? 0) ??
          'This time cannot be booked');

    notifications.show({
      color: 'red',
      title: data.action === 'drop' ? 'Booking not moved' : 'Booking not resized',
      message,
    });
  };

  const isOwnEvent = (event: ScheduleEventData) =>
    isOwnBooking((event.payload as BookingPayload | undefined)?.organizer);

  const sharedViewProps = {
    startTime: '07:00:00',
    endTime: '20:00:00',
    intervalMinutes: 30,
    eventDragInterval: 15,
    eventResizeInterval: 15,
    highlightBusinessHours: true,
    groups: FLOOR_GROUPS,
    viewSelectProps: { views: VIEWS },
  };

  return (
    <div>
      <ResourcesSchedule
        view={view}
        onViewChange={setView}
        date={date}
        onDateChange={(next) => setDate(dayjs(next).format('YYYY-MM-DD'))}
        resources={RESOURCES}
        events={events}
        renderResourceLabel={(resource) => <RoomLabel room={resource.payload as Room} />}
        renderEventBody={(event) => <BookingEventBody event={event} />}
        withDragSlotSelect
        onTimeSlotClick={({ slotStart, slotEnd, resourceId }) =>
          openNewBooking(resourceId, slotStart, slotEnd)
        }
        onSlotDragEnd={({ rangeStart, rangeEnd, resourceId }) =>
          openNewBooking(resourceId, rangeStart, rangeEnd)
        }
        onEventClick={handleEventClick}
        withEventsDragAndDrop
        withEventResize
        canDragEvent={isOwnEvent}
        canResizeEvent={isOwnEvent}
        preventEventOverlap
        canDropEvent={({ event, start, end, resourceId }) =>
          !getOfficeHoursError(start, end) &&
          !getCapacityError(
            resourceId,
            (event.payload as BookingPayload | undefined)?.attendees ?? 0
          )
        }
        canResizeEventTo={({ start, end }) => !getOfficeHoursError(start, end)}
        onEventDrop={({ event, newStart, newEnd, resourceId }) =>
          place(event, newStart, newEnd, 'moved', resourceId)
        }
        onEventResize={({ event, newStart, newEnd }) => place(event, newStart, newEnd, 'resized')}
        onEventPlacementRejected={explainRejection}
        dayViewProps={{
          ...sharedViewProps,
          businessHours: isWeekend(date) ? CLOSED : OFFICE_HOURS,
          startScrollTime: scrollTime.format('HH:mm:ss'),
          styles: {
            resourcesDayView: { '--resources-day-view-resource-label-width': LABEL_WIDTH },
          },
        }}
        weekViewProps={{
          ...sharedViewProps,
          businessHours: OFFICE_HOURS,
          withWeekendDays: false,
          slotWidth: 48,
          startScrollDateTime: `${dayjs().format('YYYY-MM-DD')} ${scrollTime.format('HH:mm:ss')}`,
          styles: {
            resourcesWeekView: { '--resources-week-view-resource-label-width': LABEL_WIDTH },
          },
        }}
      />

      <Text fw={500} mt="xl" mb="xs">
        Your bookings
      </Text>
      <Code block className={classes.json}>
        {JSON.stringify(ownBookings, null, 2)}
      </Code>
    </div>
  );
}
