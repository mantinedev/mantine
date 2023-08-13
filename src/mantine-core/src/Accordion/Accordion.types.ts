import { MantineNumberSize } from '@mantine/styles';

export type AccordionValue<Multiple extends boolean> = Multiple extends true
  ? string[]
  : string | null;

export type AccordionHeadingOrder = 2 | 3 | 4 | 5 | 6;
export type AccordionChevronPosition = 'left' | 'right';
export type AccordionVariant = 'default' | 'contained' | 'filled' | 'separated';

export interface AccordionStylesParams {
  radius?: MantineNumberSize;
}
