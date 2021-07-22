import React from 'react';
import {
  Group,
  ActionIcon,
  getSizeValue,
  DefaultProps,
  MantineSize,
  useMantineTheme,
} from '@mantine/core';
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
}

export function CalendarHeader({
  size,
  themeOverride,
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
}: CalendarHeaderProps) {
  const theme = useMantineTheme(themeOverride);
  const iconSize = getSizeValue({ size, sizes: iconSizes });
  const iconButtonSize = getSizeValue({ size, sizes: DAY_SIZES });

  return (
    <Group
      position="apart"
      noWrap
      themeOverride={themeOverride}
      style={{ marginBottom: theme.spacing.xs / 2 }}
    >
      <ActionIcon
        aria-label={previousMonthLabel}
        onClick={onPreviousMonth}
        disabled={previousMonthDisabled}
        themeOverride={themeOverride}
        size={iconButtonSize}
      >
        <ArrowIcon direction="left" width={iconSize} height={iconSize} />
      </ActionIcon>

      <CalendarLabel
        locale={locale}
        classNames={classNames as any}
        styles={styles as any}
        withSelect={withSelect}
        yearsRange={yearsRange}
        value={month}
        onChange={setMonth}
        labelFormat={labelFormat}
        themeOverride={themeOverride}
        size={size}
        __staticSelector={__staticSelector}
        monthLabel={monthLabel}
        yearLabel={yearLabel}
      />

      <ActionIcon
        aria-label={nextMonthLabel}
        onClick={onNextMonth}
        disabled={nextMonthDisabled}
        themeOverride={themeOverride}
        size={iconButtonSize}
      >
        <ArrowIcon direction="right" width={iconSize} height={iconSize} />
      </ActionIcon>
    </Group>
  );
}

CalendarHeader.displayName = '@mantine/dates/CalendarHeader';
