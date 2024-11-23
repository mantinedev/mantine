import type { StylePropType } from './resolvers';
import type { MantineStyleProps } from './style-props.types';

export interface SystemPropData {
  type: StylePropType;
  property: string | string[];
}

export const STYlE_PROPS_DATA: Record<keyof MantineStyleProps, SystemPropData> = {
  m: { type: 'spacing', property: 'margin' },
  mt: { type: 'spacing', property: 'marginTop' },
  mb: { type: 'spacing', property: 'marginBottom' },
  ml: { type: 'spacing', property: 'marginLeft' },
  mr: { type: 'spacing', property: 'marginRight' },
  ms: { type: 'spacing', property: 'marginInlineStart' },
  me: { type: 'spacing', property: 'marginInlineEnd' },
  mx: { type: 'spacing', property: 'marginInline' },
  my: { type: 'spacing', property: 'marginBlock' },

  p: { type: 'spacing', property: 'padding' },
  pt: { type: 'spacing', property: 'paddingTop' },
  pb: { type: 'spacing', property: 'paddingBottom' },
  pl: { type: 'spacing', property: 'paddingLeft' },
  pr: { type: 'spacing', property: 'paddingRight' },
  ps: { type: 'spacing', property: 'paddingInlineStart' },
  pe: { type: 'spacing', property: 'paddingInlineEnd' },
  px: { type: 'spacing', property: 'paddingInline' },
  py: { type: 'spacing', property: 'paddingBlock' },

  bd: { type: 'border', property: 'border' },
  bg: { type: 'color', property: 'background' },
  c: { type: 'textColor', property: 'color' },
  opacity: { type: 'identity', property: 'opacity' },

  ff: { type: 'fontFamily', property: 'fontFamily' },
  fz: { type: 'fontSize', property: 'fontSize' },
  fw: { type: 'identity', property: 'fontWeight' },
  lts: { type: 'size', property: 'letterSpacing' },
  ta: { type: 'identity', property: 'textAlign' },
  lh: { type: 'lineHeight', property: 'lineHeight' },
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
  top: { type: 'size', property: 'top' },
  left: { type: 'size', property: 'left' },
  bottom: { type: 'size', property: 'bottom' },
  right: { type: 'size', property: 'right' },
  inset: { type: 'size', property: 'inset' },

  display: { type: 'identity', property: 'display' },
  flex: { type: 'identity', property: 'flex' },
};
