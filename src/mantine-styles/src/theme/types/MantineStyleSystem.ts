import { MantineColor } from './MantineColor';
import type { MantineNumberSize, MantineSize } from './MantineSize';

type SystemProp<Value> = Value | Partial<Record<MantineSize | (string & {}), Value>>;

type SpacingValue = MantineNumberSize | (string & {});

export interface MantineStyleSystemProps {
  m?: SystemProp<SpacingValue>;
  my?: SystemProp<SpacingValue>;
  mx?: SystemProp<SpacingValue>;
  mt?: SystemProp<SpacingValue>;
  mb?: SystemProp<SpacingValue>;
  ml?: SystemProp<SpacingValue>;
  mr?: SystemProp<SpacingValue>;

  p?: SystemProp<SpacingValue>;
  py?: SystemProp<SpacingValue>;
  px?: SystemProp<SpacingValue>;
  pt?: SystemProp<SpacingValue>;
  pb?: SystemProp<SpacingValue>;
  pl?: SystemProp<SpacingValue>;
  pr?: SystemProp<SpacingValue>;

  bg?: SystemProp<MantineColor>;
  c?: SystemProp<MantineColor>;
}

export type MantineStyleSystemSize = keyof MantineStyleSystemProps;
