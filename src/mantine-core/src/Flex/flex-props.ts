import type { SystemPropData } from '../Box';

export const FLEX_SYSTEM_PROPS: Record<string, SystemPropData> = {
  gap: { type: 'spacing', property: 'gap' },
  rowGap: { type: 'spacing', property: 'rowGap' },
  columnGap: { type: 'spacing', property: 'columnGap' },

  align: { type: 'default', property: 'alignItems' },
  justify: { type: 'default', property: 'justifyContent' },
  wrap: { type: 'default', property: 'flexWrap' },
  direction: { type: 'default', property: 'flexDirection' },
};
