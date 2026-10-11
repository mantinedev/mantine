import cx from 'clsx';
import { UnstyledButton, useMantineTheme } from '@mantine/core';
import { TimePickerAmPmLabels, TimePickerFormat } from '../TimePicker';
import { TimeValue } from '../TimeValue';
import { useTimeGridContext } from './TimeGrid.context';

interface TimeGridControlProps extends React.ComponentProps<'button'> {
  time: string;
  active: boolean;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
  withSeconds: boolean | undefined;
}

export function TimeGridControl({
  time,
  active,
  className,
  amPmLabels,
  format,
  withSeconds,
  ...others
}: TimeGridControlProps) {
  const ctx = useTimeGridContext();
  const theme = useMantineTheme();

  return (
    <UnstyledButton
      mod={[{ active }]}
      aria-pressed={active}
      {...ctx.getStyles('control', { className: cx(theme.activeClassName, className) })}
      {...others}
    >
      <TimeValue value={time} format={format} amPmLabels={amPmLabels} withSeconds={withSeconds} />
    </UnstyledButton>
  );
}
