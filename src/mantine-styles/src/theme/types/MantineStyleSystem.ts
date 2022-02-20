import type { MantineNumberSize } from './MantineSize';

type MantineStyleSystemValue = MantineNumberSize | (string & {});

export interface MantineStyleSystemProps {
  m?: MantineStyleSystemValue;
  my?: MantineStyleSystemValue;
  mx?: MantineStyleSystemValue;
  mt?: MantineStyleSystemValue;
  mb?: MantineStyleSystemValue;
  ml?: MantineStyleSystemValue;
  mr?: MantineStyleSystemValue;

  p?: MantineStyleSystemValue;
  py?: MantineStyleSystemValue;
  px?: MantineStyleSystemValue;
  pt?: MantineStyleSystemValue;
  pb?: MantineStyleSystemValue;
  pl?: MantineStyleSystemValue;
  pr?: MantineStyleSystemValue;
}

export type MantineStyleSystemSize = keyof MantineStyleSystemProps;
