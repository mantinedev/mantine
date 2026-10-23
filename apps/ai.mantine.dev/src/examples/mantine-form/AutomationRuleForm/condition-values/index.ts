import type { ValueShape } from '../types';
import { DateValue } from './DateValue';
import { DaysValue } from './DaysValue';
import { NumberValue } from './NumberValue';
import { OptionsValue } from './OptionsValue';
import { RangeValue } from './RangeValue';
import { TextValue } from './TextValue';
import type { ValueInputProps } from './types';

export const VALUE_INPUTS: Record<
  Exclude<ValueShape, 'none'>,
  (props: ValueInputProps) => React.ReactNode
> = {
  text: TextValue,
  number: NumberValue,
  range: RangeValue,
  date: DateValue,
  days: DaysValue,
  options: OptionsValue,
};
