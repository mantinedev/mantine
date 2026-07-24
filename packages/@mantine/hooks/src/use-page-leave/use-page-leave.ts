import { useEffect } from 'react';
import { useCallbackRef } from '../utils';

export function usePageLeave(onPageLeave: () => void) {
  const onPageLeaveEvent = useCallbackRef(onPageLeave);

  useEffect(() => {
    document.documentElement.addEventListener('mouseleave', onPageLeaveEvent);
    return () => document.documentElement.removeEventListener('mouseleave', onPageLeaveEvent);
  }, []);
}
