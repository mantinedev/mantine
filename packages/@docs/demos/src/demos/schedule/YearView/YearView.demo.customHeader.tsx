import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ScheduleHeader, YearView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ScheduleHeader, YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          withMonths={false}
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() =>
            setDate(
              dayjs().format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <YearView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`;

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD') as DateStringValue
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          withMonths={false}
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(dayjs(date).year(year).startOf('year').format('YYYY-MM-DD') as DateStringValue)
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date).add(1, 'year').startOf('year').format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() => setDate(dayjs().format('YYYY-MM-DD') as DateStringValue)}
        />
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <YearView date={date} onDateChange={setDate} events={regularEvents} withHeader={false} />
    </div>
  );
}

export const customHeader: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
