export type TimePickerFormat = '12h' | '24h';

export interface TimePickerAmPmLabels {
  am: string;
  pm: string;
}

// time: value, format: '24h', amPmLabels: { am: 'AM', pm: 'PM' }

export interface TimePickerPasteSplitInput {
  time: string;
  format: TimePickerFormat;
  amPmLabels: TimePickerAmPmLabels;
}

export interface TimePickerPasteSplitReturnType {
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  amPm: string | null;
}

export type TimePickerPasteSplit = (
  input: TimePickerPasteSplitInput
) => TimePickerPasteSplitReturnType;
