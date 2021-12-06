import type { MantineNumberSize } from './MantineSize';

export type MantineMargin = 'm' | 'my' | 'mx' | 'mt' | 'mb' | 'ml' | 'mr';
type MarginValue = MantineNumberSize | 'auto';

export interface MantineMargins {
  m?: MarginValue;
  my?: MarginValue;
  mx?: MarginValue;
  mt?: MarginValue;
  mb?: MarginValue;
  ml?: MarginValue;
  mr?: MarginValue;
}
