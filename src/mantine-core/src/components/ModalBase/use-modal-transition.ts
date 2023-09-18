import { TransitionOverride } from '../Transition';
import { useModalBaseContext } from './ModalBase.context';

const DEFAULT_TRANSITION: TransitionOverride = {
  duration: 200,
  timingFunction: 'ease',
  transition: 'fade',
};

export function useModalTransition(
  transitionOverride: TransitionOverride | undefined
): TransitionOverride {
  const ctx = useModalBaseContext();
  return { ...DEFAULT_TRANSITION, ...ctx.transitionProps, ...transitionOverride };
}
