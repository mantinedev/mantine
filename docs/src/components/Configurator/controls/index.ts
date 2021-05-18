import { BooleanControl } from './BooleanControl';
import { SizeControl } from './SizeControl';
import { StringControl } from './StringControl';
import { ColorControl } from './ColorControl';
import { SelectControl } from './SelectControl';

const controls = {
  boolean: BooleanControl,
  color: ColorControl,
  select: SelectControl,
  string: StringControl,
  size: SizeControl,
} as const;

export type ControlType = keyof typeof controls;

export interface ControlProps {
  type: ControlType;
  name: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
}

export default controls;
