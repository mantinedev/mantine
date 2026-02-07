import dayjs from 'dayjs';
import { useState } from 'react';
import { DateValue } from '@mantine/dates';
import { Schedule, ScheduleEventData } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { _eventFormCode, EventData, EventForm } from '../_EventForm';
import { dataCode, events } from './_data';

function Demo() {
  const [allEvents, setAllEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);

  const handleTimeSlotClick = (slotStart: DateValue, slotEnd: DateValue) => {
    setSelectedEventData({
      title: '',
      start: slotStart,
      end: slotEnd,
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleAllDaySlotClick = (slotDate: DateValue) => {
    setSelectedEventData({
      title: '',
      start: dayjs(slotDate).startOf('day').toDate(),
      end: dayjs(slotDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDayClick = (date: DateValue) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSubmit = (values: EventData) => {
    if (values.id) {
      setAllEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
              }
            : event
        )
      );
    } else {
      setAllEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
        },
      ]);
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setAllEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  const handleSlotDragEnd = (rangeStart: Date, rangeEnd: Date) => {
    setSelectedEventData({
      title: '',
      start: rangeStart,
      end: rangeEnd,
      color: 'blue',
    });
    setFormOpened(true);
  };

  return (
    <>
      <Schedule
        events={allEvents}
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </>
  );
}

const code = `import dayjs from 'dayjs';
import { useState } from 'react';
import { Schedule, ScheduleEventData } from '@mantine/schedule';
import { EventForm } from './EventForm';
import { events } from './data';

function Demo() {
  const [allEvents, setAllEvents] = useState<ScheduleEventData[]>(events);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<{
    id?: string | number;
    title: string;
    start: Date;
    end: Date;
    color: string;
    isAllDay?: boolean;
  } | null>(null);

  const handleTimeSlotClick = (slotStart: Date, slotEnd: Date) => {
    setSelectedEventData({
      title: '',
      start: slotStart,
      end: slotEnd,
      color: 'blue',
      isAllDay: false,
    });
    setFormOpened(true);
  };

  const handleAllDaySlotClick = (slotDate: Date) => {
    setSelectedEventData({
      title: '',
      start: dayjs(slotDate).startOf('day').toDate(),
      end: dayjs(slotDate).endOf('day').toDate(),
      color: 'blue',
      isAllDay: true,
    });
    setFormOpened(true);
  };

  const handleDayClick = (date: Date) => {
    setSelectedEventData({
      title: '',
      start: dayjs(date).startOf('day').toDate(),
      end: dayjs(date).endOf('day').toDate(),
      color: 'blue',
      isAllDay: true,
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
      isAllDay: false,
    });
    setFormOpened(true);
  };

  const handleSaveEvent = (formData: {
    id?: string | number;
    title: string;
    start: Date;
    end: Date;
    color: string;
    isAllDay?: boolean;
  }) => {
    if (formData.id) {
      setAllEvents((prev) =>
        prev.map((e) =>
          e.id === formData.id
            ? {
                ...e,
                title: formData.title,
                start: formData.start.toISOString(),
                end: formData.end.toISOString(),
                color: formData.color,
              }
            : e
        )
      );
    } else {
      setAllEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: formData.title,
          start: formData.start.toISOString(),
          end: formData.end.toISOString(),
          color: formData.color,
        },
      ]);
    }
    setSelectedEventData(null);
  };

  const handleSlotDragEnd = (rangeStart: Date, rangeEnd: Date) => {
    setSelectedEventData({
      title: '',
      start: rangeStart,
      end: rangeEnd,
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setAllEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <Schedule
        events={allEvents}
        withDragSlotSelect
        onTimeSlotClick={handleTimeSlotClick}
        onAllDaySlotClick={handleAllDaySlotClick}
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      />
    </>
  );
}`;

export const eventForm: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: _eventFormCode, language: 'tsx', fileName: 'EventForm.tsx' },
  ],
};
