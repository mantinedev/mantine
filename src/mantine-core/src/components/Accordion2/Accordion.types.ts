export type AccordionValue<Multiple extends boolean> = Multiple extends true
  ? string[]
  : string | null;
