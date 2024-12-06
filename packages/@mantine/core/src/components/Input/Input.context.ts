import { createOptionalContext, MantineSize } from '../../core';

interface InputContext {
  size: MantineSize | (string & {});
}

export const [InputContext, useInputContext] = createOptionalContext<InputContext>({
  size: 'sm',
});
