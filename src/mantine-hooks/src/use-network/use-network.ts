import { useState, useEffect, useCallback } from 'react';
import { useWindowEvent } from '../use-window-event/use-window-event';

interface NetworkStatus {
  downlink: number;
  effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  saveData: boolean;
  rtt: number;
}

const defaultValue: NetworkStatus = {
  downlink: 10,
  effectiveType: '4g',
  saveData: false,
  rtt: 50,
};

function getConnection(): NetworkStatus {
  if (typeof navigator === 'undefined') {
    return defaultValue;
  }

  const _navigator = navigator as any;
  const connection: any =
    _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;

  if (!connection) {
    return defaultValue;
  }

  return {
    downlink: connection?.downlink,
    effectiveType: connection?.effectiveType,
    saveData: connection?.saveData,
    rtt: connection?.rtt,
  };
}

export function useNetwork() {
  const [status, setStatus] = useState({ online: true, ...getConnection() });
  const handleConnectionChange = useCallback(
    () => setStatus((current) => ({ ...current, ...getConnection() })),
    []
  );

  useWindowEvent('online', () => setStatus({ online: true, ...getConnection() }));
  useWindowEvent('offline', () => setStatus({ online: false, ...getConnection() }));

  useEffect(() => {
    if (navigator.connection) {
      navigator.connection.addEventListener('change', handleConnectionChange);
      return () => navigator.connection.removeEventListener('change', handleConnectionChange);
    }

    return undefined;
  }, []);

  return status;
}
