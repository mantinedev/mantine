import { useTimePickerContext } from '../TimePicker.context';
import { AmPm, AmPmLabels } from '../utils/convert-hours/convert-hours';
import { TimeControl } from './TimeControl';

interface AmPmControlsListProps {
  value: AmPm | null;
  onSelect: (value: AmPm) => void;
  isDisabled?: (value: AmPm) => boolean;
  labels: AmPmLabels;
}

export function AmPmControlsList({ labels, value, onSelect, isDisabled }: AmPmControlsListProps) {
  const ctx = useTimePickerContext();
  const controls = (['am', 'pm'] as const).map((amPm) => (
    <TimeControl
      key={amPm}
      value={labels[amPm]}
      active={value === amPm}
      disabled={isDisabled?.(amPm)}
      onSelect={() => onSelect(amPm)}
    />
  ));

  return <div {...ctx.getStyles('controlsList')}>{controls}</div>;
}

AmPmControlsList.displayName = '@mantine/dates/AmPmControlsList';
