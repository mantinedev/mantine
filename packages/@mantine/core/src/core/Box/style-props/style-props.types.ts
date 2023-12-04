import type {
  MantineBreakpoint,
  MantineSpacing,
  MantineFontSize,
  MantineLineHeight,
  MantineColor,
} from '../../MantineProvider';

export type StyleProp<Value> = Value | Partial<Record<MantineBreakpoint | (string & {}), Value>>;

export interface MantineStyleProps {
  m?: StyleProp<MantineSpacing>;
  my?: StyleProp<MantineSpacing>;
  mx?: StyleProp<MantineSpacing>;
  mt?: StyleProp<MantineSpacing>;
  mb?: StyleProp<MantineSpacing>;
  ml?: StyleProp<MantineSpacing>;
  mr?: StyleProp<MantineSpacing>;

  p?: StyleProp<MantineSpacing>;
  py?: StyleProp<MantineSpacing>;
  px?: StyleProp<MantineSpacing>;
  pt?: StyleProp<MantineSpacing>;
  pb?: StyleProp<MantineSpacing>;
  pl?: StyleProp<MantineSpacing>;
  pr?: StyleProp<MantineSpacing>;

  bg?: StyleProp<MantineColor>;
  c?: StyleProp<MantineColor>;
  opacity?: StyleProp<React.CSSProperties['opacity']>;

  ff?: StyleProp<React.CSSProperties['fontFamily']>;
  fz?: StyleProp<MantineFontSize | number | (string & {})>;
  fw?: StyleProp<React.CSSProperties['fontWeight']>;
  lts?: StyleProp<React.CSSProperties['letterSpacing']>;
  ta?: StyleProp<React.CSSProperties['textAlign']>;
  lh?: StyleProp<MantineLineHeight | number | (string & {})>;
  fs?: StyleProp<React.CSSProperties['fontStyle']>;
  tt?: StyleProp<React.CSSProperties['textTransform']>;
  td?: StyleProp<React.CSSProperties['textDecoration']>;

  w?: StyleProp<React.CSSProperties['width']>;
  miw?: StyleProp<React.CSSProperties['minWidth']>;
  maw?: StyleProp<React.CSSProperties['maxWidth']>;
  h?: StyleProp<React.CSSProperties['height']>;
  mih?: StyleProp<React.CSSProperties['minHeight']>;
  mah?: StyleProp<React.CSSProperties['maxHeight']>;

  bgsz?: StyleProp<React.CSSProperties['backgroundSize']>;
  bgp?: StyleProp<React.CSSProperties['backgroundPosition']>;
  bgr?: StyleProp<React.CSSProperties['backgroundRepeat']>;
  bga?: StyleProp<React.CSSProperties['backgroundAttachment']>;

  pos?: StyleProp<React.CSSProperties['position']>;
  top?: StyleProp<React.CSSProperties['top']>;
  left?: StyleProp<React.CSSProperties['left']>;
  bottom?: StyleProp<React.CSSProperties['bottom']>;
  right?: StyleProp<React.CSSProperties['right']>;
  inset?: StyleProp<React.CSSProperties['inset']>;

  display?: StyleProp<React.CSSProperties['display']>;
}
