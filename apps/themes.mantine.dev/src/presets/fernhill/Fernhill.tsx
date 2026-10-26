'use client';

import { useEffect, useRef, useState } from 'react';
import { IconAlertTriangle, IconBan, IconCheck, IconCircleX, IconSend } from '@tabler/icons-react';
import { Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { AppointmentDrawer } from './AppointmentDrawer';
import { type BookingRequest, BookModal } from './BookModal';
import {
  addDays,
  type Appointment,
  DAY_END,
  DAY_START,
  dayKey,
  DOW,
  findClashes,
  firstName,
  freeRoomFor,
  fromKey,
  generateDay,
  hm,
  initialWaitlist,
  longDate,
  NOW_MIN,
  PRACS,
  pracFree,
  type RoomId,
  roomFits,
  sameDay,
  slotY,
  STATUS,
  type StatusId,
  TODAY,
  typeOf,
  type ViewId,
  type WaitingPatient,
} from './data';
import { DayGrid } from './DayGrid';
import { Rail } from './Rail';
import { RoomRibbon } from './RoomRibbon';
import { cssVariablesResolver, theme } from './theme';
import { TopBar } from './TopBar';
import { WeekStrip } from './WeekStrip';
import classes from './Fernhill.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap';

const TOAST_ICONS = {
  check: IconCheck,
  alert: IconAlertTriangle,
  send: IconSend,
  ban: IconBan,
  cancel: IconCircleX,
};

type ToastIcon = keyof typeof TOAST_ICONS;
type Store = Record<string, Appointment[]>;

const monthOf = (date: Date) => dayKey(new Date(date.getFullYear(), date.getMonth(), 1));

function ClinicDay() {
  const [store, setStore] = useState<Store>({});
  const [currentKey, setCurrentKey] = useState(dayKey(TODAY));
  const [month, setMonth] = useState(monthOf(TODAY));
  const [view, setView] = useState<ViewId>('prac');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hover, setHover] = useState<{ id: string; source: 'ribbon' | 'grid' } | null>(null);
  const [waitlist, setWaitlist] = useState<WaitingPatient[]>(initialWaitlist);
  const [railOpen, setRailOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [dragId, setDragId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ text: string; icon: ToastIcon } | null>(null);
  const [scrollRequest, setScrollRequest] = useState<{ y: number } | null>({
    y: slotY(NOW_MIN) - 120,
  });
  const gridRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const toastTimeout = useRef<number>(undefined);

  const current = fromKey(currentKey);
  const getDay = (date: Date) => store[dayKey(date)] ?? generateDay(date);
  const list = getDay(current);
  const clashes = findClashes(list);
  const isToday = sameDay(current, TODAY);
  const selected = list.find((a) => a.id === selectedId);
  const dragging = waitlist.find((w) => w.id === dragId);

  useEffect(() => {
    if (scrollRequest && gridRef.current) {
      gridRef.current.scrollTop = Math.max(0, scrollRequest.y);
    }
  }, [scrollRequest]);

  useEffect(() => {
    if (!railOpen) {
      return undefined;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setRailOpen(false);
      }
    };
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        rootRef.current?.contains(target) &&
        !target.closest('[data-rail]') &&
        !target.closest('[data-rail-toggle]')
      ) {
        setRailOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClick);
    };
  }, [railOpen]);

  const showToast = (text: string, icon: ToastIcon = 'check') => {
    setToast({ text, icon });
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2800);
  };

  const scrollToMinute = (minutes: number, offset = 80) =>
    setScrollRequest({ y: slotY(minutes) - offset });

  const goTo = (date: Date) => {
    setCurrentKey(dayKey(date));
    if (monthOf(date) !== month) {
      setMonth(monthOf(date));
    }
    setSelectedId(null);
    if (sameDay(date, TODAY)) {
      scrollToMinute(NOW_MIN, 120);
    }
  };

  const draftStore = () => {
    const next: Store = { ...store };
    return {
      next,
      read: (date: Date) => next[dayKey(date)] ?? generateDay(date),
      write: (date: Date, items: Appointment[]) => {
        next[dayKey(date)] = items;
      },
    };
  };

  const placeWaiting = (item: WaitingPatient, prac: number, start: number, date: Date) => {
    const type = typeOf(item.type);
    const items = getDay(date);
    if (date.getDay() === 0) {
      return { error: 'The clinic is closed on Sundays' };
    }
    if (sameDay(date, TODAY) && start < NOW_MIN) {
      return { error: 'That time has already passed' };
    }
    if (date < TODAY) {
      return { error: 'Pick today or a later day' };
    }
    if (start + type.dur > DAY_END) {
      return { error: `${item.type} takes ${type.dur} min and would run past closing` };
    }
    if (!pracFree(prac, start, type.dur, items)) {
      return { error: `${PRACS[prac].name} is busy at ${hm(start)}` };
    }
    const room = freeRoomFor(item.type, start, type.dur, items);
    if (!room) {
      return { error: `Both treatment rooms are busy at ${hm(start)}` };
    }
    const appointment: Appointment = {
      id: `${dayKey(date)}-w-${item.id}`,
      prac,
      start,
      dur: type.dur,
      type: item.type,
      patient: item.patient,
      room,
      status: 'booked',
    };
    setStore((s) => ({ ...s, [dayKey(date)]: [...items, appointment] }));
    setWaitlist((w) => w.filter((x) => x.id !== item.id));
    return { room };
  };

  const dropWaiting = (column: string, start: number) => {
    if (!dragging) {
      return;
    }
    const type = typeOf(dragging.type);
    let prac: number | undefined;
    if (view === 'prac') {
      prac = Number(column);
    } else {
      const room = column as RoomId;
      if (!roomFits(dragging.type, room)) {
        showToast(`${dragging.type} can’t go in ${room}`, 'alert');
        return;
      }
      prac =
        dragging.prac === null
          ? [0, 1, 2, 3].find((p) => pracFree(p, start, type.dur, list))
          : dragging.prac;
      if (prac === undefined) {
        showToast(`Nobody is free at ${hm(start)}`, 'alert');
        return;
      }
    }
    const result = placeWaiting(dragging, prac, start, current);
    if (result.error) {
      showToast(result.error, 'alert');
      return;
    }
    showToast(
      `${dragging.patient} booked ${hm(start)} with ${firstName(PRACS[prac].name)} in ${result.room}. Text sent.`,
      'send'
    );
  };

  const offerNext = (id: string) => {
    const item = waitlist.find((w) => w.id === id);
    if (!item) {
      return;
    }
    const type = typeOf(item.type);
    let day = new Date(current < TODAY ? TODAY : current);
    for (let n = 0; n < 7; n++, day = addDays(day, 1)) {
      if (day.getDay() === 0) {
        continue;
      }
      const items = getDay(day);
      const pracs = item.prac === null ? [0, 1, 2, 3] : [item.prac];
      const from = sameDay(day, TODAY) ? Math.ceil((NOW_MIN + 10) / 15) * 15 : DAY_START;
      const end = day.getDay() === 6 ? 13 * 60 : DAY_END;
      for (let s = from; s + type.dur <= end; s += 15) {
        const saturday = day.getDay() === 6;
        const prac = pracs.find(
          (p) =>
            (!saturday || p < 2) &&
            pracFree(p, s, type.dur, items) &&
            freeRoomFor(item.type, s, type.dur, items)
        );
        if (prac !== undefined) {
          const result = placeWaiting(item, prac, s, day);
          if (result.error) {
            showToast(result.error, 'alert');
            return;
          }
          if (!sameDay(day, current)) {
            goTo(day);
          }
          showToast(
            sameDay(day, TODAY)
              ? `${item.patient} booked ${hm(s)} with ${firstName(PRACS[prac].name)} in ${result.room}. Text sent.`
              : `Offered ${DOW[day.getDay()]} ${day.getDate()} at ${hm(s)} to ${item.patient}. Text sent.`,
            'send'
          );
          scrollToMinute(s);
          return;
        }
      }
    }
    showToast('No free slot in the next 7 days', 'alert');
  };

  const changeStatus = (appointment: Appointment, status: StatusId) => {
    setStore((s) => ({
      ...s,
      [currentKey]: list.map((a) => (a.id === appointment.id ? { ...a, status } : a)),
    }));
    const messages: Record<StatusId, [string, ToastIcon]> = {
      booked: ['Booking restored', 'check'],
      arrived: [`${appointment.patient}: ${STATUS.arrived.label.toLowerCase()}`, 'check'],
      treatment: [`${appointment.patient}: ${STATUS.treatment.label.toLowerCase()}`, 'check'],
      done: [`${appointment.patient}: ${STATUS.done.label.toLowerCase()}`, 'check'],
      noshow: [`${appointment.patient} marked as a no-show`, 'ban'],
      cancelled: [`Appointment cancelled. ${appointment.patient} gets a text.`, 'cancel'],
    };
    showToast(...messages[status]);
  };

  const moveAppointment = (
    appointment: Appointment,
    dateKey: string,
    start: number,
    room: RoomId
  ) => {
    const date = fromKey(dateKey);
    if (date.getDay() === 0) {
      showToast('The clinic is closed on Sundays', 'alert');
      return;
    }
    const target = getDay(date);
    if (start + appointment.dur > DAY_END) {
      showToast('That would run past closing at 19:00', 'alert');
      return;
    }
    if (!pracFree(appointment.prac, start, appointment.dur, target, appointment.id)) {
      showToast(`${PRACS[appointment.prac].name} is busy then`, 'alert');
      return;
    }
    if (
      (room === 'Room 1' || room === 'Room 2') &&
      target.some(
        (x) =>
          x.id !== appointment.id &&
          x.room === room &&
          x.status !== 'cancelled' &&
          x.start < start + appointment.dur &&
          start < x.start + x.dur
      )
    ) {
      showToast(`${room} is busy then. Try the other room.`, 'alert');
      return;
    }
    const draft = draftStore();
    draft.write(
      current,
      draft.read(current).filter((a) => a.id !== appointment.id)
    );
    draft.write(date, [
      ...draft.read(date).filter((a) => a.id !== appointment.id),
      { ...appointment, start, room },
    ]);
    setStore(draft.next);
    setSelectedId(null);
    if (!sameDay(date, current)) {
      goTo(date);
    }
    showToast(`Moved to ${DOW[date.getDay()]} ${date.getDate()} at ${hm(start)}, ${room}`);
  };

  const book = (request: BookingRequest) => {
    const draft = draftStore();
    const date = fromKey(request.date);
    const type = typeOf(request.type);
    let skipped = 0;
    for (let i = 0; i < request.sessions; i++) {
      const day = addDays(date, i * 7);
      const items = draft.read(day);
      const roomBusy =
        (request.room === 'Room 1' || request.room === 'Room 2') &&
        items.some(
          (a) =>
            a.room === request.room &&
            a.status !== 'cancelled' &&
            a.start < request.start + type.dur &&
            request.start < a.start + a.dur
        );
      if (i > 0 && (!pracFree(request.prac, request.start, type.dur, items) || roomBusy)) {
        skipped++;
        continue;
      }
      draft.write(day, [
        ...items,
        {
          id: `${dayKey(day)}-b-${Date.now()}-${i}`,
          prac: request.prac,
          start: request.start,
          dur: type.dur,
          type: type.name,
          patient: request.patient,
          room: request.room,
          status: 'booked',
        },
      ]);
    }
    setStore(draft.next);
    setBookOpen(false);
    if (!sameDay(date, current)) {
      goTo(date);
    }
    scrollToMinute(request.start);
    showToast(
      request.sessions > 1
        ? `${request.sessions - skipped} sessions booked for ${request.patient}${
            skipped ? `, ${skipped} skipped because of clashes` : ''
          }`
        : `${request.patient} booked at ${hm(request.start)} with ${firstName(PRACS[request.prac].name)}`
    );
  };

  const openAppointment = (appointment: Appointment) => {
    setSelectedId(appointment.id);
  };

  const ToastIconComponent = toast ? TOAST_ICONS[toast.icon] : IconCheck;

  return (
    <div className={classes.root} ref={rootRef}>
      <TopBar
        title={`${longDate(current)}${isToday ? ', today' : ''}`}
        view={view}
        onViewChange={setView}
        query={query}
        onQueryChange={(value) => {
          setQuery(value);
          const q = value.trim().toLowerCase();
          const hit = q && list.find((a) => a.patient.toLowerCase().includes(q));
          if (hit) {
            scrollToMinute(hit.start);
          }
        }}
        railOpen={railOpen}
        onRailToggle={() => setRailOpen((o) => !o)}
        onPrev={() => goTo(addDays(current, -1))}
        onNext={() => goTo(addDays(current, 1))}
        onToday={() => goTo(TODAY)}
        onBook={() => setBookOpen(true)}
      />

      <div className={classes.body}>
        <Rail
          opened={railOpen}
          current={currentKey}
          month={month}
          onMonthChange={setMonth}
          onDayChange={(value) => goTo(fromKey(value))}
          waitlist={waitlist}
          draggingId={dragId}
          onDragStart={(id, event) => {
            setDragId(id);
            event.dataTransfer.setData('text/plain', id);
            event.dataTransfer.effectAllowed = 'move';
          }}
          onDragEnd={() => {
            setDragId(null);
            setRailOpen(false);
          }}
          onOffer={offerNext}
        />

        <main className={classes.main}>
          <WeekStrip current={current} getDay={getDay} onSelect={goTo} />
          <RoomRibbon
            current={current}
            list={list}
            clashes={clashes}
            highlightId={hover?.id ?? null}
            onHover={(id) => setHover(id ? { id, source: 'ribbon' } : null)}
            onSelect={(appointment) => {
              scrollToMinute(appointment.start);
              openAppointment(appointment);
            }}
          />
          <DayGrid
            list={list}
            clashes={clashes}
            view={view}
            query={query}
            isToday={isToday}
            closed={current.getDay() === 0}
            selectedId={selectedId}
            highlightId={hover?.source === 'ribbon' ? hover.id : null}
            dragging={
              dragging ? { patient: dragging.patient, dur: typeOf(dragging.type).dur } : null
            }
            scrollRef={gridRef}
            onHover={(id) => setHover(id ? { id, source: 'grid' } : null)}
            onSelect={openAppointment}
            onDrop={dropWaiting}
          />
        </main>
      </div>

      <AppointmentDrawer
        appointment={selected}
        opened={!!selected}
        date={current}
        conflict={!!selected && clashes.ids.has(selected.id)}
        onClose={() => setSelectedId(null)}
        onStatus={changeStatus}
        onMove={moveAppointment}
      />

      <BookModal
        opened={bookOpen}
        current={current}
        getDay={getDay}
        onClose={() => setBookOpen(false)}
        onBook={book}
      />

      <Transition mounted={toast !== null} transition="pop" duration={150} keepMounted={false}>
        {(styles) => (
          <div className={classes.toast} style={styles} role="status">
            <ToastIconComponent size={16} stroke={1.8} />
            <span>{toast?.text}</span>
          </div>
        )}
      </Transition>
    </div>
  );
}

export function Fernhill() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <ClinicDay />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}
