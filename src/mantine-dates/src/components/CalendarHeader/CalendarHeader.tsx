import React, { forwardRef } from 'react';
import {
  DefaultProps,
  Selectors,
  Box,
  useComponentDefaultProps,
  UnstyledButton,
  MantineSize,
} from '@mantine/core';
import { Chevron } from './Chevron';
import useStyles from './CalendarHeader.styles';

export type CalendarHeaderStylesNames = Selectors<typeof useStyles>;

export interface CalendarHeaderSettings {
  __preventFocus?: boolean;

  /** Determines whether propagation for Escape key should be stopped */
  __stopPropagation?: boolean;

  /** Change next icon */
  nextIcon?: React.ReactNode;

  /** Change previous icon */
  previousIcon?: React.ReactNode;

  /** aria-label for next button */
  nextLabel?: string;

  /** aria-label for previous button */
  previousLabel?: string;

  /** Called when next button is clicked */
  onNext?(): void;

  /** Called when previous button is clicked */
  onPrevious?(): void;

  /** Called when level button is clicked */
  onLevelClick?(): void;

  /** Determines whether next control should be disabled, defaults to true */
  nextDisabled?: boolean;

  /** Determines whether previous control should be disabled, defaults to true */
  previousDisabled?: boolean;

  /** Determines whether next level button should be enabled, defaults to true */
  hasNextLevel?: boolean;

  /** Determines whether next control should be rendered, defaults to true */
  withNext?: boolean;

  /** Determines whether previous control should be rendered, defaults to true */
  withPrevious?: boolean;

  /** Component size */
  size?: MantineSize;
}

export interface CalendarHeaderProps
  extends DefaultProps<CalendarHeaderStylesNames>,
    CalendarHeaderSettings,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  __staticSelector?: string;

  /** Label displayed between next and previous buttons */
  label: React.ReactNode;

  /** aria-label for level control */
  levelControlAriaLabel?: string;
}

const defaultProps: Partial<CalendarHeaderProps> = {
  nextDisabled: false,
  previousDisabled: false,
  hasNextLevel: true,
  withNext: true,
  withPrevious: true,
  size: 'sm',
};

export const CalendarHeader = forwardRef<HTMLDivElement, CalendarHeaderProps>((props, ref) => {
  const {
    className,
    nextIcon,
    previousIcon,
    nextLabel,
    previousLabel,
    onNext,
    onPrevious,
    onLevelClick,
    label,
    classNames,
    styles,
    unstyled,
    nextDisabled,
    previousDisabled,
    hasNextLevel,
    levelControlAriaLabel,
    withNext,
    withPrevious,
    __staticSelector,
    __preventFocus,
    __stopPropagation,
    size,
    variant,
    ...others
  } = useComponentDefaultProps('CalendarHeader', defaultProps, props);

  const { classes, cx } = useStyles(null, {
    name: ['CalendarHeader', __staticSelector],
    classNames,
    styles,
    unstyled,
    size,
    variant,
  });

  const preventFocus = __preventFocus
    ? (event: React.MouseEvent<HTMLElement>) => event.preventDefault()
    : undefined;

  return (
    <Box className={cx(classes.calendarHeader, className)} ref={ref} {...others}>
      {withPrevious && (
        <UnstyledButton
          className={classes.calendarHeaderControl}
          data-previous
          aria-label={previousLabel}
          onClick={onPrevious}
          unstyled={unstyled}
          onMouseDown={preventFocus}
          disabled={previousDisabled}
          data-disabled={previousDisabled || undefined}
          tabIndex={__preventFocus ? -1 : 0}
          data-mantine-stop-propagation={__stopPropagation || undefined}
        >
          {previousIcon || (
            <Chevron
              className={classes.calendarHeaderControlIcon}
              direction="previous"
              data-previous
            />
          )}
        </UnstyledButton>
      )}

      <UnstyledButton
        component={hasNextLevel ? 'button' : 'div'}
        className={classes.calendarHeaderLevel}
        onClick={hasNextLevel ? onLevelClick : undefined}
        unstyled={unstyled}
        onMouseDown={hasNextLevel ? preventFocus : undefined}
        disabled={!hasNextLevel}
        data-static={!hasNextLevel || undefined}
        aria-label={levelControlAriaLabel}
        tabIndex={__preventFocus || !hasNextLevel ? -1 : 0}
        data-mantine-stop-propagation={__stopPropagation || undefined}
      >
        {label}
      </UnstyledButton>

      {withNext && (
        <UnstyledButton
          className={classes.calendarHeaderControl}
          data-next
          aria-label={nextLabel}
          onClick={onNext}
          unstyled={unstyled}
          onMouseDown={preventFocus}
          disabled={nextDisabled}
          data-disabled={nextDisabled || undefined}
          tabIndex={__preventFocus ? -1 : 0}
          data-mantine-stop-propagation={__stopPropagation || undefined}
        >
          {nextIcon || (
            <Chevron className={classes.calendarHeaderControlIcon} direction="next" data-next />
          )}
        </UnstyledButton>
      )}
    </Box>
  );
});

CalendarHeader.displayName = '@mantine/dates/CalendarHeader';
