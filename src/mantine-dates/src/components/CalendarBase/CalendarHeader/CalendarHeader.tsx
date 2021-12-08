import React from 'react';
import { ActionIcon, UnstyledButton } from '@mantine/core';
import { ArrowIcon } from './ArrowIcon';
import useStyles from './CalendarHeader.styles';

interface CalendarHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  hasPrevious: boolean;
  hasNext: boolean;
  month: Date;
  onNext?(): void;
  onPrevious?(): void;
  onNextOrder?(): void;
  label?: string;
}

export function CalendarHeader({
  hasNext,
  hasPrevious,
  month,
  onNext,
  onPrevious,
  onNextOrder,
  className,
  label,
  ...others
}: CalendarHeaderProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.calendarHeader, className)} {...others}>
      <ActionIcon
        className={classes.calendarHeaderControl}
        disabled={!hasPrevious}
        onClick={onPrevious}
        size={40}
      >
        <ArrowIcon direction="left" width={12} height={12} />
      </ActionIcon>

      <UnstyledButton className={classes.calendarHeaderSelect} onClick={onNextOrder}>
        {label}
      </UnstyledButton>

      <ActionIcon
        className={classes.calendarHeaderControl}
        disabled={!hasNext}
        onClick={onNext}
        size={40}
      >
        <ArrowIcon direction="right" width={12} height={12} />
      </ActionIcon>
    </div>
  );
}
