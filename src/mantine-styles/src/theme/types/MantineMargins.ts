import type { MantineNumberSize } from './MantineSize';

export type MantineMargin = 'm' | 'my' | 'mx' | 'mt' | 'mb' | 'ml' | 'mr';

export interface MantineMargins {
  m?: MantineNumberSize;
  my?: MantineNumberSize;
  mx?: MantineNumberSize;
  mt?: MantineNumberSize;
  mb?: MantineNumberSize;
  ml?: MantineNumberSize;
  mr?: MantineNumberSize;
}
