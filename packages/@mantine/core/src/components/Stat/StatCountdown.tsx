import { useCountdown, useMounted } from '@mantine/hooks';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '../../core';
import { formatCountdown, hasFractionToken } from './format-countdown';
import { StatBase, StatFactory, StatProps } from './StatBase';
import { StatIcon } from './StatIcon';
import { StatLabel } from './StatLabel';
import { StatValue } from './StatValue';

export interface StatCountdownProps
  extends
    BoxProps,
    StylesApiProps<StatFactory>,
    ElementProps<'div', 'prefix' | 'color'>,
    Pick<StatProps, 'label' | 'prefix' | 'suffix' | 'color' | 'icon' | 'size'> {
  /** Target time to count down to, a `Date` or a timestamp in milliseconds. Keep it stable between renders (`useState` or `useMemo`), a new target restarts the countdown @category state */
  value?: number | Date;

  /** dayjs-style format for the remaining time (`D`, `H`, `m`, `s`, `S`). Larger units roll into the leading token, `S` is tenths, `SS` hundredths and `SSS` milliseconds. Literals can be escaped with square brackets @default 'HH:mm:ss' @category appearance */
  format?: string;

  /** Called once when the target time is reached @category state */
  onFinish?: () => void;

  /** Called on every tick with the remaining time in milliseconds @category state */
  onTick?: (remainingMs: number) => void;
}

export type StatCountdownFactory = Factory<{
  props: StatCountdownProps;
  ref: HTMLDivElement;
}>;

const defaultProps = {
  format: 'HH:mm:ss',
} satisfies Partial<StatCountdownProps>;

function getInitialRemaining(value: number | Date | undefined) {
  if (value === undefined) {
    return 0;
  }

  const remaining = new Date(value).getTime() - Date.now();
  return Number.isNaN(remaining) ? 0 : Math.max(0, remaining);
}

export const StatCountdown = factory<StatCountdownFactory>((_props) => {
  const props = useProps(['Stat', 'StatCountdown'], defaultProps, _props);
  const { label, value, format, prefix, suffix, color, icon, onFinish, onTick, ...others } = props;

  const interval = hasFractionToken(format!) ? Math.ceil(1000 / 30) : 1000;
  const mounted = useMounted();
  const countdown = useCountdown({
    targetDate: value,
    interval,
    onTick,
    onComplete: onFinish,
  });

  const remaining = mounted ? countdown.count : getInitialRemaining(value);

  return (
    <StatBase {...others}>
      {icon != null && <StatIcon>{icon}</StatIcon>}
      {label != null && <StatLabel>{label}</StatLabel>}
      <StatValue prefix={prefix} suffix={suffix} c={color} aria-live="off">
        <span key={mounted ? 'live' : 'ssr'} suppressHydrationWarning={!mounted}>
          {formatCountdown(remaining, format!)}
        </span>
      </StatValue>
    </StatBase>
  );
});

StatCountdown.displayName = '@mantine/core/StatCountdown';

export namespace StatCountdown {
  export type Props = StatCountdownProps;
  export type Factory = StatCountdownFactory;
}
