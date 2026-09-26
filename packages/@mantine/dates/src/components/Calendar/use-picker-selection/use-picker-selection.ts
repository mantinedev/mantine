import dayjs from 'dayjs';
import { useDatesState } from '../../../hooks';
import { CalendarLevel, DatePickerType, DateStringValue, PickerBaseProps } from '../../../types';
import { isSameMonth } from '../../Month/is-same-month/is-same-month';
import { CalendarController } from '../use-calendar/use-calendar';

type PresetValue = DateStringValue | null | (DateStringValue | null)[];

interface UsePickerSelectionInput<Type extends DatePickerType> extends PickerBaseProps<Type> {
  type: Type;
  level: 'year' | 'month' | 'day' | 'quarter';
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

interface HandlePresetSelectInput {
  controller: CalendarController;
  targetLevel: CalendarLevel;
  normalize?: (value: PresetValue) => PresetValue;
}

export function usePickerSelection<Type extends DatePickerType>(
  input: UsePickerSelectionInput<Type>
) {
  const state = useDatesState(input);
  const { _value, setValue } = state;

  const getSelectedMonthProps = (date: DateStringValue) => ({
    selected: typeof _value === 'string' ? isSameMonth(date, _value) : false,
  });

  const getSelectedYearProps = (date: DateStringValue) => ({
    selected: typeof _value === 'string' ? dayjs(date).isSame(_value, 'year') : false,
  });

  const createPresetSelectHandler =
    ({ controller, targetLevel, normalize }: HandlePresetSelectInput) =>
    (value: PresetValue) => {
      const normalized = normalize ? normalize(value) : value;
      const first = Array.isArray(normalized) ? normalized[0] : normalized;

      if (first !== undefined) {
        first && controller.setDate(first);
        controller.setLevel(targetLevel);
        setValue(normalized);
      }
    };

  return { ...state, getSelectedMonthProps, getSelectedYearProps, createPresetSelectHandler };
}
