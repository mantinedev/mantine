import React from 'react';
import { ActionIcon, UnstyledButton } from '@mantine/core';
import { ArrowIcon } from './ArrowIcon';
import { formatMonthLabel } from './format-month-label/format-month-label';
import useStyles from './MonthHeader.styles';

interface MonthHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Should previous month control be displayed */
  hasPrevious: boolean;

  /** Should next month control be displayed */
  hasNext: boolean;

  /** Month to which header belongs to */
  month: Date;

  /** Called when next month is requested */
  onNextMonth?(): void;

  /** Called when previous month is requested */
  onPreviousMonth?(): void;

  /** dayjs format for label */
  labelFormat?: string;

  /** dayjs locale to format month label */
  locale?: string;
}

export function MonthHeader({
  hasNext,
  hasPrevious,
  month,
  onNextMonth,
  onPreviousMonth,
  labelFormat,
  locale,
  className,
  ...others
}: MonthHeaderProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.monthHeader, className)} {...others}>
      <ActionIcon
        className={classes.monthHeaderControl}
        disabled={!hasPrevious}
        onClick={onPreviousMonth}
        size={40}
      >
        <ArrowIcon direction="left" width={12} height={12} />
      </ActionIcon>

      <UnstyledButton className={classes.monthHeaderSelect}>
        {formatMonthLabel({ month, locale, format: labelFormat })}
      </UnstyledButton>

      <ActionIcon
        className={classes.monthHeaderControl}
        disabled={!hasNext}
        onClick={onNextMonth}
        size={40}
      >
        <ArrowIcon direction="right" width={12} height={12} />
      </ActionIcon>
    </div>
  );
}
