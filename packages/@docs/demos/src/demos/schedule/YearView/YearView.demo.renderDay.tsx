import dayjs from 'dayjs';
import { ScheduleEventData, YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';

const thisYear = dayjs().format('YYYY');

const eventDays: [date: string, count: number, color: string][] = [
  [`${thisYear}-01-14`, 1, 'blue'],
  [`${thisYear}-02-03`, 3, 'grape'],
  [`${thisYear}-03-21`, 2, 'green'],
  [`${thisYear}-05-09`, 4, 'orange'],
  [`${thisYear}-07-16`, 2, 'cyan'],
  [`${thisYear}-09-02`, 5, 'red'],
  [`${thisYear}-11-27`, 1, 'violet'],
];

const eventData: ScheduleEventData[] = eventDays.flatMap(([date, count, color]) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${date}-${index}`,
    title: `Event ${index + 1}`,
    start: `${date} ${String(9 + index).padStart(2, '0')}:00:00`,
    end: `${date} ${String(10 + index).padStart(2, '0')}:00:00`,
    color,
  }))
);

const code = `
import dayjs from 'dayjs';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <YearView
      date={new Date()}
      events={events}
      renderDay={(date, dayEvents) => (
        <>
          {dayjs(date).date()}

          {dayEvents.length > 0 && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                insetInlineEnd: 0,
                minWidth: 12,
                height: 12,
                borderRadius: 12,
                fontSize: 9,
                lineHeight: '12px',
                fontWeight: 700,
                textAlign: 'center',
                color: 'var(--mantine-color-white)',
                backgroundColor: \`var(--mantine-color-\${dayEvents[0].color}-filled)\`,
              }}
            >
              {dayEvents.length}
            </div>
          )}
        </>
      )}
    />
  );
}
`;

function Demo() {
  return (
    <YearView
      date={new Date()}
      events={eventData}
      renderDay={(date, dayEvents) => (
        <>
          {dayjs(date).date()}

          {dayEvents.length > 0 && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                insetInlineEnd: 0,
                minWidth: 12,
                height: 12,
                borderRadius: 12,
                fontSize: 9,
                lineHeight: '12px',
                fontWeight: 700,
                textAlign: 'center',
                color: 'var(--mantine-color-white)',
                backgroundColor: `var(--mantine-color-${dayEvents[0].color}-filled)`,
              }}
            >
              {dayEvents.length}
            </div>
          )}
        </>
      )}
    />
  );
}

export const renderDay: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    {
      fileName: 'data.ts',
      code: `import { ScheduleEventData } from '@mantine/schedule';\n\nexport const events: ScheduleEventData[] = ${JSON.stringify(eventData, null, 2)};`,
      language: 'tsx',
    },
  ],
};
