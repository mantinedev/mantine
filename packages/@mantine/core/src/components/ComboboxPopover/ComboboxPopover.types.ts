import { Primitive } from '../../core';

export type ComboboxPopoverValue<
  Multiple extends boolean,
  Value extends Primitive = string,
> = Multiple extends true ? Value[] : Value | null;
