import dayjs from 'dayjs';
import { Box } from '@mantine/core';
import { DateStringValue } from '../../../types';
import { useCalendarContext } from '../Calendar.context';
import { CalendarLevel, CalendarLevelSharedProps } from '../CalendarLevel/CalendarLevel';
import classes from './CalendarLevelsGroup.module.css';

export type CalendarLevelsGroupStylesNames = 'levelsGroup';

export interface CalendarLevelsGroupProps extends CalendarLevelSharedProps {
  date: DateStringValue;
  numberOfColumns: number;
}

function getColumnPeriod(
  level: CalendarLevelSharedProps['level'],
  date: DateStringValue,
  index: number
): DateStringValue {
  if (level === 'month') {
    return dayjs(date).add(index, 'months').format('YYYY-MM-DD');
  }

  if (level === 'year') {
    return dayjs(date).add(index, 'years').format('YYYY-MM-DD');
  }

  return dayjs(date)
    .add(index * 10, 'years')
    .format('YYYY-MM-DD');
}

export function CalendarLevelsGroup({
  date,
  numberOfColumns,
  ...levelProps
}: CalendarLevelsGroupProps) {
  const ctx = useCalendarContext();

  const columns = Array(numberOfColumns)
    .fill(0)
    .map((_, index) => (
      <CalendarLevel
        key={index}
        {...levelProps}
        levelIndex={index}
        period={getColumnPeriod(levelProps.level, date, index)}
        withPrevious={index === 0}
        withNext={index === numberOfColumns - 1}
      />
    ));

  return (
    <Box
      {...ctx.getStyles('levelsGroup')}
      size={ctx.stylesApiProps.size}
      data-full-width={levelProps.fullWidth || undefined}
    >
      {columns}
    </Box>
  );
}

CalendarLevelsGroup.classes = classes;
