import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { DatePickerType, DateStringValue, PickerBaseProps } from '../../types';
import { getQuarterStart } from '../../utils';
import { useUncontrolledDates } from '../use-uncontrolled-dates/use-uncontrolled-dates';
import { isInRange } from './is-in-range/is-in-range';

interface UseDatesRangeInput<
  Type extends DatePickerType = 'default',
> extends PickerBaseProps<Type> {
  level: 'year' | 'month' | 'day' | 'quarter';
  type: Type;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
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
  const [_value, setValue] = useUncontrolledDates({
    type,
    value,
    defaultValue,
    onChange,
  });

  const [pickedDate, setPickedDate] = useState<DateStringValue | null>(
    type === 'range' ? (_value[0] && !_value[1] ? _value[0] : null) : null
  );
  const [hoveredDate, setHoveredDate] = useState<DateStringValue | null>(null);

  const isSameLevel = (a: DateStringValue | Date, b: DateStringValue | Date) =>
    level === 'quarter' ? getQuarterStart(a) === getQuarterStart(b) : dayjs(a).isSame(b, level);

  const onDateChange = (date: DateStringValue) => {
    if (type === 'range') {
      if (pickedDate && !_value[1]) {
        if (isSameLevel(date, pickedDate) && !allowSingleDateInRange) {
          setPickedDate(null);
          setHoveredDate(null);
          setValue([null, null]);
          return;
        }

        const result: [DateStringValue, DateStringValue] = [date, pickedDate];
        result.sort((a, b) => (dayjs(a).isAfter(dayjs(b)) ? 1 : -1));
        setValue(result);
        setHoveredDate(null);
        setPickedDate(null);
        return;
      }

      if (_value[0] && !_value[1] && isSameLevel(date, _value[0]) && !allowSingleDateInRange) {
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
      if (_value.some((selected: Date) => isSameLevel(selected, date))) {
        setValue(_value.filter((selected: Date) => !isSameLevel(selected, date)));
      } else {
        setValue([..._value, date]);
      }

      return;
    }

    if (_value && allowDeselect && isSameLevel(date, _value)) {
      setValue(null);
    } else {
      setValue(date);
    }
  };

  const isDateInRange = (date: DateStringValue) => {
    if (pickedDate && hoveredDate) {
      return isInRange(date, [hoveredDate, pickedDate]);
    }

    if (_value[0] && _value[1]) {
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

  const isFirstInRange = (date: DateStringValue) => {
    if (!_value[0]) {
      return false;
    }

    if (isSameLevel(date, _value[0])) {
      return !(hoveredDate && dayjs(hoveredDate).isBefore(_value[0]));
    }

    return false;
  };

  const isLastInRange = (date: DateStringValue) => {
    if (_value[1]) {
      return isSameLevel(date, _value[1]);
    }

    if (!_value[0] || !hoveredDate) {
      return false;
    }

    return dayjs(hoveredDate).isBefore(_value[0]) && isSameLevel(date, _value[0]);
  };

  const getControlProps = (date: DateStringValue) => {
    if (type === 'range') {
      return {
        selected: _value.some(
          (selection: DateStringValue) => selection && isSameLevel(selection, date)
        ),
        inRange: isDateInRange(date),
        firstInRange: isFirstInRange(date),
        lastInRange: isLastInRange(date),
        'data-autofocus': (!!_value[0] && isSameLevel(_value[0], date)) || undefined,
      };
    }

    if (type === 'multiple') {
      return {
        selected: _value.some(
          (selection: DateStringValue) => selection && isSameLevel(selection, date)
        ),
        'data-autofocus': (!!_value[0] && isSameLevel(_value[0], date)) || undefined,
      };
    }

    const selected = isSameLevel(_value, date);
    return { selected, 'data-autofocus': selected || undefined };
  };

  const onHoveredDateChange = type === 'range' && pickedDate ? setHoveredDate : () => {};

  useEffect(() => {
    if (type !== 'range') {
      return;
    }

    if (_value[0] && !_value[1]) {
      setPickedDate(_value[0]);
    } else {
      const isNeitherSelected = _value[0] == null && _value[1] == null;
      const isBothSelected = _value[0] != null && _value[1] != null;
      if (isNeitherSelected || isBothSelected) {
        setPickedDate(null);
        setHoveredDate(null);
      }
    }
  }, [_value]);

  return {
    onDateChange,
    onRootMouseLeave,
    onHoveredDateChange,
    getControlProps,
    _value,
    setValue,
  };
}
