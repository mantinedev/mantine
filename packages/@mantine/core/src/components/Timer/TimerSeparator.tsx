import {
  Box,
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../core';
import { useTimerContext } from './Timer.context';
import classes from './Timer.module.css';

export type TimerSeparatorStylesNames = 'separator';

export interface TimerSeparatorProps
  extends BoxProps, CompoundStylesApiProps<TimerSeparatorFactory>, ElementProps<'span'> {
  /** Separator content, `:` by default */
  children?: React.ReactNode;
}

export type TimerSeparatorFactory = Factory<{
  props: TimerSeparatorProps;
  ref: HTMLSpanElement;
  stylesNames: TimerSeparatorStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TimerSeparatorProps> = {};

export const TimerSeparator = factory<TimerSeparatorFactory>((_props) => {
  const props = useProps('TimerSeparator', defaultProps, _props);
  const { classNames, className, style, styles, vars, children, ...others } = props;
  const ctx = useTimerContext();

  return (
    <Box
      component="span"
      {...others}
      aria-hidden
      {...ctx.getStyles('separator', { className, style, classNames, styles })}
    >
      {children ?? ':'}
    </Box>
  );
});

TimerSeparator.classes = classes;
TimerSeparator.displayName = '@mantine/core/TimerSeparator';
