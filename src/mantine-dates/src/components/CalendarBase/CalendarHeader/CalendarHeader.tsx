import React from 'react';
import { ActionIcon, UnstyledButton, SelectChevronIcon, MantineSize } from '@mantine/core';
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
  size?: MantineSize;
}

const iconSizes = {
  xs: 12,
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
};

export function CalendarHeader({
  hasNext,
  hasPrevious,
  onNext,
  onPrevious,
  onNextLevel,
  className,
  label,
  nextLevelDisabled,
  size,
  ...others
}: CalendarHeaderProps) {
  const { classes, cx, theme } = useStyles({ size });
  const iconSize = theme.fn.size({ size, sizes: iconSizes });
  return (
    <div className={cx(classes.calendarHeader, className)} {...others}>
      <ActionIcon
        className={classes.calendarHeaderControl}
        disabled={!hasPrevious}
        onClick={onPrevious}
      >
        <ArrowIcon direction="left" width={iconSize} height={iconSize} />
      </ActionIcon>

      <UnstyledButton
        className={classes.calendarHeaderSelect}
        disabled={nextLevelDisabled}
        onClick={onNextLevel}
      >
        <div>{label}</div>
        {!nextLevelDisabled && (
          <SelectChevronIcon
            error={false}
            size={size}
            className={classes.calendarHeaderLabelIcon}
          />
        )}
      </UnstyledButton>

      <ActionIcon className={classes.calendarHeaderControl} disabled={!hasNext} onClick={onNext}>
        <ArrowIcon direction="right" width={iconSize} height={iconSize} />
      </ActionIcon>
    </div>
  );
}
