import type { StyleProperty } from '../get-responsive-value/get-responsive-value';
import type { SystemValueType } from '../value-getters/value-getters';

export interface SystemProp {
  type: SystemValueType;
  property: StyleProperty;
}

export const SYSTEM_PROPS: Record<string, SystemProp> = {
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
};
