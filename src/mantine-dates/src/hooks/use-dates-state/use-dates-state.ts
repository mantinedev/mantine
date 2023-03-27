import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePickerType, PickerBaseProps } from '../../types';
import { useUncontrolledDates } from '../use-uncontrolled-dates/use-uncontrolled-dates';

function isInRange(date: Date, range: [Date, Date]) {
  const _range = [...range].sort((a, b) => a.getTime() - b.getTime());
  return (
    dayjs(date).subtract(1, 'day').isBefore(_range[1]) &&
    dayjs(date).add(1, 'day').isAfter(_range[0])
  );
}

interface UseDatesRangeInput<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type> {
  level: 'year' | 'month' | 'day';
  type: Type;
  onMouseLeave?(event: React.MouseEvent<HTMLDivElement>): void;
}

export function useDatesState<Type extends DatePickerType = 'default'>({
  type,
  level,
  value,
  defaultValue,
  onChange,
  allowSingleDateInRange,
  allowDeselect,
  onMouseLeave,
}: UseDatesRangeInput<Type>) {
  const [_value, setValue] = useUncontrolledDates({ type, value, defaultValue, onChange });

  const [pickedDate, setPickedDate] = useState<Date>(
    type === 'range' ? (_value[0] && !_value[1] ? _value[0] : null) : null
  );
  const [hoveredDate, setHoveredDate] = useState<Date>(null);

  const onDateChange = (date: Date) => {
    if (type === 'range') {
      if (pickedDate instanceof Date && !_value[1]) {
        if (dayjs(date).isSame(pickedDate, level) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }

        const result: [Date, Date] = [date, pickedDate];
        result.sort((a, b) => a.getTime() - b.getTime());
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }

      if (
        _value[0] &&
        !_value[1] &&
        dayjs(date).isSame(_value[0], level) &&
        !allowSingleDateInRange
      ) {
        setPickedDate(null);
        setHoveredDate(null);
        setValue([null, null]);
        return;
      }

      setValue([date, null]);
      setHoveredDate(null);
      setPickedDate(date);
      return;
    }

    if (type === 'multiple') {
      if (_value.some((selected: Date) => dayjs(selected).isSame(date, level))) {
        setValue(_value.filter((selected: Date) => !dayjs(selected).isSame(date, level)));
      } else {
        setValue([..._value, date]);
      }

      return;
    }

    if (_value && allowDeselect && dayjs(date).isSame(_value, level)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };

  const isDateInRange = (date: Date) => {
    if (pickedDate instanceof Date && hoveredDate instanceof Date) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }

    if (_value[0] instanceof Date && _value[1] instanceof Date) {
      return isInRange(date, _value);
    }

    return false;
  };

  const onRootMouseLeave =
    type === 'range'
      ? (event: React.MouseEvent<HTMLDivElement>) => {
          onMouseLeave?.(event);
          setHoveredDate(null);
        }
      : onMouseLeave;

  const isFirstInRange = (date: Date) => {
    if (!(_value[0] instanceof Date)) {
      return false;
    }

    if (dayjs(date).isSame(_value[0], level)) {
      return !(hoveredDate && dayjs(hoveredDate).isBefore(_value[0]));
    }

    return false;
  };

  const isLastInRange = (date: Date) => {
    if (_value[1] instanceof Date) {
      return dayjs(date).isSame(_value[1], level);
    }

    if (!(_value[0] instanceof Date) || !hoveredDate) {
      return false;
    }

    return dayjs(hoveredDate).isBefore(_value[0]) && dayjs(date).isSame(_value[0], level);
  };

  const getControlProps = (date: Date) => {
    if (type === 'range') {
      return {
        selected: _value.some(
          (selection: Date) => selection && dayjs(selection).isSame(date, level)
        ),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        'data-autofocus': (!!_value[0] && dayjs(_value[0]).isSame(date, level)) || undefined,
      };
    }

    if (type === 'multiple') {
      return {
        selected: _value.some(
          (selection: Date) => selection && dayjs(selection).isSame(date, level)
        ),
        'data-autofocus': (!!_value[0] && dayjs(_value[0]).isSame(date, level)) || undefined,
      };
    }

    const selected = dayjs(_value).isSame(date, level);
    return { selected, 'data-autofocus': selected || undefined };
  };

  const onHoveredDateChange = type === 'range' && pickedDate ? setHoveredDate : () => {};

  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue,
  };
}
