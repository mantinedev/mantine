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

export type TimerControlAction = 'start' | 'pause' | 'resume' | 'reset' | 'restart';

export type TimerControlStylesNames = 'control';

export interface TimerControlProps
  extends BoxProps, CompoundStylesApiProps<TimerControlFactory>, ElementProps<'button'> {
  /** Controller action called when the control is clicked */
  action: TimerControlAction;
}

export type TimerControlFactory = Factory<{
  props: TimerControlProps;
  ref: HTMLButtonElement;
  stylesNames: TimerControlStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TimerControlProps> = {};

export const TimerControl = factory<TimerControlFactory>((_props) => {
  const props = useProps('TimerControl', defaultProps, _props);
  const { classNames, className, style, styles, vars, action, onClick, ...others } = props;
  const ctx = useTimerContext();

  return (
    <Box
      component="button"
      {...others}
      type="button"
      {...ctx.getStyles('control', { className, style, classNames, styles })}
      data-action={action}
      onClick={(event) => {
        ctx.controller[action]();
        onClick?.(event);
      }}
    />
  );
});

TimerControl.classes = classes;
TimerControl.displayName = '@mantine/core/TimerControl';
