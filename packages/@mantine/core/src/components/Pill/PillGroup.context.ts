import { createOptionalContext, MantineSize } from '../../core';

export interface PillGroupContextValue {
  size: MantineSize | (string & {}) | undefined;
  disabled: boolean | undefined;
}

export const [PillGroupProvider, usePillGroupContext] =
  createOptionalContext<PillGroupContextValue>();
