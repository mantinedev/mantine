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
  opacity: { type: 'identity', property: 'opacity' },

  ff: { type: 'identity', property: 'fontFamily' },
  fz: { type: 'fontSize', property: 'fontSize' },
  fw: { type: 'identity', property: 'fontWeight' },
  lts: { type: 'size', property: 'letterSpacing' },
  ta: { type: 'identity', property: 'textAlign' },
  lh: { type: 'identity', property: 'lineHeight' },
  fs: { type: 'identity', property: 'fontStyle' },
  tt: { type: 'identity', property: 'textTransform' },
  td: { type: 'identity', property: 'textDecoration' },

  w: { type: 'spacing', property: 'width' },
  miw: { type: 'spacing', property: 'minWidth' },
  maw: { type: 'spacing', property: 'maxWidth' },
  h: { type: 'spacing', property: 'height' },
  mih: { type: 'spacing', property: 'minHeight' },
  mah: { type: 'spacing', property: 'maxHeight' },

  bgsz: { type: 'size', property: 'backgroundSize' },
  bgp: { type: 'identity', property: 'backgroundPosition' },
  bgr: { type: 'identity', property: 'backgroundRepeat' },
  bga: { type: 'identity', property: 'backgroundAttachment' },

  pos: { type: 'identity', property: 'position' },
  top: { type: 'identity', property: 'top' },
  left: { type: 'size', property: 'left' },
  bottom: { type: 'size', property: 'bottom' },
  right: { type: 'size', property: 'right' },
  inset: { type: 'size', property: 'inset' },

  display: { type: 'identity', property: 'display' },
};
