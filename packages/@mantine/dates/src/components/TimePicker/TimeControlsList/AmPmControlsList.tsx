import { useTimePickerContext } from '../TimePicker.context';
import { TimeControl } from './TimeControl';

interface AmPmControlsListProps {
  value: string | null;
  onSelect: (value: string) => void;
  labels: { am: string; pm: string };
}

export function AmPmControlsList({ labels, value, onSelect }: AmPmControlsListProps) {
  const ctx = useTimePickerContext();
  const controls = [labels.am, labels.pm].map((control) => (
    <TimeControl key={control} value={control} active={value === control} onSelect={onSelect} />
  ));

  return <div {...ctx.getStyles('controlsList')}>{controls}</div>;
}

AmPmControlsList.displayName = '@mantine/dates/AmPmControlsList';
