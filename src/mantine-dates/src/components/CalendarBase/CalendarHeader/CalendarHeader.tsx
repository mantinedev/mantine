import React from 'react';
import { ActionIcon, UnstyledButton, SelectChevronIcon } from '@mantine/core';
import { ArrowIcon } from './ArrowIcon';
import useStyles from './CalendarHeader.styles';

interface CalendarHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  hasPrevious: boolean;
  hasNext: boolean;
  onNext?(): void;
  onPrevious?(): void;
  onNextLevel?(): void;
  label?: string;
  nextLevelDisabled?: boolean;
}

export function CalendarHeader({
  hasNext,
  hasPrevious,
  onNext,
  onPrevious,
  onNextLevel,
  className,
  label,
  nextLevelDisabled,
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

      <UnstyledButton
        className={classes.calendarHeaderSelect}
        disabled={nextLevelDisabled}
        onClick={onNextLevel}
      >
        <div>{label}</div>
        {!nextLevelDisabled && (
          <SelectChevronIcon error={false} size="sm" className={classes.calendarHeaderLabelIcon} />
        )}
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
