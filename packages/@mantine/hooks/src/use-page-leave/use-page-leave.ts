import { useEffect, useEffectEvent } from 'react';

export function usePageLeave(onPageLeave: () => void) {
  const onPageLeaveEvent = useEffectEvent(onPageLeave);

  useEffect(() => {
    document.documentElement.addEventListener('mouseleave', onPageLeaveEvent);
    return () => document.documentElement.removeEventListener('mouseleave', onPageLeaveEvent);
  }, []);
}
