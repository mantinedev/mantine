import type {
  MantineBreakpoint,
  MantineColor,
  MantineFontSize,
  MantineLineHeight,
  MantineSpacing,
} from '../../MantineProvider';

export type StyleProp<Value> = Value | Partial<Record<MantineBreakpoint | (string & {}), Value>>;

export interface MantineStyleProps {
  /** margin, theme key: theme.spacing */
  m?: StyleProp<MantineSpacing>;
  /** marginBlock, theme key: theme.spacing */
  my?: StyleProp<MantineSpacing>;
  /** marginInline, theme key: theme.spacing */
  mx?: StyleProp<MantineSpacing>;
  /** marginTop, theme key: theme.spacing */
  mt?: StyleProp<MantineSpacing>;
  /** marginBottom, theme key: theme.spacing */
  mb?: StyleProp<MantineSpacing>;
  /** marginInlineStart, theme key: theme.spacing */
  ms?: StyleProp<MantineSpacing>;
  /** marginInlineEnd, theme key: theme.spacing */
  me?: StyleProp<MantineSpacing>;
  /** marginLeft, theme key: theme.spacing */
  ml?: StyleProp<MantineSpacing>;
  /** marginRight, theme key: theme.spacing */
  mr?: StyleProp<MantineSpacing>;
  /** padding, theme key: theme.spacing */

  p?: StyleProp<MantineSpacing>;
  /** paddingBlock, theme key: theme.spacing */
  py?: StyleProp<MantineSpacing>;
  /** paddingInline, theme key: theme.spacing */
  px?: StyleProp<MantineSpacing>;
  /** paddingTop, theme key: theme.spacing */
  pt?: StyleProp<MantineSpacing>;
  /** paddingBottom, theme key: theme.spacing */
  pb?: StyleProp<MantineSpacing>;
  /** paddingInlineStart, theme key: theme.spacing */
  ps?: StyleProp<MantineSpacing>;
  /** paddingInlineEnd, theme key: theme.spacing */
  pe?: StyleProp<MantineSpacing>;
  /** paddingLeft, theme key: theme.spacing */
  pl?: StyleProp<MantineSpacing>;
  /** paddingRight, theme key: theme.spacing */
  pr?: StyleProp<MantineSpacing>;

  /** border */
  bd?: StyleProp<React.CSSProperties['border']>;
  /** background, theme key: theme.colors */
  bg?: StyleProp<MantineColor>;
  /** color */
  c?: StyleProp<MantineColor>;
  opacity?: StyleProp<React.CSSProperties['opacity']>;

  /** fontFamily */
  ff?: StyleProp<'monospace' | 'text' | 'heading' | (string & {})>;
  /** fontSize, theme key: theme.fontSizes */
  fz?: StyleProp<MantineFontSize | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})>;
  /** fontWeight */
  fw?: StyleProp<React.CSSProperties['fontWeight']>;
  /** letterSpacing */
  lts?: StyleProp<React.CSSProperties['letterSpacing']>;
  /** textAlign */
  ta?: StyleProp<React.CSSProperties['textAlign']>;
  /** lineHeight, theme key: lineHeights */
  lh?: StyleProp<MantineLineHeight | `h${1 | 2 | 3 | 4 | 5 | 6}` | number | (string & {})>;
  /** fontStyle */
  fs?: StyleProp<React.CSSProperties['fontStyle']>;
  /** textTransform */
  tt?: StyleProp<React.CSSProperties['textTransform']>;
  /** textDecoration */
  td?: StyleProp<React.CSSProperties['textDecoration']>;

  /** width, theme key: theme.spacing */
  w?: StyleProp<React.CSSProperties['width']>;
  /** minWidth, theme key: theme.spacing*/
  miw?: StyleProp<React.CSSProperties['minWidth']>;
  /** maxWidth, theme key: theme.spacing */
  maw?: StyleProp<React.CSSProperties['maxWidth']>;
  /** height, theme key: theme.spacing */
  h?: StyleProp<React.CSSProperties['height']>;
  /** minHeight, theme key: theme.spacing */
  mih?: StyleProp<React.CSSProperties['minHeight']>;
  /** maxHeight, theme key: theme.spacing */
  mah?: StyleProp<React.CSSProperties['maxHeight']>;

  /** backgroundSize */
  bgsz?: StyleProp<React.CSSProperties['backgroundSize']>;
  /** backgroundPosition */
  bgp?: StyleProp<React.CSSProperties['backgroundPosition']>;
  /** backgroundRepeat */
  bgr?: StyleProp<React.CSSProperties['backgroundRepeat']>;
  /** backgroundAttachment */
  bga?: StyleProp<React.CSSProperties['backgroundAttachment']>;

  /** position */
  pos?: StyleProp<React.CSSProperties['position']>;
  top?: StyleProp<React.CSSProperties['top']>;
  left?: StyleProp<React.CSSProperties['left']>;
  bottom?: StyleProp<React.CSSProperties['bottom']>;
  right?: StyleProp<React.CSSProperties['right']>;
  inset?: StyleProp<React.CSSProperties['inset']>;
  display?: StyleProp<React.CSSProperties['display']>;
  flex?: StyleProp<React.CSSProperties['flex']>;
}
