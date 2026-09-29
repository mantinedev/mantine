import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { formatTimerValue } from './format-timer-value';
import type { TimerValue } from './get-timer-value';
import { parseDuration } from './parse-duration';
import { TimerProvider } from './Timer.context';
import { TimerControl, TimerControlStylesNames } from './TimerControl';
import { TimerSegment, TimerSegmentStylesNames } from './TimerSegment';
import { TimerSeparator, TimerSeparatorStylesNames } from './TimerSeparator';
import { useTimer, UseTimerReturnValue } from './use-timer';
import classes from './Timer.module.css';

export type TimerStylesNames =
  | 'root'
  | 'value'
  | TimerSegmentStylesNames
  | TimerSeparatorStylesNames
  | TimerControlStylesNames;

export interface TimerProps
  extends BoxProps, StylesApiProps<TimerFactory>, ElementProps<'div', 'onChange'> {
  /** Controller returned by the `useTimer` hook. When provided, the timer is controlled externally and the option props below are ignored */
  controller?: UseTimerReturnValue;

  /** Initial elapsed (stopwatch) or remaining (countdown) time in milliseconds, `0` by default.
   * Changing `startMs` or `countdown` stops the timer and resets it to the new `startMs` */
  startMs?: number;

  /** Boundary the timer counts up to (stopwatch) or down to (countdown).
   * Defaults to `0` in countdown mode, open-ended in stopwatch mode. If `startMs` is already at or past the boundary,
   * the timer completes immediately when started */
  targetMs?: number;

  /** If set, the timer counts down instead of up, `false` by default */
  countdown?: boolean;

  /** Tick interval in milliseconds, `1000` by default, values below `1` are clamped to `1` */
  interval?: number;

  /** If set, the timer starts automatically on mount, `false` by default */
  autoStart?: boolean;

  /** Called on every tick with the current timer value */
  onTick?: (value: TimerValue) => void;

  /** Called once when the timer reaches its target boundary */
  onComplete?: () => void;

  /** Format of the default readout, `'HH:mm:ss'` by default.
   * Supported tokens: `DD`/`D` – days, `HH`/`H` – hours, `mm`/`m` – minutes, `ss`/`s` – seconds (two-letter tokens are zero-padded),
   * `SSS` – milliseconds padded to 3 digits, `SS` – hundredths of a second, `S` – milliseconds unpadded.
   * Literal text is not escaped: the letters `D`, `H`, `m`, `s` and `S` are always replaced */
  format?: string;

  /** Custom layout built with `Timer.Segment`, `Timer.Separator` and `Timer.Control` compound components */
  children?: React.ReactNode;
}

export type TimerFactory = Factory<{
  props: TimerProps;
  ref: HTMLDivElement;
  stylesNames: TimerStylesNames;
  staticComponents: {
    Segment: typeof TimerSegment;
    Separator: typeof TimerSeparator;
    Control: typeof TimerControl;
    parse: typeof parseDuration;
  };
}>;

const defaultProps = {
  format: 'HH:mm:ss',
  interval: 1000,
} satisfies Partial<TimerProps>;

export const Timer = factory<TimerFactory>((_props) => {
  const props = useProps('Timer', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    controller,
    startMs,
    targetMs,
    countdown,
    interval,
    autoStart,
    onTick,
    onComplete,
    format,
    children,
    attributes,
    ref,
    ...others
  } = props;

  const selfController = useTimer(
    controller
      ? undefined
      : { startMs, targetMs, countdown, interval, autoStart, onTick, onComplete }
  );

  const timer = controller ?? selfController;

  const getStyles = useStyles<TimerFactory>({
    name: 'Timer',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  return (
    <TimerProvider value={{ getStyles, controller: timer }}>
      <Box ref={ref} role="timer" aria-live="off" {...getStyles('root')} {...others}>
        {children ?? (
          <span {...getStyles('value')}>{formatTimerValue(timer.value.totalMs, format!)}</span>
        )}
      </Box>
    </TimerProvider>
  );
});

Timer.classes = classes;
Timer.displayName = '@mantine/core/Timer';
Timer.Segment = TimerSegment;
Timer.Separator = TimerSeparator;
Timer.Control = TimerControl;
Timer.parse = parseDuration;
