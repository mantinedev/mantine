import { useRef, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  GetStylesApi,
  MantineColor,
  MantineSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { StatProvider } from './Stat.context';
import { StatIcon } from './StatIcon';
import { StatLabel } from './StatLabel';
import { StatValue } from './StatValue';
import { formatCountdown } from './format-countdown';
import { getStatSizeVars } from './get-stat-vars';
import type { StatCssVariables, StatFactory, StatStylesNames } from './Stat';
import classes from './Stat.module.css';

export interface StatCountdownProps
  extends BoxProps, StylesApiProps<StatCountdownFactory>, ElementProps<'div', 'prefix' | 'color'> {
  /** Caption displayed above the value */
  label?: React.ReactNode;

  /** Target time to count down to, a `Date` or a timestamp in milliseconds */
  value?: number | Date;

  /** dayjs-style format for the remaining time. Literals can be escaped with square brackets @default 'HH:mm:ss' */
  format?: string;

  /** Content rendered before the value */
  prefix?: React.ReactNode;

  /** Content rendered after the value */
  suffix?: React.ReactNode;

  /** Key of `theme.colors` or any valid CSS color to set the value color */
  color?: MantineColor;

  /** Leading icon or illustration displayed next to the value */
  icon?: React.ReactNode;

  /** Controls label, value and icon sizes @default 'md' */
  size?: MantineSize;

  /** Called once when the target time is reached */
  onFinish?: () => void;

  /** Called on every tick with the remaining time in milliseconds */
  onTick?: (remainingMs: number) => void;
}

export type StatCountdownFactory = Factory<{
  props: StatCountdownProps;
  ref: HTMLDivElement;
  stylesNames: StatStylesNames;
  vars: StatCssVariables;
}>;

const defaultProps = {
  size: 'md',
  format: 'HH:mm:ss',
} satisfies Partial<StatCountdownProps>;

const varsResolver = createVarsResolver<StatCountdownFactory>((_, { size }) => ({
  root: getStatSizeVars(size),
}));

function getTargetTimestamp(value: number | Date | undefined): number {
  if (value instanceof Date) {
    return value.getTime();
  }

  return value ?? 0;
}

export const StatCountdown = factory<StatCountdownFactory>((_props) => {
  const props = useProps('StatCountdown', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    label,
    value,
    format,
    prefix,
    suffix,
    color,
    icon,
    onFinish,
    onTick,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<StatCountdownFactory>({
    name: 'Stat',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const target = getTargetTimestamp(value);
  const targetRef = useRef(target);
  targetRef.current = target;

  const onTickRef = useRef(onTick);
  onTickRef.current = onTick;

  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const finishedRef = useRef(false);

  const [remaining, setRemaining] = useState(0);

  useIsomorphicEffect(() => {
    finishedRef.current = false;
    const period = /S/.test(format!) ? Math.ceil(1000 / 30) : 1000;
    let timeoutId = -1;

    const tick = () => {
      if (finishedRef.current) {
        return;
      }

      const next = Math.max(0, targetRef.current - Date.now());
      setRemaining(next);
      onTickRef.current?.(next);

      if (next <= 0) {
        finishedRef.current = true;
        onFinishRef.current?.();
        return;
      }

      timeoutId = window.setTimeout(tick, Math.min(period, next));
    };

    tick();

    return () => window.clearTimeout(timeoutId);
  }, [target, format]);

  const live = /S/.test(format!) ? 'off' : 'polite';

  return (
    <StatProvider value={{ getStyles: getStyles as GetStylesApi<StatFactory>, unstyled }}>
      <Box {...getStyles('root')} mod={mod} {...others}>
        {icon != null && <StatIcon>{icon}</StatIcon>}
        <div {...getStyles('body')}>
          {label != null && <StatLabel>{label}</StatLabel>}
          <StatValue prefix={prefix} suffix={suffix} c={color} aria-live={live} aria-atomic>
            {formatCountdown(remaining, format!)}
          </StatValue>
        </div>
      </Box>
    </StatProvider>
  );
});

StatCountdown.classes = classes;
StatCountdown.varsResolver = varsResolver;
StatCountdown.displayName = '@mantine/core/StatCountdown';

export namespace StatCountdown {
  export type Props = StatCountdownProps;
  export type Factory = StatCountdownFactory;
}
