import { useWindowEvent } from '../use-window-event/use-window-event';

export function usePageLeave(onPageLeave: () => void) {
  const handler = (event: MouseEvent) => {
    // http://help.dottoro.com/ljltrsom.php
    const from = event.relatedTarget || (event as any).toElement;

    if (!from || (from as any).nodeName === 'HTML') {
      onPageLeave();
    }
  };

  useWindowEvent('mouseout', handler);
}
