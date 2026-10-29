import '@mantine/dates/styles.css';
import '@mantine/schedule/styles.css';

import dayjs from 'dayjs';
import { useMemo, useRef, useState } from 'react';
import { IconAlertTriangle } from '@tabler/icons-react';
import { Box, Button, Code, Stack, Surface, Text, UnstyledButton, useModal } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  ResourcesMonthView,
  ResourcesMonthViewProps,
  ResourcesWeekView,
  ScheduleEventData,
  ScheduleEventPlacementRejectedData,
  ScheduleHeader,
  ScheduleResourceData,
  ScheduleResourceGroup,
} from '@mantine/schedule';
import {
  createInitialShifts,
  createVacations,
  DATE_TIME_FORMAT,
  EMPLOYEES,
  GENERIC_SHIFT_HOURS,
  getEmployee,
  getTemplateRange,
  getWeekStart,
  Shift,
  SHIFT_TEMPLATES,
  ShiftTemplate,
  TEAMS,
} from './data';
import {
  getMovedShiftRange,
  getResizedShiftRange,
  getShiftTitle,
  isShiftEvent,
  RotaEvent,
  toShiftEvents,
  toVacationEvent,
} from './events';
import { formatShiftRange, getPlannedHours, getShiftViolation, isShiftInWeek } from './rules';
import { ShiftForm } from './ShiftForm/ShiftForm';
import classes from './ShiftRota.module.css';

type RotaView = 'week' | 'month';

/** What is dragged from the panel: the generic shift (week view) or a template (month view) */
type PanelItem = { kind: 'generic' } | { kind: 'template'; templateId: ShiftTemplate['id'] };

type ResourceId = string | number | undefined;

export const PANEL_ITEM_TYPE = 'application/x-shift-rota-item';

const resources: ScheduleResourceData[] = EMPLOYEES.map((employee) => ({
  id: employee.id,
  label: employee.name,
}));

const groups: ScheduleResourceGroup[] = TEAMS.map((team) => ({
  label: team.label,
  resourceIds: EMPLOYEES.filter((employee) => employee.team === team.id).map(
    (employee) => employee.id
  ),
}));

function formatWeek(weekStart: dayjs.Dayjs) {
  const weekEnd = weekStart.add(6, 'day');
  return weekStart.month() === weekEnd.month()
    ? `${weekStart.format('MMM D')} – ${weekEnd.format('D, YYYY')}`
    : `${weekStart.format('MMM D')} – ${weekEnd.format('MMM D, YYYY')}`;
}

function getPanelItemShift(item: PanelItem, dropDateTime: string) {
  if (item.kind === 'template') {
    const template = SHIFT_TEMPLATES.find((entry) => entry.id === item.templateId)!;
    return { ...getTemplateRange(template, dropDateTime), title: template.label };
  }

  const start = dayjs(dropDateTime);
  return {
    start: start.format(DATE_TIME_FORMAT),
    end: start.add(GENERIC_SHIFT_HOURS, 'hour').format(DATE_TIME_FORMAT),
    title: 'Shift',
  };
}

function readPanelItem(dataTransfer: DataTransfer): PanelItem | null {
  try {
    return JSON.parse(dataTransfer.getData(PANEL_ITEM_TYPE)) as PanelItem;
  } catch {
    return null;
  }
}

interface ShiftRotaProps {
  /** Date the rota opens at and generates its sample data around, today by default */
  initialDate?: string;
}

