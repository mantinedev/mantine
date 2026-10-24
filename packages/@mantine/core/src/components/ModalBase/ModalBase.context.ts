import { createSafeContext } from '../../core';
import { TransitionOverride } from '../Transition';
import { RegisterCloseGuard } from './use-close-guards';
import { UseOverlayReturn } from './use-overlay';

interface ModalBaseContextValue extends UseOverlayReturn {
  unstyled: boolean | undefined;
  transitionProps: Partial<TransitionOverride> | undefined;
  onExitTransitionEnd: (() => void) | undefined;
  onEnterTransitionEnd: (() => void) | undefined;
  zIndex: string | number | undefined;

  opened: boolean;
  onClose: () => void;
  requestClose: () => Promise<boolean>;
  registerCloseGuard: RegisterCloseGuard;

  closeOnEscape: boolean | undefined;
  trapFocus: boolean | undefined;
  closeOnClickOutside: boolean | undefined;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContextValue>(
  'Modal/Drawer component was not found in tree'
);
