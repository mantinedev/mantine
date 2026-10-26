'use client';

import { useState } from 'react';
import {
  IconAlertTriangle,
  IconBan,
  IconCircleCheck,
  IconCircleX,
  IconClock,
  IconCheck,
  IconDoor,
  IconPlayerPlay,
  IconVideo,
} from '@tabler/icons-react';
import { Avatar, Progress, ScrollArea } from '@mantine/core';
import {
  type Appointment,
  type Clashes,
  DAY_END,
  DAY_START,
  hm,
  NOW_MIN,
  PRACS,
  ROOM_ROLES,
  ROOMS,
  SLOT_PX,
  slotY,
  type StatusId,
  STATUS,
  type ViewId,
} from './data';
import { PracAvatar } from './PracAvatar';
import classes from './DayGrid.module.css';

const STATUS_ICONS: Record<StatusId, typeof IconClock> = {
  booked: IconClock,
  arrived: IconCheck,
  treatment: IconPlayerPlay,
  done: IconCircleCheck,
  noshow: IconBan,
  cancelled: IconCircleX,
};

const HEIGHT = ((DAY_END - DAY_START) / 15) * SLOT_PX;
const HOURS = Array.from({ length: 11 }, (_, index) => 480 + index * 60);

interface Column {
  key: string;
  name: string;
  role: string;
  test: (a: Appointment) => boolean;
  avatar: React.ReactNode;
}

function getColumns(view: ViewId): Column[] {
  if (view === 'prac') {
    return PRACS.map((prac, index) => ({
      key: String(index),
      name: prac.name,
      role: prac.role,
      test: (a) => a.prac === index,
      avatar: <PracAvatar index={index}>{prac.short}</PracAvatar>,
    }));
  }
  return ROOMS.map((room) => ({
    key: room,
    name: room,
    role: ROOM_ROLES[room],
    test: (a) => a.room === room,
    avatar: (
      <Avatar>
        {room === 'Video' ? (
          <IconVideo size={15} stroke={1.8} />
        ) : (
          <IconDoor size={15} stroke={1.8} />
        )}
      </Avatar>
    ),
  }));
}

export interface DraggedPatient {
  patient: string;
  dur: number;
}

interface DayGridProps {
  list: Appointment[];
  clashes: Clashes;
  view: ViewId;
  query: string;
  isToday: boolean;
  closed: boolean;
  selectedId: string | null;
  highlightId: string | null;
  dragging: DraggedPatient | null;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  onHover: (id: string | null) => void;
  onSelect: (appointment: Appointment) => void;
  onDrop: (column: string, start: number) => void;
}

function slotFromEvent(event: React.DragEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  return DAY_START + Math.max(0, Math.round((event.clientY - rect.top) / SLOT_PX)) * 15;
}

