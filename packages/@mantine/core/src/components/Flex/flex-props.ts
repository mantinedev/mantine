import { SystemPropData } from '../../core';

export const FLEX_STYLE_PROPS_DATA: Record<string, SystemPropData> = {
  gap: { type: 'spacing', property: 'gap' },
  rowGap: { type: 'spacing', property: 'rowGap' },
  columnGap: { type: 'spacing', property: 'columnGap' },

  align: { type: 'identity', property: 'alignItems' },
  justify: { type: 'identity', property: 'justifyContent' },
  wrap: { type: 'identity', property: 'flexWrap' },
  direction: { type: 'identity', property: 'flexDirection' },
};
