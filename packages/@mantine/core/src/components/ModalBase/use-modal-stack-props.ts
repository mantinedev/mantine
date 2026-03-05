import { useEffect } from 'react';
import { getDefaultZIndex } from '../../core';
import { ModalStackContextValue } from './ModalBaseStack';

interface UseModalStackPropsOptions {
  stackCtx: ModalStackContextValue | null;
  opened: boolean;
  stackId: string | undefined;
  zIndex: string | number;
}

export const useModalStackProps = ({
  stackCtx,
  stackId,
  opened,
  zIndex,
}: UseModalStackPropsOptions) => {
  const stackProps =
    stackCtx && stackId
      ? {
          closeOnEscape: stackCtx.currentId === stackId,
          trapFocus: stackCtx.currentId === stackId,
          zIndex: stackCtx.getZIndex(stackId),
        }
      : {};

  useEffect(() => {
    if (stackCtx && stackId) {
      opened
        ? stackCtx.addModal(stackId, zIndex || getDefaultZIndex('modal'))
        : stackCtx.removeModal(stackId);
    }
  }, [opened, stackId, zIndex]);

  return stackProps;
};