export function DayGrid({
  list,
  clashes,
  view,
  query,
  isToday,
  closed,
  selectedId,
  highlightId,
  dragging,
  scrollRef,
  onHover,
  onSelect,
  onDrop,
}: DayGridProps) {
  const [ghost, setGhost] = useState<{ column: string; start: number } | null>(null);
  const columns = getColumns(view);
  const q = query.trim().toLowerCase();

  return (
    <ScrollArea
      className={classes.wrap}
      classNames={{ content: classes.content }}
      viewportRef={scrollRef}
    >
      <div className={classes.grid} style={{ '--cols': columns.length } as React.CSSProperties}>
        <div className={classes.head}>
          <div />
          {columns.map((column) => {
            const minutes = list
              .filter(column.test)
              .filter((a) => a.status !== 'cancelled')
              .reduce((sum, a) => sum + a.dur, 0);
            return (
              <div key={column.key} className={classes.colHead}>
                {column.avatar}
                <span className={classes.who}>
                  <b>{column.name}</b>
                  <span>{column.role}</span>
                  <Progress
                    className={classes.util}
                    value={Math.min(100, (minutes / 690) * 100)}
                    size={4}
                    radius={2}
                    aria-label={`${Math.round((minutes / 690) * 100)}% booked`}
                  />
                </span>
              </div>
            );
          })}
        </div>

        <div className={classes.body}>
          <div className={classes.gutter} style={{ height: HEIGHT }}>
            {HOURS.map((minutes) => (
              <span key={minutes} style={{ top: slotY(minutes) }}>
                {hm(minutes)}
              </span>
            ))}
          </div>

          {columns.map((column) => (
            <div
              key={column.key}
              className={classes.col}
              style={{ height: HEIGHT }}
              data-drop={(dragging && ghost?.column === column.key) || undefined}
              onDragOver={(event) => {
                if (!dragging) {
                  return;
                }
                event.preventDefault();
                const start = slotFromEvent(event);
                if (ghost?.column !== column.key || ghost.start !== start) {
                  setGhost({ column: column.key, start });
                }
              }}
              onDragLeave={(event) => {
                const next = event.relatedTarget as Node | null;
                if (!next || !event.currentTarget.contains(next)) {
                  setGhost(null);
                }
              }}
              onDrop={(event) => {
                if (!dragging) {
                  return;
                }
                event.preventDefault();
                setGhost(null);
                onDrop(column.key, slotFromEvent(event));
              }}
            >
              {list.filter(column.test).map((a) => {
                const Icon = STATUS_ICONS[a.status];
                const compact = a.dur <= 30;
                const conflict = clashes.ids.has(a.id);
                const other = view === 'prac' ? a.room : PRACS[a.prac].name;
                return (
                  <button
                    key={a.id}
                    type="button"
                    className={classes.appt}
                    data-status={a.status}
                    data-compact={compact || undefined}
                    data-conflict={conflict || undefined}
                    data-dim={(q && !a.patient.toLowerCase().includes(q)) || undefined}
                    data-selected={a.id === selectedId || undefined}
                    data-hl={a.id === highlightId || undefined}
                    style={{ top: slotY(a.start) + 1, height: (a.dur / 15) * SLOT_PX - 3 }}
                    aria-label={`${hm(a.start)}, ${a.patient}, ${a.type}, ${STATUS[a.status].label}${
                      conflict ? ', room double-booked' : ''
                    }`}
                    onMouseEnter={() => onHover(a.id)}
                    onMouseLeave={() => onHover(null)}
                    onClick={() => onSelect(a)}
                  >
                    <span className={classes.time}>
                      {compact ? hm(a.start) : `${hm(a.start)} to ${hm(a.start + a.dur)}`}
                    </span>
                    <span className={classes.patient}>{a.patient}</span>
                    {!compact && (
                      <span className={classes.kind}>
                        {a.type}, {other}
                      </span>
                    )}
                    <span className={classes.status}>
                      <Icon size={13} stroke={2.2} />
                      {!compact && <span>{STATUS[a.status].label}</span>}
                    </span>
                    {conflict && (
                      <span className={classes.clash} title="Room double-booked">
                        <IconAlertTriangle size={13} stroke={2.4} />
                      </span>
                    )}
                  </button>
                );
              })}
              {dragging && ghost?.column === column.key && (
                <div
                  className={classes.ghost}
                  style={{
                    top: slotY(ghost.start),
                    height: (dragging.dur / 15) * SLOT_PX - 3,
                  }}
                >
                  {hm(ghost.start)} {dragging.patient}
                </div>
              )}
            </div>
          ))}

          {isToday && (
            <>
              <div className={classes.nowLine} style={{ top: slotY(NOW_MIN) }} />
              <span className={classes.nowTag} style={{ top: slotY(NOW_MIN) }}>
                {hm(NOW_MIN)}
              </span>
            </>
          )}

          {closed && (
            <div className={classes.closed}>
              <b>Closed on Sundays</b>
              Pick another day in the calendar or the week strip.
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
