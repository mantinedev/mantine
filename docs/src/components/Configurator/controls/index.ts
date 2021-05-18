import { BooleanControl } from './BooleanControl';
import { SizeControl } from './SizeControl';
import { StringControl } from './StringControl';
import { ColorControl } from './ColorControl';
import { SelectControl } from './SelectControl';
import { NumberControl } from './NumberControl';

const controls = {
  boolean: BooleanControl,
  color: ColorControl,
  select: SelectControl,
  string: StringControl,
  size: SizeControl,
  number: NumberControl,
} as const;

export type ControlType = keyof typeof controls;

export interface ControlProps {
  type: ControlType;
  name: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

export default controls;
