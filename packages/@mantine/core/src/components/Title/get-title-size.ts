import { rem } from '../../core';
import type { TitleSize, TitleOrder } from './Title';

const headings: unknown[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export interface GetTitleSizeResult {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export function getTitleSize(order: TitleOrder, size: TitleSize | undefined): GetTitleSizeResult {
  const titleSize = size !== undefined ? size : `h${order}`;

  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`,
    };
  }

  return {
    fontSize: rem(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`,
  };
}
