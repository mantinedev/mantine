import React from 'react';
import { Group, ActionIcon, DefaultProps, MantineSize, useMantineTheme } from '@mantine/core';
import { ArrowIcon } from '../ArrowIcon';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 18,
  xl: 20,
};

interface CalendarHeaderProps extends DefaultProps {
  classNames: Record<string, any>;
  styles: Record<string, any>;
  size: MantineSize;
  nextMonthLabel: string;
  previousMonthLabel: string;
  previousMonthDisabled: boolean;
  nextMonthDisabled: boolean;
  onPreviousMonth(): void;
  onNextMonth(): void;
  locale: string;
  withSelect: boolean;
  yearsRange: { from: number; to: number };
  month: Date;
  setMonth(date: Date): void;
  labelFormat: string;
  __staticSelector: string;
  monthLabel?: string;
  yearLabel?: string;
  preventFocus?: boolean;
  previousMonthHidden?: boolean;
  nextMonthHidden?: boolean;
}

export function CalendarHeader({
  size,
  nextMonthLabel,
  previousMonthLabel,
  previousMonthDisabled,
  nextMonthDisabled,
  onPreviousMonth,
  onNextMonth,
  classNames,
  styles,
  locale,
  withSelect,
  yearsRange,
  month,
  setMonth,
  labelFormat,
  __staticSelector,
  monthLabel,
  yearLabel,
  preventFocus = false,
  previousMonthHidden = false,
  nextMonthHidden = false,
}: CalendarHeaderProps) {
  const theme = useMantineTheme();
  const iconSize = theme.fn.size({ size, sizes: iconSizes });
  const iconButtonSize = theme.fn.size({ size, sizes: DAY_SIZES });

  return (
    <Group position="apart" noWrap style={{ marginBottom: theme.spacing.xs / 2 }}>
      <ActionIcon<'button'>
        aria-label={previousMonthLabel}
        onClick={onPreviousMonth}
        onMouseDown={(event) => preventFocus && event.preventDefault()}
        tabIndex={preventFocus ? -1 : 0}
        disabled={previousMonthDisabled}
        size={iconButtonSize}
        data-mantine-stop-propagation
        style={{ visibility: previousMonthHidden ? 'hidden' : 'visible' }}
      >
        <ArrowIcon direction="left" width={iconSize} height={iconSize} />
      </ActionIcon>

      <CalendarLabel
        locale={locale}
        classNames={classNames}
        styles={styles}
        withSelect={withSelect}
        yearsRange={yearsRange}
        value={month}
        onChange={setMonth}
        labelFormat={labelFormat}
        size={size}
        __staticSelector={__staticSelector}
        monthLabel={monthLabel}
        yearLabel={yearLabel}
        preventFocus={preventFocus}
      />

      <ActionIcon<'button'>
        aria-label={nextMonthLabel}
        onClick={onNextMonth}
        tabIndex={preventFocus ? -1 : 0}
        onMouseDown={(event) => preventFocus && event.preventDefault()}
        disabled={nextMonthDisabled}
        size={iconButtonSize}
        data-mantine-stop-propagation
        style={{ visibility: nextMonthHidden ? 'hidden' : 'visible' }}
      >
        <ArrowIcon direction="right" width={iconSize} height={iconSize} />
      </ActionIcon>
    </Group>
  );
}

CalendarHeader.displayName = '@mantine/dates/CalendarHeader';
