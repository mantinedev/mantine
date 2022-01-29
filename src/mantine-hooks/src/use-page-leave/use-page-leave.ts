import { useWindowEvent } from '../use-window-event/use-window-event';

export function usePageLeave(onPageLeave: () => void) {
  useWindowEvent('mouseout', (event) => {
    const from = event.relatedTarget || (event as any).toElement;
    (!from || (from as any).nodeName === 'HTML') && onPageLeave();
  });
}
