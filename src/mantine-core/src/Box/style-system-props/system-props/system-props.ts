import type { StyleProperty } from '../get-responsive-value/get-responsive-value';
import type { SystemValueType } from '../value-getters/value-getters';

export interface SystemPropData {
  type: SystemValueType;
  property: StyleProperty;
}

export const SYSTEM_PROPS: Record<string, SystemPropData> = {
  m: { type: 'spacing', property: 'margin' },
  mt: { type: 'spacing', property: 'marginTop' },
  mb: { type: 'spacing', property: 'marginBottom' },
  ml: { type: 'spacing', property: 'marginLeft' },
  mr: { type: 'spacing', property: 'marginRight' },
  mx: { type: 'spacing', property: ['marginRight', 'marginLeft'] },
  my: { type: 'spacing', property: ['marginTop', 'marginBottom'] },

  p: { type: 'spacing', property: 'padding' },
  pt: { type: 'spacing', property: 'paddingTop' },
  pb: { type: 'spacing', property: 'paddingBottom' },
  pl: { type: 'spacing', property: 'paddingLeft' },
  pr: { type: 'spacing', property: 'paddingRight' },
  px: { type: 'spacing', property: ['paddingRight', 'paddingLeft'] },
  py: { type: 'spacing', property: ['paddingTop', 'paddingBottom'] },

  bg: { type: 'color', property: 'background' },
  c: { type: 'color', property: 'color' },
  opacity: { type: 'default', property: 'opacity' },

  ff: { type: 'default', property: 'fontFamily' },
  fz: { type: 'fontSize', property: 'fontSize' },
  fw: { type: 'default', property: 'fontWeight' },
  lts: { type: 'default', property: 'letterSpacing' },
  ta: { type: 'default', property: 'textAlign' },
  lh: { type: 'default', property: 'lineHeight' },
  fs: { type: 'default', property: 'fontStyle' },
  tt: { type: 'default', property: 'textTransform' },
  td: { type: 'default', property: 'textDecoration' },

  w: { type: 'default', property: 'width' },
  miw: { type: 'default', property: 'minWidth' },
  maw: { type: 'default', property: 'maxWidth' },
  h: { type: 'default', property: 'height' },
  mih: { type: 'default', property: 'minHeight' },
  mah: { type: 'default', property: 'maxHeight' },

  bgsz: { type: 'default', property: 'background-size' },
  bgp: { type: 'default', property: 'background-position' },
  bgr: { type: 'default', property: 'background-repeat' },
  bga: { type: 'default', property: 'background-attachment' },

  pos: { type: 'default', property: 'position' },
  top: { type: 'default', property: 'top' },
  left: { type: 'default', property: 'left' },
  bottom: { type: 'default', property: 'bottom' },
  right: { type: 'default', property: 'right' },
  inset: { type: 'default', property: 'inset' },
};
