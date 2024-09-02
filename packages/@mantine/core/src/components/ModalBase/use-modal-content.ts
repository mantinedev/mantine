import { useModalBaseContext } from './ModalBase.context';

export function useModalContentProps() {
  const ctx = useModalBaseContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const shouldTrigger =
      (event.target as HTMLElement)?.getAttribute('data-mantine-stop-propagation') !== 'true';
    shouldTrigger && event.key === 'Escape' && ctx.closeOnEscape && ctx.onClose();
    // OnKeyDown?.(event);
  };

  return {
    focusTrapActive: ctx.opened && ctx.trapFocus,

    contentProps: {
      component: 'section' as const,
      onKeyDown: handleKeyDown,
      role: 'dialog' as const,
      tabIndex: -1,
      'aria-modal': true,
      'aria-describedby': ctx.bodyMounted ? ctx.getBodyId() : undefined,
      'aria-labelledby': ctx.titleMounted ? ctx.getTitleId() : undefined,
    },
  };
}