export function ShiftRota({ initialDate }: ShiftRotaProps) {
  const today = useMemo(() => dayjs(initialDate), [initialDate]);
  const [date, setDate] = useState(today.format('YYYY-MM-DD'));
  const [view, setView] = useState<RotaView>('week');
  const [shifts, setShifts] = useState<Shift[]>(() => createInitialShifts(today));
  const [vacations] = useState(() => createVacations(today));
  const [published, setPublished] = useState<{ week: string; json: string } | null>(null);
  const draggedItem = useRef<PanelItem | null>(null);
  const modal = useModal({ closeOnClickOutside: false });

  const weekStart = getWeekStart(date);
  const weekLabel = formatWeek(weekStart);

  const events = useMemo<ScheduleEventData[]>(
    () => [
      ...shifts.flatMap((shift) => toShiftEvents(shift, view === 'week')),
      ...vacations.map(toVacationEvent),
    ],
    [shifts, vacations, view]
  );

  const violationOf = (
    shiftId: string | undefined,
    employeeId: ResourceId,
    range: { start: string; end: string }
  ) =>
    getShiftViolation({ id: shiftId, employeeId: String(employeeId), ...range }, shifts, vacations);

  const notifyRejected = (reason: string) =>
    notifications.show({ color: 'red', title: 'Shift not placed', message: reason });

  const updateShift = (
    shiftId: string,
    range: { start: string; end: string; note?: string },
    employeeId?: ResourceId
  ) =>
    setShifts((current) =>
      current.map((shift) =>
        shift.id === shiftId
          ? {
              ...shift,
              ...range,
              title: getShiftTitle(range.start, range.end),
              employeeId: employeeId === undefined ? shift.employeeId : String(employeeId),
            }
          : shift
      )
    );

  /* Moving and resizing shifts already on the rota */

  const getDropViolation = (event: RotaEvent, start: string, resourceId: ResourceId) =>
    violationOf(
      event.payload!.shiftId,
      resourceId ?? event.resourceId,
      getMovedShiftRange(event, start)
    );

  const getResizeViolation = (event: RotaEvent, start: string, end: string) => {
    const range = getResizedShiftRange(event, start, end);
    return range
      ? violationOf(event.payload!.shiftId, event.resourceId, range)
      : 'Change a night shift from its start or its end';
  };

  /* Dropping items from the panel */

  const getPanelDropViolation = (
    start: string,
    resourceId: ResourceId,
    item = draggedItem.current
  ) =>
    item && resourceId !== undefined
      ? violationOf(undefined, resourceId, getPanelItemShift(item, start))
      : null;

  const handleExternalDrop = ({
    dataTransfer,
    dropDateTime,
    resourceId,
  }: {
    dataTransfer: DataTransfer;
    dropDateTime: string;
    resourceId?: string | number;
  }) => {
    const item = readPanelItem(dataTransfer) ?? draggedItem.current;
    draggedItem.current = null;
    if (!item || resourceId === undefined) {
      return;
    }

    const reason = getPanelDropViolation(dropDateTime, resourceId, item);
    if (reason) {
      notifyRejected(reason);
      return;
    }

    setShifts((current) => [
      ...current,
      {
        id: `shift-${Date.now()}`,
        employeeId: String(resourceId),
        note: '',
        ...getPanelItemShift(item, dropDateTime),
      },
    ]);
  };

  const handlePlacementRejected = (data: ScheduleEventPlacementRejectedData) => {
    if (data.action === 'external-drop') {
      notifyRejected(
        getPanelDropViolation(data.start, data.resourceId) ?? 'A shift cannot be placed there'
      );
      draggedItem.current = null;
      return;
    }

    if (!isShiftEvent(data.event)) {
      return;
    }

    const reason =
      data.action === 'drop'
        ? getDropViolation(data.event, data.start, data.resourceId)
        : getResizeViolation(data.event, data.start, data.end);
    notifyRejected(reason ?? 'The shift cannot be placed there');
  };

  /* Editing a shift */

  const deleteShift = (shiftId: string) => {
    setShifts((current) => current.filter((shift) => shift.id !== shiftId));
    modal.close();
  };

  const openShift = (event: ScheduleEventData) => {
    if (!isShiftEvent(event)) {
      return;
    }

    const shift = shifts.find((item) => item.id === event.payload!.shiftId);
    const employee = getEmployee(shift?.employeeId);
    if (!shift || !employee) {
      return;
    }

    const team = TEAMS.find((item) => item.id === employee.team)!;

    modal.open({
      title: 'Edit shift',
      children: (
        <ShiftForm
          shift={shift}
          employeeLabel={`${employee.name} · ${team.label}`}
          getViolation={(range) => violationOf(shift.id, shift.employeeId, range)}
          onDelete={() => deleteShift(shift.id)}
          onSave={(values) => {
            updateShift(shift.id, values);
            modal.close();
          }}
        />
      ),
    });
  };

  /* Publishing */

  const publish = () => {
    const weekShifts = shifts
      .filter((shift) => isShiftInWeek(shift, weekStart))
      .sort((a, b) => a.start.localeCompare(b.start));

    const rota = EMPLOYEES.map((employee) => ({
      employee: employee.name,
      team: employee.team,
      shifts: weekShifts
        .filter((shift) => shift.employeeId === employee.id)
        .map((shift) => ({
          title: shift.title,
          start: shift.start,
          end: shift.end,
          ...(shift.note ? { note: shift.note } : null),
        })),
    })).filter((entry) => entry.shifts.length > 0);

    setPublished({ week: weekLabel, json: JSON.stringify(rota, null, 2) });
    notifications.show({
      title: 'Rota published',
      message: `${weekShifts.length} shifts · ${weekLabel}`,
    });
  };

  const navigate = (direction: 1 | -1) =>
    setDate((current) => dayjs(current).add(direction, view).format('YYYY-MM-DD'));

  /* Rendering */

  const renderResourceLabel = (resource: ScheduleResourceData) => {
    const employee = getEmployee(resource.id)!;
    const planned = getPlannedHours(employee.id, shifts, weekStart);
    const overContract = planned > employee.contractHours;

    return (
      <div className={classes.resourceLabel}>
        <Text size="sm" fw={500} truncate>
          {employee.name}
        </Text>
        <div className={classes.hours} data-over={overContract || undefined}>
          <Text size="xs" span>
            {planned} / {employee.contractHours} h
          </Text>
          {overContract && (
            <IconAlertTriangle size={14} role="img" aria-label="Over contract hours" />
          )}
        </div>
      </div>
    );
  };

  const renderEventBody = (event: ScheduleEventData) =>
    isShiftEvent(event) ? (
      <div className={classes.eventBody}>
        <Text size="xs" fw={600} truncate>
          {event.title}
        </Text>
        <Text size="xs" truncate>
          {formatShiftRange({ start: event.payload!.shiftStart, end: event.payload!.shiftEnd })}
        </Text>
      </div>
    ) : (
      event.title
    );

  const renderEvent: ResourcesMonthViewProps['renderEvent'] = (event, props) => {
    if (!isShiftEvent(event)) {
      return <UnstyledButton {...props} />;
    }
    const { shiftStart, shiftEnd } = event.payload!;
    const employee = getEmployee(event.resourceId);
    const label = `${employee?.name}, ${event.title}, ${dayjs(shiftStart).format('ddd MMM D')} ${formatShiftRange({ start: shiftStart, end: shiftEnd })}`;
    return <UnstyledButton {...props} aria-label={label} />;
  };

  const startDragging = (item: PanelItem) => (dragEvent: React.DragEvent<HTMLDivElement>) => {
    draggedItem.current = item;
    dragEvent.dataTransfer.setData(PANEL_ITEM_TYPE, JSON.stringify(item));
    dragEvent.dataTransfer.effectAllowed = 'copy';
  };

  const panelItems =
    view === 'week'
      ? [
          {
            key: 'generic',
            item: { kind: 'generic' } as PanelItem,
            title: 'Shift',
            hint: `${GENERIC_SHIFT_HOURS} h from the drop time`,
            color: 'gray',
          },
        ]
      : SHIFT_TEMPLATES.map((template) => ({
          key: template.id,
          item: { kind: 'template', templateId: template.id } as PanelItem,
          title: template.label,
          hint: formatShiftRange(getTemplateRange(template, date)),
          color: template.color,
        }));

  const sharedProps = {
    date,
    resources,
    groups,
    events,
    withHeader: false,
    groupLabelWidth: 72,
    className: classes.view,
    renderResourceLabel,
    renderEventBody,
    renderEvent,
    withEventsDragAndDrop: true,
    canDragEvent: isShiftEvent,
    canDropEvent: ({
      event,
      start,
      resourceId,
    }: {
      event: ScheduleEventData;
      start: string;
      resourceId?: string | number;
    }) => isShiftEvent(event) && getDropViolation(event, start, resourceId) === null,
    canDropExternalEvent: ({
      dataTransfer,
      start,
      resourceId,
    }: {
      dataTransfer: DataTransfer;
      start: string;
      resourceId?: string | number;
    }) =>
      dataTransfer.types.includes(PANEL_ITEM_TYPE) &&
      getPanelDropViolation(start, resourceId) === null,
    onExternalEventDrop: handleExternalDrop,
    onEventDrop: ({
      event,
      newStart,
      resourceId,
    }: {
      event: ScheduleEventData;
      newStart: string;
      resourceId?: string | number;
    }) =>
      isShiftEvent(event) &&
      updateShift(event.payload!.shiftId, getMovedShiftRange(event, newStart), resourceId),
    onEventPlacementRejected: handlePlacementRejected,
    onEventClick: openShift,
  };

  return (
    <Stack>
      <div className={classes.layout}>
        <Surface
          withBorder
          component="aside"
          className={classes.panel}
          aria-label="Drag onto the rota"
        >
          <Text size="sm" fw={500}>
            Drag onto the rota
          </Text>
          {panelItems.map(({ key, item, title, hint, color }) => (
            <Surface
              key={key}
              withBorder
              className={classes.panelItem}
              draggable
              onDragStart={startDragging(item)}
              onDragEnd={() => {
                draggedItem.current = null;
              }}
              aria-label={`${title}, ${hint}`}
            >
              <div className={classes.panelItemTitle}>
                <Box className={classes.dot} bg={color} />
                <Text size="sm" fw={500}>
                  {title}
                </Text>
              </div>
              <Text size="xs">{hint}</Text>
            </Surface>
          ))}
          <Text size="xs" mt="xs">
            Hours on each row: week of {weekLabel}
          </Text>
        </Surface>

        <div className={classes.rota}>
          <ScheduleHeader>
            <ScheduleHeader.Previous onClick={() => navigate(-1)} aria-label={`Previous ${view}`} />
            <ScheduleHeader.Control interactive={false} miw={170}>
              {view === 'week' ? weekLabel : dayjs(date).format('MMMM YYYY')}
            </ScheduleHeader.Control>
            <ScheduleHeader.Next onClick={() => navigate(1)} aria-label={`Next ${view}`} />
            <ScheduleHeader.Today onClick={() => setDate(today.format('YYYY-MM-DD'))} />
            <ScheduleHeader.ViewSelect
              views={['week', 'month']}
              value={view}
              onChange={(next) => setView(next as RotaView)}
            />
            <Button ms="auto" onClick={publish}>
              Publish rota
            </Button>
          </ScheduleHeader>

          {view === 'week' ? (
            <ResourcesWeekView
              {...sharedProps}
              firstDayOfWeek={1}
              intervalMinutes={60}
              eventDragInterval={30}
              eventResizeInterval={30}
              slotWidth={48}
              startScrollDateTime={today.hour(6).startOf('hour').format(DATE_TIME_FORMAT)}
              withEventResize
              canResizeEvent={isShiftEvent}
              canResizeEventTo={({ event, start, end }) =>
                isShiftEvent(event) && getResizeViolation(event, start, end) === null
              }
              onEventResize={({ event, newStart, newEnd }) => {
                const range = isShiftEvent(event) && getResizedShiftRange(event, newStart, newEnd);
                if (range) {
                  updateShift(event.payload!.shiftId, range);
                }
              }}
              styles={{ resourcesWeekViewBackgroundEvent: { borderRadius: 0 } }}
            />
          ) : (
            <ResourcesMonthView {...sharedProps} startScrollDate={today.format('YYYY-MM-DD')} />
          )}
        </div>
      </div>

      {published && (
        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Published rota · {published.week}
          </Text>
          <Code block aria-label="Published rota">
            {published.json}
          </Code>
        </Stack>
      )}
    </Stack>
  );
}
