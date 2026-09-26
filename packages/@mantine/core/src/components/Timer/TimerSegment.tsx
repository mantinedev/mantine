import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { TimerValue } from './get-timer-value';
import { useTimerContext } from './Timer.context';
import classes from './Timer.module.css';

export type TimerSegmentType = keyof Omit<TimerValue, 'totalMs'>;

export type TimerSegmentStylesNames = 'segment';

export interface TimerSegmentProps
  extends BoxProps, CompoundStylesApiProps<TimerSegmentFactory>, ElementProps<'span'> {
  /** Time segment to display */
  type: TimerSegmentType;

  /** Number of digits the value is padded with leading zeros to, `2` by default (`3` for milliseconds) */
  pad?: number;
}

export type TimerSegmentFactory = Factory<{
  props: TimerSegmentProps;
  ref: HTMLSpanElement;
  stylesNames: TimerSegmentStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TimerSegmentProps> = {};

export const TimerSegment = factory<TimerSegmentFactory>((_props) => {
  const props = useProps('TimerSegment', defaultProps, _props);
  const { classNames, className, style, styles, vars, type, pad, ...others } = props;
  const ctx = useTimerContext();

  const length = pad ?? (type === 'milliseconds' ? 3 : 2);
  const value = String(ctx.controller.value[type]).padStart(length, '0');

  return (
    <Box
      component="span"
      {...ctx.getStyles('segment', { className, style, classNames, styles })}
      data-segment={type}
      {...others}
    >
      {value}
    </Box>
  );
});

TimerSegment.classes = classes;
TimerSegment.displayName = '@mantine/core/TimerSegment';
