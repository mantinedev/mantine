import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useController,
  useProps,
  useStyles,
} from '../../core';
import { Button } from '../Button';
import { formatTimerValue } from './format-timer-value';
import { TimerValue } from './get-timer-value';
import { parseDuration } from './parse-duration';
import { TimerProvider } from './Timer.context';
import { TimerControl, TimerControlStylesNames } from './TimerControl';
import { TimerSegment, TimerSegmentStylesNames } from './TimerSegment';
import { TimerSeparator, TimerSeparatorStylesNames } from './TimerSeparator';
import { useTimer, TimerController } from './use-timer';
import classes from './Timer.module.css';

export type TimerStylesNames =
  | 'root'
  | 'value'
  | 'controls'
  | TimerSegmentStylesNames
  | TimerSeparatorStylesNames
  | TimerControlStylesNames;

export interface TimerProps
  extends BoxProps, StylesApiProps<TimerFactory>, ElementProps<'div', 'onChange'> {
  /** Controller returned by the `useTimer` hook. When provided, the timer is controlled externally and the option props below are ignored @category state */
  controller?: TimerController;

  /** Initial elapsed (stopwatch) or remaining (countdown) time in milliseconds, `0` by default @category state */
  startMs?: number;

  /** Boundary the timer counts up to (stopwatch) or down to (countdown) @category state */
  targetMs?: number;

  /** If set, the timer counts down instead of up, `false` by default @category state */
  countdown?: boolean;

  /** Tick interval in milliseconds, `1000` by default @category state */
  interval?: number;

  /** If set, the timer starts automatically on mount, `false` by default @category state */
  autoStart?: boolean;

  /** Called on every tick with the current timer value @category state */
  onTick?: (value: TimerValue) => void;

  /** Called once when the timer reaches its target boundary @category state */
  onComplete?: () => void;

  /** Format of the default readout, `'HH:mm:ss'` by default. Supported tokens: `DD`, `HH`, `mm`, `ss`, `SSS` @category appearance */
  format?: string;

  /** If set, default start/pause/reset controls are rendered under the readout, `false` by default @category appearance */
  withControls?: boolean;

  /** Custom layout built with `Timer.Segment`, `Timer.Separator` and `Timer.Control` compound components @category appearance */
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
    withControls,
    children,
    attributes,
    ref,
    ...others
  } = props;

  const timer = useController(
    useTimer,
    controller,
    controller ? {} : { startMs, targetMs, countdown, interval, autoStart, onTick, onComplete }
  );

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

  const ariaLive = timer.interval < 1000 ? 'off' : 'polite';

  return (
    <TimerProvider value={{ getStyles, controller: timer }}>
      <Box
        ref={ref}
        role="timer"
        aria-live={ariaLive}
        aria-atomic
        {...getStyles('root')}
        {...others}
      >
        {children ?? (
          <>
            <span {...getStyles('value')}>{formatTimerValue(timer.value.totalMs, format!)}</span>

            {withControls && (
              <div {...getStyles('controls')}>
                <Button
                  variant="default"
                  size="compact-sm"
                  onClick={timer.running ? timer.pause : timer.start}
                >
                  {timer.running ? 'Pause' : timer.paused ? 'Resume' : 'Start'}
                </Button>
                <Button variant="default" size="compact-sm" onClick={timer.reset}>
                  Reset
                </Button>
              </div>
            )}
          </>
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
